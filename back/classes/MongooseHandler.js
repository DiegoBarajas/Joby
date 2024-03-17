const mongoose = require('mongoose');

class MongooseHandler{

    constructor(Model){
        this.Model = Model;
    }

    async find(filter = {}) {
        return new Promise(async(resolve, reject) => {
            const dbStatus = await this.#comprobateConnection();

            if (dbStatus.connected) {
                
                this.Model.find(filter)
                    .then((data) => resolve(data))
                    .catch(err => reject({
                            error: err,
                            message: 'Ha ocurrido un error al intentar hacer la operación'
                        })
                    )
                
            }else{
                reject({
                    error: '[BASE DE DATOS NO CONECTADA]',
                    message: 'La base de datos esta desconectada'
                });
            }

        });
    }

    async findOne(filter) {
        return new Promise(async(resolve, reject) => {
            const dbStatus = await this.#comprobateConnection();

            if (dbStatus.connected) {
                
                this.Model.findOne(filter)
                    .then((data) => resolve(data))
                    .catch(err => reject({
                            error: err,
                            message: 'Ha ocurrido un error al intentar hacer la operación'
                        })
                    )
                
            }else{
                reject({
                    error: '[BASE DE DATOS NO CONECTADA]',
                    message: 'La base de datos esta desconectada'
                });
            }

        });
    }

    async findOneAndDelete(filter){
        return new Promise(async(resolve, reject) => {
            const dbStatus = await this.#comprobateConnection();

            if (dbStatus.connected) {
                
                this.Model.findOneAndDelete(filter)
                    .then((data) => resolve(data))
                    .catch(err => reject({
                            error: err,
                            message: 'Ha ocurrido un error al intentar hacer la operación'
                        })
                    )
                
            }else{
                reject({
                    error: '[BASE DE DATOS NO CONECTADA]',
                    message: 'La base de datos esta desconectada'
                });
            }

        });
    }

    async findOneAndUpdate(filter, object){
        return new Promise(async(resolve, reject) => {
            const dbStatus = await this.#comprobateConnection();

            if (dbStatus.connected) {
                
                this.Model.findOneAndUpdate(filter, object)
                    .then((data) => resolve(data))
                    .catch(err => reject({
                            error: err,
                            message: 'Ha ocurrido un error al intentar hacer la operación'
                        })
                    )
                
            }else{
                reject({
                    error: '[BASE DE DATOS NO CONECTADA]',
                    message: 'La base de datos esta desconectada'
                });
            }

        });
    }

    async create(object){
        return new Promise(async(resolve, reject) => {
            const dbStatus = await this.#comprobateConnection();

            if (dbStatus.connected) {
                
                new this.Model(object).save()
                    .then((data) => resolve(data))
                    .catch(err => reject({
                            error: err,
                            message: 'Ha ocurrido un error al intentar hacer la operación'
                        })
                    )
                
            }else{
                reject({
                    error: '[BASE DE DATOS NO CONECTADA]',
                    message: 'La base de datos esta desconectada'
                });
            }

        });
    }

    #comprobateConnection() {
        return new Promise(resolve => {
            const dbStatus = mongoose.connection.readyState;
            
            switch(dbStatus) {
                case 0:
                    resolve({
                        code: dbStatus,
                        connected: false,
                        message: '[ERROR EN LA BASE DE DATOS] Desconocido en la conexión'
                    });
                    break;
                case 1:
                    resolve({
                        code: dbStatus,
                        connected: true,
                        message: '[CONEXION DE LA BASE DE DATOS] Todo parece OK'
                    });
                    break;
                case 2:
                    setTimeout(() => {
                        resolve(this.#comprobateConnection());
                    }, 5000);
                    break;
                case 3:
                    setTimeout(() => {
                        resolve(this.#comprobateConnection());
                    }, 5000);
                    break;
                default:
                    resolve({
                        code: dbStatus,
                        connected: false,
                        message: '[ERROR EN LA BASE DE DATOS] Desconocido en la conexión'
                    });
            }
        });
    }

}

module.exports = MongooseHandler;