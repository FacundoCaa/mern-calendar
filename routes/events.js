const { Router } = require("express");
const { validarJWT } = require('../middlewares/validar-jwt')
const { validateFields } = require('../middlewares/validate-field')
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");
const { check } = require("express-validator");
const { isDate } = require('../helpers/isDate');

const router = Router();

// Todas tienen que pasar por la validacion del JWT
router.use( validarJWT )


router.get(
    '/',
    [

    ],
    getEventos);

router.post(
    '/',
    [
        check('title','Se requiere el titulo').not().isEmpty(),
        check('start','Se requiere fecha de inicio').custom( isDate ),
        check('end','Se requiere fecha de finalizacion').custom( isDate ),
        validateFields
    ],
    crearEvento);

router.put('/:id', actualizarEvento);

router.delete('/:id', eliminarEvento);

module.exports = router