/*   Rutas de Usuarios/Auth
     host + api/auth
*/


const { Router } = require('express');
const router = Router();
const { crearUsuario, login } = require('../controllers/auth');
const {check} = require('express-validator');
const validarCampos = require('../middlewares/validar-campos');




router.post('/register', 
[ //Middlewares
   check('name', 'El nombre es obligatorio').not().isEmpty(),
   check('email', 'El email es obligatorio').not().isEmpty(),
   check('password', 'El password debe ser mayor a 6 caracteres').isLength({min:6}),
   validarCampos
], 
crearUsuario );


router.post('/login', 
[ //Middlewares
   check('email', 'El email es obligatorio').not().isEmpty(),
   check('password', 'El password debe ser mayor a 6 caracteres').isLength({min:6}),
   validarCampos
], 
login );




module.exports = router