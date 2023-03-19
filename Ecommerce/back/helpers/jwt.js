const jwt = require('jsonwebtoken');
const { SECRET_JSW_SEED } = process.env;


const generarJWT = (uid, name) =>{

    return new Promise( (resolve, reject)  => {

        const payload = { uid, name };

        jwt.sign( payload, SECRET_JSW_SEED,{

            expiresIn: '365d' //duración de mi token

        }, (error, token) => {

            if(error){
                console.log(error);
                reject('No se pudo generar el token');
            }

            resolve(token);

        })
    })
}


module.exports = generarJWT
