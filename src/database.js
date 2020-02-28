const {MongoClient}=require('mongodb');

let db;
MongoClient.connect('mongodb://localhost/tracksdb', (err,client)=>{
    if(err){
        console.log(err);
        process.exit(0);//Acaba la ejecucion de programa
    }
    db=client.db('tracksdb');
    console.log('Database is connected');

}); //La base de datos sera llamada tracksdb

const getConnection=()=>db; //Retorna el Objeto db

module.exports={
    getConnection
}