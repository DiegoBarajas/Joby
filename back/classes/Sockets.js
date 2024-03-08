class Sockets {
    
    constructor( io ){
        io.on('connect', (socket) => {

            console.log('NEW CONNECTION');

        });
    }

}

module.exports = Sockets;