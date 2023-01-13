// CONFIGURACION
const express = require('express')
const mongoose  = require('mongoose')
const app = express()
const PORT = 8000


//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/personajes', ()=>{
    console.log('Conectado a MongoDB')
})


// Schema MODELO aka Tabla aka Colection
const SchemaUsuario = mongoose.Schema({
    nombre:String,
    apellido:String,
    edad: Number,
    developer: Boolean
})

const Usuarios = mongoose.model('Usuarios', SchemaUsuario)


// ??? *** RUTAS 

app.post('/api/crearusuario', (req, res)=>{
    // const {nombre, apellido} = req.body

    // if(!nombre || !apellido){
    //     res.statusMessage
    // }

    Usuarios.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
})


app.get('/api/obtenerusuarios', (req, res)=>{
    Usuarios.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
})