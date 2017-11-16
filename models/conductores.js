const mongoose = require('mongoose'); 

const ConductorSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    }
}); 

const Conductor = module.exports = mongoose.model('Conductor', ConductorSchema); 