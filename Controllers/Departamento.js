const  Departamentos = require('../Models/Departamentos');
const router = require('express').Router(); 

//mostrarme todos los departamentos 
exports.obtenerDepartamentos = async (req, res) => {
    try{
        const departamento = await Departamentos.find();
        res.json(departamento);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//traer un departamento por un nombre igual o similar 
exports.get_Departamento_Por_Campos = async (req, res) => {
    try{
        const departamentos = await Departamentos.find({$or : [{nombre : {$regex: req.params.id, $options: 'i'}}]});
        res.json(departamentos);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//ruta para crear un apartamento
exports.crearDepartamento = async (req, res) => {
    const departamentos = new Departamentos(req.body);
    try{
        const insertado = await departamentos.save();
        res.json(insertado);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.editarDepartamento = async (req, res) => {
    try{
        const departamentos = await Departamentos.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(departamentos);
    }
    catch(error){   
        res.status(500).json({message: error.message});
    }
}

exports.remplazarDepartamento = async (req, res) => {
    try{
        const departamentos = await Departamentos.findByIdAndUpdate(req.params.id, req.body);
        res.json(departamentos);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

//hacer un delete pero no borrando el usuario si no editando el estado y ponerlo inactivo
exports.eliminarDepartamento = async (req, res) => {
    try{
        const departamentos = await Departamentos.findByIdAndUpdate(req.params.id, {estado: 'inactivo'});
        res.json({status: 'departamento eliminado'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = exports