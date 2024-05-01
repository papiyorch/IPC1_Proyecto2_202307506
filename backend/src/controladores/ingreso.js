const { list_users, list_posts } = require("../datalist/list");
const Usuario = require("../objetos/Usuario");


function Registro(req, res){
    try{
        const data = req.body;
        const newUser = new Usuario(data.carnet, data.nombre, data.apellido, data.genero, data.correo, data.facultad, data.carrera, data.password);

        list_users.push(newUser);

        res.json({mensaje:'Usuario agregado exitosamente'})
    }catch(error){
        console.log(error)
        res.json({mensaje: 'Ocurrió un problema con el registro'})
    }
}

function Login(req, res){
    try{
        const {carnet, password} = req.body;
        const usuario = list_users.find(find_user =>find_user.carnet == carnet && find_user.password == password)
        if(usuario){
            res.json({mensaje: 'Ha iniciado sesión.',
        user:{
            carnet: usuario.carnet,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            genero: usuario.genero,
            correo: usuario.correo,
            facultad: usuario.facultad,
            carrera: usuario.carrera,
            password: usuario.password
        },
    error: false})
        
        }else{
            res.json({mensaje: 'Usuario no se encuentra o no existe', error:true})
        }
    }catch(error){
        console.log(error)
        res.json({mensaje: 'Ocurrió un problema al iniciar sesión'})    
    }
}

function GetUsers(req, res) {
    try{
       
        res.json({mensaje : "Exito", usuarios: list_users})
    }catch (error) {
        
        console.log(error)
        res.json({mensaje : "Ocurrio un error al hacer el registro"})
    }

}

function GetPosts (req, res){
    try{
        res.json({mensaje: "Exito", posts: list_posts})
    }catch (error){
        console.log(error)
        res.json({mensaje: "Ocurrio un error al hacer el registro"})
    }
}

module.exports = {
    Registro,
    GetUsers,
    GetPosts,
    Login
}