const { Op } = require("sequelize");
const { Producto, Categoria, Modelo, ModeloVariante } = require("../database/db");




// ------------ GET ------------ //



exports.getProductos = async (req, res) => {

    const { codigo, nombre } = req.query;

    try {
        
        if (codigo || nombre) {

            const productos = await Producto.findAll({
                order: [['nombre', 'ASC']],
                where: {
                    [Op.and]: {
                      activo: true,
                      [Op.or]: [
                        {
                          nombre: {
                            [Op.iLike]: `%${nombre}%`
                          }
                        },
                        {
                          codigo: {
                            [Op.iLike]: `%${codigo}%`
                          }
                        }
                      ]
                    }
                  },
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
            })


            if (productos.length > 0) return res.status(201).json({
                ok: true,
                status: "getProducto",
                productos
            })
    
            return res.status(400).json({
                ok: false,
                status: 'No se encontraron los productos con esos filtros'
            });


        } else {

            const productos = await Producto.findAll({
                order: [['nombre', 'ASC']],
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

        }


    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}




//-------- GET MODELOS SEGUN EL ID DEL PRODUCTO --------- //


exports.getProductoId = async(req, res) => {

    const { codigo } = req.params  //Código del producto

    try {

        const productoId = await Producto.findOne({
            where: { codigo },
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
      
        if (productoId)  return res.status(201).json({
            ok: true,
            status: "Producto por id",
            productoId
        })
        
        return res.status(400).json({
            ok: false,
            status: 'No se encontro el producto según el id'
        });

    } catch (error){

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })

        console.log(error)
    }
}



// --------- GET FILTRO --------- //



exports.getProductosByFilter = async (req, res) => {

    const { idcategoria, idMV } = req.query

    try {

        const productos = await Producto.findAll({
            order: [['nombre', 'ASC']],

            include: [Categoria, Modelo],
            where: {
                [Op.or]: [
                    { "$categoria.id$": Number(idcategoria) },
                    { "$modelos.id$": Number(idMV) },  
                ],
            },
        });

        console.log(productos)

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


function validaciones( nombre , descripcion, precio, imagen, fechaPublicacion ) {

    if (!nombre || nombre === undefined || nombre.length > 300) return false;
    if (!descripcion || descripcion === undefined || descripcion.length > 5200)
        return false;
    if (!precio || precio < 0 || precio === undefined) return false;
    if (!imagen || imagen === undefined) return false;
    if (!fechaPublicacion || fechaPublicacion === undefined) return false;

    return true;
}


exports.crearProducto = async (req, res) => {

    const { codigo, nombre, descripcion, precio, imagen, fechaPublicacion, oferta } = req.body


    if ( !validaciones( codigo, nombre , precio, descripcion, imagen, fechaPublicacion ) )  
    return res.status(400).json({ ok: false, status: "Error con las validaciones" });




    try {

        const codigoRepetido = await Producto.findOne({ where: { codigo } })


        if (codigoRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un producto con ese código",
            })
        }

        const producto = await Producto.create({
            codigo: codigo.toUpperCase(),
            nombre: nombre.toLowerCase(),
            precio,
            descripcion: descripcion.toLowerCase(),
            imagen,
            fechaPublicacion,
            oferta
        });

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


// ------------ PUT ------------ //


exports.editProducto = async(req, res) => {

    const { codigo, nombre , precio, descripcion, imagen, fechaPublicacion, oferta, idCategoria } = req.body

    const nombreMinuscula = nombre.toLowerCase()

    if ( !validaciones( codigo, nombre , precio, descripcion, imagen, fechaPublicacion, idCategoria ) )  
    return res.status(400).json({ ok: false, status: "Error con las validaciones" });

    
    try {

        const producto = await Producto.findByPk(codigo)
        const nombreRepetido = await Producto.findOne({ where: {nombre: nombreMinuscula} })
    
        if(producto === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el producto",
            })
        }

        if(nombreRepetido) {
            return res.status(400).json({
                ok: false,
                status: "ya existe un producto con ese nombre",
            })
        }

    
        producto.nombre = nombreMinuscula;
        producto.descripcion = descripcion;
        producto.precio = precio;
        producto.imagen = imagen;
        producto.fechaPublicacion = fechaPublicacion;
        producto.oferta = oferta

        await producto.save()
 
        idCategoria.map(async c => { //UNIR CATEGORIA CON PRODUCTO

            if (c !== null || c !== undefined) {

                const categoria = await Categoria.findByPk(c)

                if (categoria) producto.addCategoria(categoria)
            }

        })


         return res.status(201).json({
            ok: true,
            status: "producto modificado con éxito",
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




// ------------ DELETE ------------ //



exports.deleteProducto = async(req, res) => {

    const { codigo } = req.body

    try {

        const productoExistente = await Producto.findByPk(codigo)
    
        if(productoExistente === null) {
            return res.status(400).json({
                ok: false,
                status: "No se encontró el producto",
            })
        }

        await Producto.destroy( { where: {codigo} } );


        return res.status(201).json({
            ok: true,
            status: "producto eliminado con éxito",
        })
        

    
    } catch (error) {

        res.status(500).json({
            ok: false,
            status: "comunicarse con el administrador",
        })
        console.log(error)
    }
}
