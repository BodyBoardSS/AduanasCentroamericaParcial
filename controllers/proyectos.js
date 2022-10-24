const { response, request } = require('express');

const Proyecto = require('../models/proyecto');

const autor = "Kevin Manuel Orellana Aguilar - 2522372017"


const proyectosGet = async(req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;

    const [ total, proyectos ] = await Promise.all([
        Proyecto.countDocuments(),
        Proyecto.find()
            .skip( Number( desde ) )
            .limit(Number( limite ))
    ]);

    res.json({
        total,
        proyectos,
        autor
    });
}

const proyectosPost = async(req, res = response) => {
    
    const {codigo, nombre, monto, pais } = req.body;
    const proyecto = new Proyecto({ codigo, nombre, monto, pais });

    // Guardar en BD
    await proyecto.save();

    res.json({
        proyecto,
        autor
    });
}

const proyectosPut = async(req, res = response) => {
    const { id } = req.params;
    const { _id, codigo, nombre, monto, pais, fecha} = req.body;

    const proyecto = await Proyecto.findByIdAndUpdate( id, {codigo, nombre, monto, pais, fecha} );

    res.json(
        proyecto,
        autor
    );
}

const proyectosDelete = async(req, res = response) => {
    const { id } = req.params;
    const proyecto = await Proyecto.findByIdAndDelete( id );
    const data = {
        message: "Registro Eliminado",
        autor
    }
    
    res.json(
        data
    );
}


module.exports = {
    proyectosGet,
    proyectosPost,
    proyectosPut,
    proyectosDelete,
}