const{Router}=require('express');
const router=Router();
const {getTrack, uploadTrack}=require('../controllers/tracks.controller');

router.get('/tracks/:trackID',getTrack); //Define las URLs que se van estar utilizando

router.post('/tracks',uploadTrack);


module.exports=router;