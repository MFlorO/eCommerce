/*   Rutas de Talles
     host + api/talles
*/

const { Router } = require('express');
const router = Router();
const { getTalles, crearTalles } = require('../controllers/talles');



router.get('/', getTalles)
router.post('/crearTalles', crearTalles );




module.exports = router