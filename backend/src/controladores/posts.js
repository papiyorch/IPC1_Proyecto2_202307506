const { list_users, list_posts } = require("../datalist/list");
const Post = require("../objetos/post");
const Comment = require("../objetos/commets");

function Publicar(req, res){
    try{

        const {carnet, category, text, image, anonymus} = req.body; 

        const usuario = list_users.find(find_user => find_user.carnet == carnet)
        const currentDate = new Date();

        if (usuario){
            let carnetToUse = carnet;
            if(anonymus){
                carnetToUse = null;
            }
            const newPost = new Post(carnetToUse, category, text, image, currentDate, 0)
            list_posts.push(newPost);
            res.json({mensaje : "Publicacion hecha."})
        }
        else{

            res.json({mensaje : "Error, no se encuentra el usuario"})
        }
        
    } catch (error){
       
        console.log(error)
        res.json({mensaje : "Ocurrio un error"})
    }
}

function buscarNombreFacultad(carnet) {

    if (carnet === null){
        return { nombre: 'Anonimo', facultad: 'Universidad de San Carlos' };
    }

    const usuarioEncontrado = list_users.find(usuario => usuario.carnet === carnet);
    if (usuarioEncontrado) {
      return { nombre: usuarioEncontrado.nombre, apellido: usuarioEncontrado.apellido, carrera: usuarioEncontrado.carrera, facultad: usuarioEncontrado.facultad };
    } 
}
  

function GetPosts(req, res) {
    try{        
        const list_posts_con_nombres_facultades = list_posts.map(post => {
            const { nombre: nombrePost, apellido: apellidoPost, carrera: carreraPost, facultad: facultadPost } = buscarNombreFacultad(post.carnet);
        
            const list_comment_con_nombres_facultades = post.comments.map(comment => {
                const { nombre: nombreComment, apellido: apellidoComment, carrera: carreraComent, facultad: facultadComment } = buscarNombreFacultad(comment.carnet);
                return { ...comment, name: nombreComment, lastname: apellidoComment, career: carreraComent, faculty: facultadComment };
            });
        
            return { ...post, name: nombrePost, lastname: apellidoPost, career: carreraPost, faculty: facultadPost, comments: list_comment_con_nombres_facultades };
        });
        

        res.json({mensaje : "Exito", posts: list_posts_con_nombres_facultades})
    }catch (error) {        
        console.log(error)
        res.json({mensaje : "Ocurrio un error"})
    }

}


function reporteCategoria(req, res) {
    try{        
        const categories = [' Importante', 'Divertido', 'Académico', 'Deportes', 'Variedad', 'Arte'];
        const countByCategory = {};

      
        categories.forEach(category => {
            countByCategory[category] = 0;
        });

       
        for (const post of list_posts) {
            countByCategory[post.category]++;
        }

        res.json({countByCategory})
    }catch (error) {        
        console.log(error)
        res.json({mensaje : "Ocurrio un error"})
    }

}


function Comentar(req, res){
    try{

        const {carnet, comentario, publicacion}= req.body; 
        const post = list_posts.find(find_post => find_post.id == publicacion)
        
        if (post){
            
            const newComment = new Comment(carnet, comentario)
            post.comments.push(newComment);
            res.json({mensaje : "Comentario realizado."})
        }
        else{

            res.json({mensaje : "Error, no se encuentra el usuario"})
        }
        
    } catch (error){
        
        console.log(error)
        res.json({mensaje : "Ocurrio un error"})
    }
}

function Like(req, res){
    try{

        const {carnet, publicacion}= req.body; 
        const post = list_posts.find(find_post => find_post.id == publicacion)
        
        if (post){
            post.likes++;
            res.json({mensaje : "Dista like a la publicacion."})
        }
        else{

            res.json({mensaje : "Error, no se encuentra el usuario"})
        }
        
    } catch (error){
        
        console.log(error)
        res.json({mensaje : "Ocurrio un error"})
    }
}

module.exports = {
    Publicar,
    GetPosts,
    reporteCategoria,
    Comentar,
    Like
}