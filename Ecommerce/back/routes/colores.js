/*   Rutas de Colores
     host + api/colores
*/

const { Router } = require('express');
const router = Router();
const { getColores, crearColores } = require('../controllers/colores');



router.get('/', getColores)
router.post('/crearColores', crearColores );




module.exports = router