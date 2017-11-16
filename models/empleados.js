const mongoose = require('mongoose'); 

const EmpleadoSchema = mongoose.Schema({
    nombre: String, 
    tipo: String
}); 

const Empleado = module.exports = mongoose.model('Empleado', EmpleadoSchema); 