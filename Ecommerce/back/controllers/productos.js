const { Producto, Categoria } = require("../database/db");




// ------------ GET ------------ //



exports.getProductos = async(req, res) => {

    try {
    
        const productos = await Producto.findAll({
            order:['codigo'],
            include: [{
                model: Categoria, 
                attributes: ['id',"nombre","isActive"],
                through: { attributes: [] }
            }]
        });

        if (productos)  return res.status(201).json({
            ok: true,
            status: "crearProducto",
            productos
        })

        return res.status(404).json({
            ok: false,
            status: 'No se encontraron los productos'
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


exports.crearProducto = async(req, res) => {

    const { codigo } = req.body


    try {
    
        const codigoRepetido = await Producto.findOne({ codigo })


        if(codigoRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un producto con ese código",
            })
        }
        
        const producto = await Producto.create(req.body)



        return res.status(201).json({
            ok: true,
            status: "crearProducto",
            producto
        })

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}






