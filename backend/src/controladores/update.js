const {list_users}=require('../datalist/list')

function Actualizar(req, res) {
    try {
        const { carnet, nombre, apellido, genero, correo,facultad, carrera, password } = req.body; 

        const usuarioIndex = list_users.findIndex(user => user.carnet == carnet)

        if (usuarioIndex != -1) { 

            const usuario = list_users[usuarioIndex];
            usuario.carnet = carnet;
            usuario.nombre = nombre;
            usuario.apellido = apellido;
            usuario.genero = genero;
            usuario.correo = correo;
            usuario.facultad = facultad;
            usuario.carrera = carrera;
            usuario.password = password;

            
            res.json({ mensaje: 'Usuario actualizado correctamente.' });
        } else {
            
            res.json({ mensaje: 'El usuario no fue encontrado.' });
        }
    } catch (error) {
        
        console.log(error);
        res.json({ error: 'Ocurrió un error al procesar la solicitud.' });
    };
}

module.exports = {
    Actualizar    
};