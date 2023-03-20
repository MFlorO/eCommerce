const { Usuario } = require("../database/db");
const bcrypt = require('bcryptjs')
const generarJWT = require('../helpers/jwt')





const crearUsuario = async(req, res) => {

    const { email , password } = req.body

    try {
    
        const usuarioEmail = await Usuario.findOne({ email })


        if(usuarioEmail) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un usuario con ese correo",
            })
        }
        
        const usuario = new Usuario(req.body); //Creo la instancia


        //ENCRIPTAR CONTRASEÑA
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password,salt);

        //Guardo todo en la base de datos
        await usuario.save()


        //GENERAR NUESTRO JSON WEB TOKEN
        const token = await generarJWT(usuario.uid, usuario.name);


        return res.status(201).json({
            ok: true,
            status: "registro",
            usuario,
            token
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

    const { email , password } = req.body


    try {

        const usuario = await Usuario.findOne({ email })

        if(!usuario) {
            return res.status(400).json({
                ok: false,
                status: "Usuario y/o contraseña no son correctos",
            })
        }


        console.log(usuario)



        //CONFIRMAR CONTRASEÑA ENCRYPTADA
        const validPassword = bcrypt.compareSync(password,usuario.password)

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                status: "Contraseña incorrecta",
            })
        }

        //GENERAR JSON WEB TOKEN

        const token = await generarJWT(usuario.uid, usuario.name);

        return res.status(201).json({
            ok: true,
            status: "login",
            usuario,
            token
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