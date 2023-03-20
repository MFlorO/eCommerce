const { Router } = require('express');
const router = Router();


router.get('/',(req,res) => res.send('Bienvenido al backend de este proyecto!'));

router.use('/api/auth', require('./auth'));
router.use('/api/productos', require('./productos'));
router.use('/api/categorias', require('./categorias'))


module.exports = router;
