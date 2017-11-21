const mongoose = require('mongoose'); 

const EmpleadoSchema = mongoose.Schema({
    username: String,
    contraseña: String,
    nombre: String, 
    tipo: String
}); 

const Empleado = module.exports = mongoose.model('Empleado', EmpleadoSchema); 