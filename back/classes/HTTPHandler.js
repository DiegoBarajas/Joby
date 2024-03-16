class HTTPHandler  {
    /* METODOS PUBLICOS */
    // METODO OK
    okResponse( res, data, status=200 ) {
        return ( this.#sendResponce(res, data, status) );
    }

    // METODO ERROR DEL CLIENTE
    clientError( res, data, status=400 ) {
        return ( this.#sendResponce(res, data, status) );
    }

    // METODO ERROR DEL SERVIDOR
    serverError( res, data, status=500 ) {
        return ( this.#sendResponce(res, data, status) );
    }

    requestDenied( res, data ) {
        return ( this.#sendResponce(res, data, 999) );
    }

    getBody(req, keys){
        const { body } = req;

        for(let i=0 ; i<keys.length ; i++){
            if ( this.#isEmpty( body[ keys[i] ]) ){
                return false;
            }
        }

        return body;
    }


    /* METODOS PUBLICOS */
    #sendResponce(res, data, status){
        try {
            if(this.#isJSON(data)) res.status(status).json(data);
            else res.status(status).send(data); 

            return true;
        }catch(e){
            return false;
        }
    }

    #isJSON = (atr) => {
        try {
            JSON.parse(atr);
            return true;
        } catch (e) {
            return false;
        }
    }

    #isEmpty = (value) => {
        return value == undefined || value == ''
            ? true
            : false
    }

}

module.exports = new HTTPHandler();