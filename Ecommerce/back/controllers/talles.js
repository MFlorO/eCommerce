const { Talle } = require("../database/db");



// ------------ GET ------------ //

exports.getTalles = async(req, res) => {

    try {

        const talles = await Talle.findAll({ order: [['nombre', 'ASC']] });
      
        if (talles)  return res.status(201).json({
            ok: true,
            status: "todosLosTalles",
            talles
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los talles'
        });


    } catch (error){

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}



// ------------ POST ------------ //


exports.crearTalles = async(req, res) => {

    const { nombre } = req.body


    try {

        const nombreRepetido = await Talle.findOne({ where: {nombre} })


        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe ese talle",
            })
        }

    
        let [talle, created] = await Talle.findOrCreate({
            where: { nombre },
            defaults: { nombre }
        });


        if(created) {
            return res.status(201).json({
                ok: true,
                status: "talle creada con éxito",
                talle
            })
        }
        
        return res.status(400).json({
            ok: false,
            status: "No se pudo crear el talle",
        })

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}

