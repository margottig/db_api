const ControladorUsuarios = require('../controllers/users.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerusuarios', ControladorUsuarios.obtenerusuarios) 
    app.post('/api/crearusuario', ControladorUsuarios.crearUsuario) 
    app.put('/api/editarusuario/:id', ControladorUsuarios.editarUsuario)
    app.delete('/api/borrarusuario/:id', ControladorUsuarios.eliminarUsuario)
}

