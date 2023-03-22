const { ModeloVariante, Modelo } = require("../database/db");






// ------------ GET ------------ //

exports.getModeloVariantes = async(req, res) => {

     try {
 
         const modelosVariantes = await ModeloVariante.findAll({
             include: [{ model: Modelo }]
         });
       
         if (modelosVariantes)  return res.status(201).json({
             ok: true,
             status: "Todos los modelos variantes",
             modelosVariantes
         })
         
         return res.status(400).json({
             ok: false,
             status: 'No se encontraron los modelosVariantes'
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
 
 
 exports.crearModeloVariantes = async(req, res) => {
 
     const { talle, stock, modeloId } = req.body   //codigo -> id producto
 
 
     try {
 
 
        const modelo = await Modelo.findByPk(modeloId);
 
        if (!modelo) return res.status(404).json({
            ok: false,
            status: 'Modelo no encontrado'
        });
         
     
        const modeloVariantes = await ModeloVariante.create( {
             talle,
             stock,
             modeloId: modelo.id
        });
     
        return res.status(201).json({
             ok: true,
             status: "talle y stock creado con éxito",
             modeloVariantes
        });
         
 
     
     } catch (error) {
 
         res.status(500).json({
             ok: false,
             status: "comunicarse con el administrador",
         })
         console.log(error)
     }
 }
 
 