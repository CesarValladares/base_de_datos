const mongoose = require('mongoose'); 

const SucursalSchema = mongoose.Schema({
    direccion: String
}); 

const Sucursal = module.exports = mongoose.model('Sucursal', SucursalSchema); 