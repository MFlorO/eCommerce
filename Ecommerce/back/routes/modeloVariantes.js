/*   Rutas de ModeloVariantes
     host + api/modeloVariantes
*/

const { Router } = require('express');
const router = Router();
const { getModeloVariantes, crearModeloVariantes } = require('../controllers/modeloVariantes');



router.get('/', getModeloVariantes )
router.post('/crearModeloVariantes', crearModeloVariantes );




module.exports = router