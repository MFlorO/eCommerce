/*   Rutas de Producto
     host + api/productos
*/

const { Router } = require('express');
const router = Router();
const { crearProducto, getProductos } = require('../controllers/productos');
// const {check} = require('express-validator');




router.get('/', getProductos)
router.post('/', crearProducto );




module.exports = router