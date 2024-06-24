const mongoose = require('mongoose');

const departamentoSchema = new mongoose.Schema({
    nombre: {type: String, required: true, min: 3, max: 50},
    descripcion : {type: String, required: true, min: 3, max: 50},
    fecha_creacion : {type: Date, default: Date.now},
    fecha_actualizacion : {type: Date},
    fecha_eliminacion : {type: Date},
    estado : {type: String, default : 'Activo'}

});



const Departamentos = mongoose.model('Departamento', departamentoSchema);

module.exports = Departamentos;