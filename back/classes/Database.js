const mongoose = require('mongoose');
const readline = require('readline');
const color = require('colors/safe')
require('dotenv').config();

class Database {

    constructor() {
        this.URI = isEmpty( process.env.MONGODB_URI ) ? 'mongodb://127.0.0.1:27017/joby' : process.env.MONGODB_URI;
        this.connect();
    }

    async connect() {
        await mongoose.connect( this.URI )
            .then(()=>{
                console.log(color.cyan('[ DATABASE ] Connected successfully'));
                const rl = readline.createInterface({
                    input: process.stdin,
                    output: process.stdout
                });
                
                const width = process.stdout.columns;
                const line = "=".repeat(width);

                console.log(color.cyan( line ));

                rl.close();
            })
            .catch((err)=>{
                console.error(color.red('[ERROR EN LA BASE DE DATOS] Error de conexión a MongoDB:'), '\n', err);
            });
    }

}

module.exports = Database;

function isEmpty(atr){
    if(atr == undefined || atr == null || atr == '') return true;
    else return false;
}