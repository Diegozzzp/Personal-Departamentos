const router = require('express').Router();
const {obtenerEmpleados, buscarEmpleados, crearEmpleados, editarEmpleados, eliminarEmpleados} = require('../Controllers/Empleado');


//rutas para empleados

//obtener
router.get('/empleados', obtenerEmpleados);

//ruta para buscar empleados por nombre o por campos similares o exactos
router.get('/empleados/buscar', buscarEmpleados);

//postear   
router.post('/empleados', crearEmpleados);

//edits
router.patch('/empleados/:id', editarEmpleados);

//ruta para deletear pero que en vez de borrar solo pone el estado inactivo
router.delete('/empleados/delete/:id', eliminarEmpleados);


module.exports = router