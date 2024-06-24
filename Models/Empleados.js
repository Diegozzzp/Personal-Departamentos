const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
    //fecha_actualizacion: {type: Date},
    estado: {type: String, default : 'Activo'},
    //fecha_eliminacion: {type: Date, required: true}
});

const Empleados = mongoose.model('empleados', EmpleadosSchema);

EmpleadosSchema.plugin(mongoosePaginate)




module.exports = Empleados

