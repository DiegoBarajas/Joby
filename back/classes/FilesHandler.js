const fs = require('fs');

class FilesHandler{
    deleteAllFilesFromArray(array, key){
        array.forEach(f => {
            if(f == undefined) return;
            fs.unlinkSync(f[key]);
        });
    }

    getAllFilesFromReq(req){
        const { files } = req;

        return files;
    }
}

module.exports = new FilesHandler();