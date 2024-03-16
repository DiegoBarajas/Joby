const HTTPHandler  = require('../classes/HTTPHandler');
const Mailer = require('../classes/Mailer');
const Users = require('../models/users.model');
const Passkeys = require('../models/passkey.model');
const bcrypt = require('bcrypt');

const controller = {};

function Login(io){

    // Iniciar sesion
    controller.login = async(req, res) => {
        const body = HTTPHandler.getBody(req, [ 'email', 'password' ]);

        if( body ){
            const user = await Users.find({ email: body.email });
            if(user.length > 0){

                if( bcrypt.compareSync(body.password, user[0].password) ){

                    HTTPHandler.okResponse(res, user[0]);

                }else{
                    HTTPHandler.clientError(res, {
                        message: 'Correo o contraseña incorrectos'
                    });
                }

            }else{
                HTTPHandler.clientError(res, {
                    message: 'Correo o contraseña incorrectos'
                });
                return;
            }

        }else{
            HTTPHandler.clientError(res, {
                message: "Correo o contraseña no ingresado correctamente"
            });
        }
            

    }

    // Crear cuenta
    controller.createUser = async(req, res) => {

    }

    // Olvide mi contraseña
    controller.forgotPassword = async(req, res) => {
        const { state } = req.params;

        switch (state) {
            case '1': state1(req, res);
                break;
            case '2': state2(req, res);
                break;
            default: HTTPHandler.clientError(res, {
                        message: `Parametro 'state=${state}' no valido`
                    });
        }

    }

  

    return controller;
}

module.exports = Login;

// Funciones para FORGOT (controller.forgotPassword) segun state
/*
    1. Enviar correo electronico
    2. Cambiar contraseña 
*/

async function state1(req, res){
    const body = HTTPHandler.getBody(req, [ 'email' ]);

    if(body){
        const user = await Users.find({ email: body.email });

        if(user.length > 0){
            const passkey = createPasskey();

            await Passkeys.findOneAndDelete({ userId: user[0].id });
            new Passkeys({
                userId: user[0].id,
                userEmail: user[0].email,
                passkey
            }).save();

            const mailer = new Mailer();
            mailer.sendTemplateMail(body.email, 'Joby: Recuperar contraseña', mailer.mailForgotPass, { name: user[0].name, passkey }, false)
                .then((info) => {
                    HTTPHandler.okResponse(res, {
                        message: "Si el correo es correcto, se enviara un link para reiniciar la contraseña",
                        info
                    });
                }).catch((err) => {
                    HTTPHandler.serverError(res, {
                        message: "Ha ocurrido un error al enviar el correo",
                        error: err
                    });
                });

        }else{
            HTTPHandler.okResponse(res, {
                message: "Si el correo es correcto, se enviara un link para reiniciar la contraseña"
            });
        }
    }else{
        HTTPHandler.clientError(res, {
            message: "Correo no ingresado correctamente"
        });
    }
}

async function state2(req, res){
    const body = HTTPHandler.getBody(req, [ 'email', 'newPassword', 'passkey' ]);

    if(body){
        const passkey = await Passkeys.findOne({ userEmail: body.email, passkey: body.passkey });

        if(passkey == null){
            HTTPHandler.clientError(res, {
                message: "Passkey incorrecto o expirado"
            });
        }else{
            try{
                const password = bcrypt.hashSync(body.newPassword, 5);

                const user = await Users.findOneAndUpdate({ email: body.email },
                {
                    password
                });

                HTTPHandler.okResponse(res, {
                    message: 'Contraseña actualizada con exito',
                    user
                });

                await Passkeys.findOneAndDelete({ userId: user.id });
            }catch(err){
                HTTPHandler.serverError(res, {
                    message: 'Ha ocurrido un error al actualizar la contraseña',
                    error: err
                })
            }
        }

    }else{
        HTTPHandler.clientError(res, {
            message: "Correo, nueva contraseña o passkey no ingresado correctamente"
        });
    }


}

// Generar passkey
function createPasskey() {
    let codigo = '';
    const longitud = 24;
    const caracteres = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indiceAleatorio);
    }

    return codigo;
}