const HTTPHandler  = require('../classes/HTTPHandler');
const Users = require('../models/users.model');
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
            case '1': state1(res, res);
                break;
            case 2: 
                break;
            default: HTTPHandler.clientError(res, {
                message: `Parametro 'state=${state}' no valido`
            });
                break;
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

function state1(req, res){
    const body = HTTPHandler.getBody(req, [ 'email', 'password' ]);

    if(body){
        
    }else{
        HTTPHandler.clientError(res, {
            message: "Correo no ingresado correctamente"
        });
    }
}