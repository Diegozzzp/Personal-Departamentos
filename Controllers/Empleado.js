const Empleados = require('../Models/Empleados');

//ruta para obtener todos los empleados 
exports.obtenerEmpleados = async (req, res) => {
        try {
            const empleados = await Empleados.find();
            res.json(empleados);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
  
exports.buscarEmpleados = async (req, res) => {
    const empleados = new Empleados(req.body);
    try {
        const { nombre, estado } = req.query;
    
        // Crear el filtro de búsqueda
        const filtro = {};
        if (nombre) {
          filtro.nombre = { $regex: new RegExp(nombre, 'i') }; // Búsqueda aproximada 
        }
        if (estado) {
          filtro.estado = estado; // Búsqueda exacta de estado
        }
    
        const empleados = await Empleados.find(filtro);
        res.json(empleados);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }

}

exports.crearEmpleados = async (req, res) => {
    const empleados = new Empleados(req.body);
    try{
        const insertado = await empleados.save();
        res.json(insertado);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//ruta para editar empleados y que se actualice la fecha de actualizacion automaticamente
exports.editarEmpleados = async (req, res) => {
    try{
        const empleados = await Empleados.findByIdAndUpdate(req.params.id, req.body, {new: true, fecha_actualizacion: new Date()});
        res.json(empleados);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//ruta para deletear pero que en vez de borrar solo pone el estado inactivo y que actualice la fehca de eliminacion en la base de datos automaticamente
exports.eliminarEmpleados = async (req, res) => {
    try{
        const empleados = await Empleados.findByIdAndUpdate(req.params.id, {estado: 'inactivo', fecha_eliminacion: new Date()});
        res.json({status: 'empleados eliminado'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = exports