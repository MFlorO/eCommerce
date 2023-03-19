


const crearUsuario = (req, res) => {

    const {name, email, password} = req.body;

    res.status(200).json({
        ok: true,
        status: "register",
        name,
        email,
        password
    })

}


const login = (req, res) => {

    const {email, password} = req.body;


    res.status(200).json({
        ok: true,
        status: "login",
        email,
        password
    })
}


module.exports = {
    crearUsuario,
    login
}