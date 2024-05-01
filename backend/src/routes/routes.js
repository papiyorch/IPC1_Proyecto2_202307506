const express = require('express'); 

const router = express.Router(); // Crea el Express router

//Importaciones de funciones creadas en controladores
const { Registro, GetUsers, Login } = require('../controladores/ingreso');
const { DeleteUser, DeletePost } = require('../controladores/delete');
const { Actualizar } = require('../controladores/update');
const { GetPosts, Publicar, reporteCategoria, Comentar, Like } = require('../controladores/posts');


//Metodos Post
router.post('/Registro', Registro)
router.post('/Login', Login)

//Get
router.get('/users', GetUsers)
router.get('/posts', GetPosts)

//Metodos delete
router.delete('/delete_user', DeleteUser)
router.delete('/delete_post', DeletePost)

//Metodos put
router.put('/actualizar', Actualizar )


router.post('/publicar', Publicar)
router.get('/reportecategoria', reporteCategoria)
router.post('/comentar', Comentar)
router.post('/like', Like)



module.exports = router; //Exporta el router para usarla en app.js
