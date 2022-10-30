const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
    
const { proyectosGetCR,
    proyectosPutCR,
    proyectosPostCR,
    proyectosDeleteCR
} = require('../controllers/proyectosCR');


const router = Router();

router.get('/', proyectosGetCR );

router.post('/',[
    validarCampos
], proyectosPostCR );

router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectosPutCR );

router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    validarCampos
],proyectosDeleteCR);


module.exports = router;