/*   Rutas de Categorias
     host + api/categorias
*/

const { Router } = require('express');
const router = Router();
const { getCategorias, crearCategoria, editCategoria, deleteCategoria } = require('../controllers/categorias');



router.get('/', getCategorias);
router.post('/', crearCategoria);
router.put('/', editCategoria);
router.delete('/', deleteCategoria);




module.exports = router