const { Router } = require('express');
const router = Router();


router.get('/',(req,res) => res.send('Bienvenido al backend de este precioso proyecto!'));
router.use('/api/auth', require('./auth'));


module.exports = router;
