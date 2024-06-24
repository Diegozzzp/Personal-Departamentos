const express = require('express');
const router = express.Router();
const {obtenerDepartamentos, get_Departamento_Por_Campos, crearDepartamento, editarDepartamento, remplazarDepartamento, eliminarDepartamento} = require('../Controllers/Departamento');


//rutas para departamentos

//obtener
router.get('/departamento/', obtenerDepartamentos);

//ruta para buscar departamentos por nombre o por campos similares o exactos
router.get('/departamentos/', get_Departamento_Por_Campos);

//postear   
router.post('/departamento', crearDepartamento);

//edits
router.patch('/departamento/:id', editarDepartamento);

//remplazar
router.put('/departamento/:id', remplazarDepartamento);

//ruta para deletear pero que en vez de borrar solo pone el estado inactivo
router.delete('/departamento/:id', eliminarDepartamento);



module.exports = router
