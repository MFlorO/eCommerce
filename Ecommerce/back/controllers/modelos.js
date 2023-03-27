const { Modelo, Producto, ModeloVariante } = require("../database/db");



// ------------ GET ------------ //


exports.getModelos = async (req, res) => {

    try {

        const productos = await Modelo.findAll({
            order: ['id'],
            include: [{          //##### UNIR LAS DIFERENTES TABLAS #####
                model: ModeloVariante
             }
            ]
        });

        if (productos) return res.status(201).json({
            ok: true,
            status: "get Modelo",
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


// exports.getModelos = async(req, res) => {

//     try {

//         const modelos = await Modelo.findAll();
      
//         if (modelos.length > 0)  return res.status(201).json({
//             ok: true,
//             status: "Todos los modelos",
//             modelos
//         })
        
//         return res.status(400).json({
//             ok: false,
//             status: 'No se encontraron los modelos'
//         });


//     } catch (error){

//         res.status(500).json({
//             ok: false,
//             status: "comunicarse con el administrador",
//         })

//         console.log(error)
//     }
// }







// ------------ POST ------------ //


exports.crearModelos = async(req, res) => {

    const { productoCodigo, color, talle, stock} = req.body   //productoCodigo -> id del producto que contiene el modelo


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




// exports.crearModelos = async(req, res) => {

//     const { color, productoCodigo } = req.body   //productoCodigo -> id del producto que contiene el modelo


//     try {

//         const producto = await Producto.findByPk(productoCodigo);

//         if (!producto) return res.status(404).json({
//             ok: false,
//             status: 'Productono encontrado'
//         });

    
//         const modelo = await Modelo.create( {
//             color,
//             productoCodigo
//         });
    
//         return res.status(201).json({
//             ok: true,
//             status: "Color creado con éxito",
//             modelo
//         });
        

    
//     } catch (error) {

//         res.status(500).json({
//             ok: false,
//             status: "comunicarse con el administrador",
//         })
//         console.log(error)
//     }
// }

