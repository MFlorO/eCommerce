const mongoose = require('mongoose');

const { DB_CONNECTION } = process.env;


const dbConnection = async () =>{
    try {
        
       await mongoose.connect(DB_CONNECTION);

    // { userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }

       console.log('db online')

    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar la base de datos')
    }
}

module.exports = dbConnection