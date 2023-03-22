/*   Rutas de Modelos
     host + api/modelos
*/

const { Router } = require('express');
const router = Router();
const { getModelos, crearModelos } = require('../controllers/modelos');



router.get('/', getModelos)
router.post('/crearModelos', crearModelos );




module.exports = router