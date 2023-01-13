const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const SchemaUsuario = mongoose.Schema({
    nombre:String,
    apellido:String,
    edad: Number,
    developer: Boolean
})

const Usuarios = mongoose.model('Usuarios', SchemaUsuario)

module.exports = Usuarios