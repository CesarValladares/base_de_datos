const mongoose = require('mongoose'); 

const EnvioSchema = mongoose.Schema({
    sucursal_ini: {
        type: String,
        require: true
    },
    sucursal_fin: {
        type: String,
        require: true
    }, 
    paquete: {
        type: String,
        require: true
    },
    usuario: {
        type: String,
        require: true
    }, 
    empleado: {
        type: String,
        require: true
    },
    factura: {
        type: String,
        require: true
    },
    conductor: {
        type: String,
        require: true
    }, 
    transporte: {
        type: String,
        require: true
    }, 
    fecha: {
        type: Date
    }
}); 

const Envio = module.exports = mongoose.model('Envio', EnvioSchema); 