const Usuarios = require('../models/users.models')



const obtenerusuarios = (req, res)=>{
    Usuarios.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const crearUsuario =  (req, res)=>{
    Usuarios.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const editarUsuario = (req, res)=>{
    Usuarios.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const eliminarUsuario = (req, res)=>{
    Usuarios.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    obtenerusuarios,
    crearUsuario,
    editarUsuario,
    eliminarUsuario
}

// OTRA FORMA DE EXPORTAR
/*
    obtenerusuarios: (req, res)=>{
        Usuarios.find(req.body)
        .then((resultado)=>{
            res.json(resultado)
        }).catch((error)=>{
            console.log(error)
        })
    },
 
}
*/