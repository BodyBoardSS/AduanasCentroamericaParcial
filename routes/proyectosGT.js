const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { proyectosGet,
    proyectosPut,
    proyectosPost,
    proyectosDelete,
    proyectosPatch } = require('../controllers/proyectosGT');


const router = Router();

router.get('/', proyectosGet );

router.post('/',[
    validarCampos
], proyectosPost );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectosPut );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectosDelete );


module.exports = router;