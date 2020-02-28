const express=require('express');
const morgan=require('morgan'); //Para ver las peticiones que van llegar
const cors= require('cors'); // Comunicar este servidor con otros

const trackRoutes=require('./routes/tracks.routes');

// Initializations
const app= express();

//middlewares
app.use(cors());
app.use(morgan('dev')); //

//routes
app.use(trackRoutes);
app.listen(3000);
console.log('Server on port ', 3000);