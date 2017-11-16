const mongoose = require('mongoose'); 

const UsuarioSchema = mongoose.Schema({
    nombre: String,
    direccion: String
}); 

const Usuario = module.exports = mongoose.model('Usuario', UsuarioSchema); 