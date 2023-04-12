/*   Rutas de Producto
     host + api/productos
*/

const { Router } = require('express');
const router = Router();
const { crearProducto, getProductos, getProductoId, editProducto, deleteProducto, getProductosByFilter } = require('../controllers/productos');



router.get('/', getProductos);
router.post('/', crearProducto);
router.put('/', editProducto)
router.delete('/', deleteProducto)
router.get('/ProductoId/:codigo', getProductoId);
router.get('/filtros', getProductosByFilter)




module.exports = router