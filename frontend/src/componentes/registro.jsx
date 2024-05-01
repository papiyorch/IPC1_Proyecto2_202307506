import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registro = () => {

    const [carnet, setCarnet] = useState(''); 
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState(''); 
    const [genero, setGenero] = useState('');
    const [correo, setCorreo] = useState('');
    const [facultad, setFacultad] = useState('');
    const [carrera, setCarrera] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try{
            const response = await fetch('http://localhost:5000/Registro', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({ carnet, nombre, apellido, genero, correo, facultad, carrera, password }),
            })

            const data = await response.json(); 

            console.log(data)
            alert(data.mensaje)

        }catch (error){

            console.log("Error en la solicitud", error);

        }

    };

    return (

        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className="form-signin bg-body-tertiary " style={{ border: '4px solid #8576FF', borderRadius: '10px', padding: '20px', maxWidth: '450px', width: '100%', background: '#ab99c4' }}>

            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal" style={{ fontFamily: 'Jersey 10', fontSize: '60px', textAlign: 'center', color: '#8576FF', textShadow: '3px 3px 4px blue', margin: '0 auto 20px' }}>Registro</h1>

                <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingInput" placeholder="Carnet" value={carnet} onChange={(e) => setCarnet(e.target.value) } />
                    <label for="floatingInput">Carnet</label>
                </div>
                <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingNombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value) }/>
                    <label for="floatingNombre">Nombre</label>
                </div>


                <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingApellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}  />
                    <label htmlFor="floatingApellido">Apellido</label>
                </div>

                <div className="form-floating">
                    <select required className="form-select" id="floatingGenero" value={genero} onChange={(e) => setGenero(e.target.value)}>
                        <option value="Genero"></option>
                        <option value="Genero1">Masculino</option>
                        <option value="Genero2">Femenino</option>
                    </select>
                    <label htmlFor="floatingGenero">Genero</label>
                </div>

                <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingCorreo" placeholder="Correo" value={correo} onChange={(e) => setCorreo(e.target.value)}  />
                    <label htmlFor="floatingCorreo">Correo</label>
                </div>

                <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingFacultad" placeholder="Facultad" value={facultad} onChange={(e) => setFacultad(e.target.value)}  />
                    <label htmlFor="floatingFacultad">Facultad</label>
                </div>

                <div className="form-floating">
                    <input required type="text" className="form-control" id="floatingCarrera" placeholder="Carrera" value={carrera} onChange={(e) => setCarrera(e.target.value)}  />
                    <label htmlFor="floatingCarrera">Carrera</label>
                </div>

                <div className="form-floating">
                    <input required type="password" className="form-control" id="floatingPassword" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)}  />
                    <label htmlFor="floatingPassword">Contraseña</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit"  style={{ display: 'block', margin: '0 auto', fontSize: '30px', padding: '10px 20px', background: '#8576FF', color: 'white', border: 'none', borderRadius: '5px'}}>Registrarse</button>                
            </form>


            <p className="mt-3 mb-0 text-center" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF',  marginRight: '10px' }}>
                    ¿Ya tienes una cuenta? <button className="btn btn-secondary  btn-sm" style={{  margin: '0 auto', fontSize: '20px', padding: '10px 20px', background: '#8576FF', color: 'white', border: 'none', borderRadius: '5px'}} onClick={() => navigate('/Login')}>Inicia sesion aquí</button>.
                </p>

            </div>
        </div>


    );

};

export default Registro; 