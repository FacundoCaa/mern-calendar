//*     Auth
//*     /api/auth

const { Router } = require('express');
const { check } = require('express-validator')
const { validateFields } = require('../middlewares/validate-field')
const { validarJWT } = require('../middlewares/validar-jwt')

const router = Router();

const { createUser, loginUser, validateToken } = require('../controllers/auth')

router.post(
    '/new',
     [ // Middlewares
        check('name', 'El nombre es necesario').not().isEmpty(),
        check('email', 'El email es necesario').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validateFields
     ],
    createUser );

router.post('/',
 [
    check('email', 'El email es necesario').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    validateFields
 ],
 loginUser
  );

router.get('/renew', validarJWT, validateToken );

module.exports = router