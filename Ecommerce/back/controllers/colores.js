const { Color } = require("../database/db");



// ------------ GET ------------ //

exports.getColores = async(req, res) => {

    try {

        const colores = await Color.findAll({ order: [['nombre', 'ASC']] });
      
        if (colores)  return res.status(201).json({
            ok: true,
            status: "todosLosColores",
            colores
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los colores'
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


exports.crearColores = async(req, res) => {

    const { nombre } = req.body


    try {

        const nombreRepetido = await Color.findOne({ where: {nombre} })


        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe ese color",
            })
        }

    
        let [color, created] = await Color.findOrCreate({
            where: { nombre },
            defaults: { nombre }
        });


        if(created) {
            return res.status(201).json({
                ok: true,
                status: "color creada con éxito",
                color
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

