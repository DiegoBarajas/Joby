const express = require('express');
const color = require('colors/safe');
const http = require('http');
const cors = require('cors');
const socketIo = require('socket.io');
const fileUpload = require("express-fileupload");
const Sockets = require('../classes/Sockets');
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;
        this.server = http.createServer( this.app );
        this.io = socketIo( this.server, {
            cors: '*'
        } );

        new Sockets( this.io );
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors() );
        this.app.use( express.json() );
        this.app.use( fileUpload(
            {
                useTempFiles: true,
                limits: {fileSize: 50 * 2024 * 1024}
            }
        ));
    }

    routes() {
        // Index
        this.app.get('/', (req, res) => {
            res.send('Backend');
        });
    }

    start(){
        this.server.listen( this.port, () => {
            console.clear();
            console.log( color.cyan('Server launched on port:', this.port) );
        });
    }

}

module.exports = Server;