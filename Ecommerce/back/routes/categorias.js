/*   Rutas de Categorias
     host + api/categorias
*/

const { Router } = require('express');
const router = Router();
const { getCategorias, crearCategoria } = require('../controllers/categorias');



router.get('/', getCategorias)
router.post('/crearCategoria', crearCategoria );




module.exports = router