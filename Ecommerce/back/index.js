const express = require('express');
require('dotenv').config();
const { PORT } = process.env;

const cors = require('cors')
const dbConnection = require('./database/config');







//Cear el servidor express
const app = express()

//BASE DE DATOS
dbConnection();

//Cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json()); 


//Rutas
app.use('/api/auth', require('./routes/auth'));




//Escuchar peticiones
app.listen(PORT, () => console.log(`Aplicación esuchando en el puerto ${PORT}`))