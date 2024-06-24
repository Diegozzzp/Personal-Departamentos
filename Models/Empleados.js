const mongoose = require('mongoose');


const EmpleadosSchema = new mongoose.Schema({
    nombre: {type: String, required: true, min: 3, max: 50},
    apellido: {type: String, required: true, min: 3, max: 50},
    edad : {type: Number, required: true},
    departamento: {type: String, required: true, min: 3, max: 50},
    salario: {type: Number, required: true},
    fecha_ingreso: {type: Date, default: Date.now},
    telefono: {type: String, required: true, unique: true},
    correo: {type: String, required: true, unique: true, min: 3, max: 50},
    direccion: {type: String, required: true,min: 3, max: 50},
    ciudad: {type: String, min: 3, max: 50, required: true},
    pais: {type: String, required: true, min: 3, max: 50},
    codigo_postal: {type: Number},
    fecha_actualizacion: {type: Date , default: Date.now},
    estado: {type: String, default : 'Activo'},
    //cuando se elimine el empleado actualiza la fecha de eliminación
    fecha_eliminacion: {type: Date}
});

const Empleados = mongoose.model('empleados', EmpleadosSchema);

module.exports = Empleados

