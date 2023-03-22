const { Modelo, Producto } = require("../database/db");



// ------------ GET ------------ //

exports.getModelos = async(req, res) => {

    try {

        const modelos = await Modelos.findAll({
            include: [{ model: Producto }]
        });
      
        if (modelos)  return res.status(201).json({
            ok: true,
            status: "todosLosmodelos",
            modelos
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los modelos'
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


exports.crearModelos = async(req, res) => {

    const { color, productoCodigo } = req.body   //codigo -> id producto


    try {

        const producto = await Producto.findByPk(productoCodigo);

        if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });

    
        const modelo = await Modelo.create( {
            color,
            productoCodigo: producto.codigo
        });
    
        return res.status(201).json({
            ok: true,
            status: "color creada con éxito",
            modelo
        });
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}

