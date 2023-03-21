const { Producto, Categoria, Color, Talle } = require("../database/db");




// ------------ GET ------------ //



exports.getProductos = async (req, res) => {

    try {

        const productos = await Producto.findAll({
            order: ['codigo'],
            include: [{
                model: Categoria,
                attributes: ['id', "nombre", "isActive"],
                through: { attributes: [] }
            },
            {
                model: Color,
                attributes: ['id', "nombre"],
                through: { attributes: [] }
            },
            {
                model: Talle,
                attributes: ['id', "nombre"],
                through: { attributes: [] }
            }
            ]
        });

        if (productos) return res.status(201).json({
            ok: true,
            status: "crearProducto",
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



        //##### UNIR LAS DIFERENTES TABLAS #####

        idCategoria.map(async c => { //UNIR CATEGORIA CON PRODUCTO

            if (c !== null || c !== undefined) {

                const categoria = await Categoria.findByPk(c)

                if (categoria) producto.addCategoria(categoria)
            }

        })


        if (idColor !== null || idColor !== undefined) {  //UNIR COLOR CON PRODUCTO

            const color = await Color.findOne({ Where: { idColor } })

            color.addProducto(producto)
        }



        if (idTalle !== null || idTalle !== undefined) {   //UNIR TALLE CON PRODUCTO
            const talle = await Talle.findOne({ Where: { idTalle } })

            talle.addProducto(producto)
        }




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

