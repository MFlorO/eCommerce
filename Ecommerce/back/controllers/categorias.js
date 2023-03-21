const { Producto, Categoria } = require("../database/db");



// ------------ GET ------------ //

exports.getCategorias = async(req, res) => {

    try {

        const categorias = await Categoria.findAll({ order: [['nombre', 'ASC']] });
      
        if (categorias)  return res.status(201).json({
            ok: true,
            status: "todasLasCategorias",
            categorias
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontraron las categorias'
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


exports.crearCategoria = async(req, res) => {

    const { nombre } = req.body


    try {

        const nombreRepetido = await Categoria.findOne({ nombre })


        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe una categoría con ese nombre",
            })
        }

    
        let [categoria, created] = await Categoria.findOrCreate({
            where: { nombre },
            defaults: { nombre }
        });


        if(created) {
            return res.status(201).json({
                ok: true,
                status: "categoría creada con éxito",
                categoria
            })
        }
        
        return res.status(400).json({
            ok: false,
            status: "No se pudo crear la categoria",
        })

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}

