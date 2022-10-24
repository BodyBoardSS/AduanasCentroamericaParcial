
const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    codigo: {
        type: String,
        required: [true, 'El codigo es obligatorio']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    fecha: {
        type: Date, default: Date.now 
    },
    monto: {
        type: Number
    },
    pais: {
        type: String
    }
});

module.exports = model( 'Proyecto', ProyectoSchema );