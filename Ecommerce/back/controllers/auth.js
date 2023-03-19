const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs')

const crearUsuario = async(req, res) => {

    const { email , password } = req.body

    try {
    
        let usuario = await Usuario.findOne({email})

        if(usuario) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un usuario con ese correo",
            })
        }
        
        usuario = new Usuario(req.body); //Creo la instancia


        //ENCRIPTAR CONTRASEÑA
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password,salt);

        //Guardo todo en la base de datos
        await usuario.save()

        return res.status(201).json({
            ok: true,
            status: "registro",
            uid: usuario.id,
            name: usuario.name
        })

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}


const login = async(req, res) => {


    try {

        const usuario = new Usuario(req.body); //Creo la instancia

        await usuario.save()
    
    
        res.status(201).json({
            ok: true,
            status: "login",
        })
    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}


module.exports = {
    crearUsuario,
    login
}