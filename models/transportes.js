const mongoose = require('mongoose'); 

const TransporteSchema = mongoose.Schema({
    tipo: String, 
    placa: String, 
    disponibilidad: Boolean,
    ubicacion: String
}); 

const Transporte = module.exports = mongoose.model('Transporte', TransporteSchema); 