const nodemailer = require("nodemailer");
const color = require('colors/safe');
const Path = require('path');
const fs = require('fs');
require('dotenv').config();

class Mailer {

    // Templates
    mailForgotPass = 'mail-forgot-pass.html'

    #configOptions;
    #transporter;

    constructor(){
        this.#configOptions = {
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        
        }
        this.#transporter = nodemailer.createTransport(this.#configOptions);
    }

    sendTextMail(to, subject, text, log=true){
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            text
        }

        return new Promise( async(resolve, reject) => {
            this.#transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    if(log) console.error(color.red(`[ERROR]: Ha ocurrido un error al enviar el correo: `), error);
                    reject(error);
                } else {
                    if(log) console.log(color.green(`[ENVIADO]: El correo se envió exitosamente: `), info);
                    resolve(info);
                }
            });
        });
    }

    sendTemplateMail(to, subject, template, json, log=true){
        const path = Path.resolve(__dirname, '../templates', template);
        const html = useTemplate(path, json);

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            html
        }

        return new Promise( async(resolve, reject) => {
            this.#transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    if(log) console.error(color.red(`[ERROR]: Ha ocurrido un error al enviar el correo: `), error);
                    reject(error);
                } else {
                    if(log) console.log(color.green(`[ENVIADO]: El correo se envió exitosamente: `), info);
                    resolve(info);
                }
            });
        });

    }

}

module.exports = Mailer;

function useTemplate(path, json){
    const content = fs.readFileSync(path, 'utf8');

    return content.replace(/%\{\s*(\w+)\s*}%/g, (match, variable) => {
        return json[variable] || match;
    });
}