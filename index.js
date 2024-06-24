const express = require('express'); 
const app = express(); 
const mongoose = require('mongoose');
app.use(express.json());
const port = 3000;
const Empleados = require('./Models/Empleados');

const BD = 'mongodb://localhost:27017/personal';

//conectar a la base de datos


const empleados = require('./Routes/Empleados');
const departamentos = require('./Routes/Departamentos');

//usar las rutas
app.use(empleados, departamentos);

mongoose.connect(BD)
  .then(async () => {
    try {
      await Empleados.collection.dropIndex('departamento_1');
      console.log('Índice único eliminado');
    } catch (error) {
      if (error.code === 27) {
        console.log('Índice no encontrado, puede que ya haya sido eliminado');
      } else {
        throw error;
      }
    }
  })

app.listen(port, () => console.log(`Me ejecuto en el puerto ${port}!`))