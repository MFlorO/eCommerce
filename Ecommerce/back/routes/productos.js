/*   Rutas de Producto
     host + api/productos
*/

const { Router } = require('express');
const router = Router();
const { crearProducto, getProductos, getProductoId} = require('../controllers/productos');
// const {check} = require('express-validator');




router.get('/', getProductos);
router.post('/', crearProducto);

router.get('/ProductoId/:codigo', getProductoId);




module.exports = router