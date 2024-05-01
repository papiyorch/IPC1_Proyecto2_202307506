class Usuario{
    constructor(carnet, nombre, apellido, genero, correo, facultad, carrera, password){
        this.carnet = carnet
        this.nombre = nombre 
        this.apellido = apellido
        this.genero = genero
        this.correo = correo
        this.facultad = facultad
        this.carrera = carrera
        this.password = password
    }
}
  
module.exports = Usuario;