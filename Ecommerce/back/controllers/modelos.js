const { Modelo, Producto, ModeloVariante } = require("../database/db");



// ------------ GET ------------ //


exports.getModelos = async (req, res) => {

    try {

        const modelo = await Modelo.findAll({
            order: ['id'],
            include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                model: ModeloVariante
             }
            ]
        });

        if (modelo) return res.status(201).json({
            ok: true,
            status: "Todos los modelos",
            modelo
        })

        return res.status(400).json({
            ok: false,
            status: 'No se encontraron los modelos'
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


exports.crearModelos = async(req, res) => {

    const { productoCodigo } = req.params;

    const { color, talle, stock} = req.body;   //productoCodigo -> id del producto que contiene el modelo
    
    try {

        const producto = await Producto.findByPk(productoCodigo);

        if (!producto) return res.status(404).json({
            ok: false,
            status: 'Producto no encontrado'
        });
        
    
        const modelo = await Modelo.create( {
            color,
            productoCodigo
        });


        const modeloVariante = await ModeloVariante.create( {
            talle,
            stock,
            modeloId: modelo.dataValues.id
       });


        if (modeloVariante) await modelo.addModeloVariante(modeloVariante)
    
       
    
        return res.status(201).json({
            ok: true,
            status: "Modelo creado con éxito",
            modelo,
            modeloVariante
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


exports.crearModelos = async(req, res) => {

    const { productoCodigo } = req.params;

    const { color, talle, stock} = req.body;   //productoCodigo -> id del producto que contiene el modelo

    console.log('backParams', productoCodigo)
    console.log('backBody', { color, talle, stock} )
    
    try {

        const producto = await Producto.findByPk(productoCodigo);

        if (!producto) return res.status(404).json({
            ok: false,
            status: 'Producto no encontrado'
        });
        
    
        const modelo = await Modelo.create( {
            color,
            productoCodigo
        });


        const modeloVariante = await ModeloVariante.create( {
            talle,
            stock,
            modeloId: modelo.dataValues.id
       });


        if (modeloVariante) await modelo.addModeloVariante(modeloVariante)
    
       
    
        return res.status(201).json({
            ok: true,
            status: "Modelo creado con éxito",
            modelo,
            modeloVariante
        });
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}



// ------------ DELETE ------------ //



exports.deleteModelo = async(req, res) => {

    const { id } = req.body

    try {

        const modeloExistente = await Modelo.findByPk(id)
    
        if(modeloExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró ese modelo",
            })
        }

        await Modelo.destroy( { where: {id:id} } );

        return res.status(201).json({
            ok: true,
            status: "modelo eliminado con éxito",
        })
            
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}
