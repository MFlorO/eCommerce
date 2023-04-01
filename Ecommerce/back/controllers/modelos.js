const { Modelo, Producto, ModeloVariante } = require("../database/db");



// ------------ GET ------------ //


exports.getModelos = async (req, res) => {

    try {

        const modelo = await Modelo.findAll({
            order: [['color', 'ASC']],
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

    const { codigo } = req.params;   //codigo -> id del producto que contiene el modelo

    console.log(codigo)

    const { color, talle, stock} = req.body;   
    
    try {

        const producto = await Producto.findByPk(codigo);

        if (!producto) return res.status(404).json({
            ok: false,
            status: 'Producto no encontrado'
        });
        
    
        const modelo = await Modelo.create( {
            color,
            productoCodigo: codigo
        });

        console.log(modelo)


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



// ------------ PUT ------------ //


exports.modificarModelo = async(req, res) => {

    const { color, talle, stock } = req.body;  
    const { id, idMV } = req.params 

    console.log( {color, talle, stock, id, idMV} )
    
    try {

        await Modelo.update({ 
            color
        },
        { where: {id:id}  }
        );

       await ModeloVariante.update( {
            talle,
            stock,
       },
       { where: {id:idMV}  }
       );

         return res.status(201).json({
            ok: true,
            status: "Modelo modificado con éxito",
        })
        

    
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
