const sharp = require('sharp');
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

    async compressImg(inputPath, outputPath, maxWidth, maxHeight, quality){
        return new Promise(resolve => {

            const imagenOriginal = fs.readFileSync(inputPath);

            sharp(imagenOriginal)
            .resize({
                width: maxWidth,
                height: maxHeight,
                fit: 'inside'
            })
            .jpeg({ quality: quality })
            .toBuffer((err, data, info) => {
                if (err) resolve(false);
                else resolve(data);
            });

        });
    }
}

module.exports = new FilesHandler();