// Aqui estan las funciones que van almacenar, consultar datos

const multer = require('multer'); //Recibe un dato a traves de metodo POST
const{getConnection}=require('../database');
const {GridFSBucket}=require('mongodb');
const getTrack = (req, res) => {
    res.send('track');
};

const uploadTrack = (req, res) => {
    const storage = multer.memoryStorage(); //El archivo subido lo gurada en memoria 
    const upload = multer({
        storage,
        limits: {
            fields: 1,
            fileSize: 6000000,
            files: 1,
            parts: 2
        }
    }); // Configuracion
    upload.single('track')(req,res,(err)=>{ // El archivo va sersubido con nombre de 'track'
        if(err){
            console.log(err);
            return res.status(400).json({
                message:err.message
            });
        }else if(!req.body.name){
            return res.status(400).json({
                message:'No track name in request body'
            })
        }

    });// Permite escuchar cuando un archivo se ha subido

    let trackName=req.body.name; //Guardar el nombre de la cancion y el archivo es poblado por multer req.file
    const db=getConnection();
    const bucket=new GridFSBucket(db,{ 
        bucketName:'tracks'
    });//Este modulo GridFs permite guardar archivos mayores a 16 MB en multiples partes en multiples servidores

    const uploadStream=bucket.openUploadStream(trackName);
    const id=uploadStream.id;
}


module.exports = {
    getTrack,
    uploadTrack
};