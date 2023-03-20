/*   Rutas de Producto
     host + api/productos
*/

const { Router } = require('express');
const router = Router();
const { crearProducto, getProductos } = require('../controllers/productos');
// const {check} = require('express-validator');




router.get('/productos', getProductos)
router.post('/crearProducto', crearProducto );




module.exports = router