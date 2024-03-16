const mongoose = require('mongoose');
const color = require('colors/safe')
require('dotenv').config();

class Database {

    constructor(){
        this.URI = process.env.MONGODB_URI;

        try {
            mongoose.connect( this.URI );
            this.connection = mongoose.connection;

            this.connection.once('open', async()=>{
                console.log(color.cyan('La base de datos se lanzó en',this.URI));
            });
        }catch(err){
            console.error( color.red('Hubo un error al conectar la base de datos:'), err )
        }
    }

}

module.exports = Database;