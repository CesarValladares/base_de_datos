const mongoose = require('mongoose'); 

const PaqueteSchema = mongoose.Schema({
    peso: String, 
    tamaño: String
}); 

const Paquete = module.exports = mongoose.model('Paquete', PaqueteSchema); 