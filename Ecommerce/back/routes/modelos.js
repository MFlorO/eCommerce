/*   Rutas de Modelos
     host + api/modelos
*/

const { Router } = require('express');
const router = Router();
const { getModelos, crearModelos, modificarModelo, deleteModelo} = require('../controllers/modelos');



router.get('/', getModelos)
router.post('/:productoCodigo', crearModelos );
router.put('/:id/:idMV', modificarModelo)
router.delete('/', deleteModelo);




module.exports = router