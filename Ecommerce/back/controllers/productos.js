const { Producto, Categoria, Modelo, ModeloVariante, Talle } = require("../database/db");




// ------------ GET ------------ //



exports.getProductos = async (req, res) => {

    try {

        const productos = await Producto.findAll({
            order: ['codigo'],
            include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                model: Categoria,
                attributes: ['id', "nombre"],
                through: { attributes: [] }
             },
             {
                model: Modelo,
                include: [{model: ModeloVariante}]
                
             }
            ]
        });

        if (productos) return res.status(201).json({
            ok: true,
            status: "getProducto",
            productos
        })

        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los productos'
        });

    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}




// ------------ POST ------------ //


exports.crearProducto = async (req, res) => {

    const { codigo, idCategoria, idColor, idTalle } = req.body


    try {

        const codigoRepetido = await Producto.findOne({ where: { codigo } })


        if (codigoRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un producto con ese código",
            })
        }

        const producto = await Producto.create(req.body);



    
        idCategoria.map(async c => { //UNIR CATEGORIA CON PRODUCTO

            if (c !== null || c !== undefined) {

                const categoria = await Categoria.findByPk(c)

                if (categoria) producto.addCategoria(categoria)
            }

        })

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

