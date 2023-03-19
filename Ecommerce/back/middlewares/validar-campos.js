const {response} = require('express')
const {validationResult} = require('express-validator')



const validarCampos = (req, res, next) =>{

    const error = validationResult(req)

    if(!error.isEmpty()){    //Manejo de errores
        return res.status(400).json({
            ok: false,
            errors: error.mapped()
        })
    }

    next();
    
}


module.exports = validarCampos