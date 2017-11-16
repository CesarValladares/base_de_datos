const mongoose = require('mongoose'); 

const FacturaSchema = mongoose.Schema({
    precio: String, 
    direccion_dest: String, 
    nombre_usuario_dest: String,
    fecha: Date
}); 

const Factura = module.exports = mongoose.model('Factura', FacturaSchema); 