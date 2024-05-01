import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../image/logo USocial.png';

const Login = () => {

    const [carnet, setCarnet] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault(); 

        try{
            const response = await fetch('http://localhost:5000/Login', {
                method: "POST",
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({carnet : carnet, password: password}),
            })

            const data = await response.json(); 

            console.log(data)
            if( !data.error){
                alert(data.mensaje)
                Cookies.set('usuario', data.user.carnet)
                navigate("/admin")

            }else{
                alert(data.mensaje)

            }

        }catch (error){

            console.log("Error en la solicitud", error);

        }

    };




    return (
        <main className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: `url(${logo}) center center/cover no-repeat`, padding: '20px', boxSizing: 'border-box' }}>
        <div className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
            <div className="form-signin bg-body-tertiary " style={{ border: '4px solid #8576FF', borderRadius: '10px', padding: '20px', maxWidth: '1200px', width: '100%', background: '#ab99c4' }}>

            <form onSubmit={handleSubmit}>
                
                <h1 className="h3 mb-3 fw-normal" style={{ fontFamily: 'Jersey 10', fontSize: '80px', textAlign: 'center', color: '#8576FF', textShadow: '3px 3px 4px blue', margin: '0 auto 20px' }}>Inicio de Sesion</h1>

                <div className="form-floating">
                    <input required type="text" className="form-control" placeholder='Carnet' id="floatingInput"  value={carnet} onChange={(e) => setCarnet(e.target.value) } />
                    <label for="floatingInput">Carnet</label>
                </div>
                <div className="form-floating">
                    <input required type="password" className="form-control" placeholder='Contraseña' id="floatingPassword"  value={password} onChange={(e) => setPassword(e.target.value) }/>
                    <label for="floatingPassword">Contraseña</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit"  style={{ display: 'block', margin: '0 auto', fontSize: '30px', padding: '10px 20px', background: '#8576FF', color: 'white', border: 'none', borderRadius: '5px'}}>Iniciar sesion</button>                
            </form>

            <p className="mt-3 mb-0 text-center" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF', marginRight: '10px' }}>
                    ¿Aun no tienes una cuenta? <button className="btn btn-secondary  btn-sm" style={{  margin: '0 auto', fontSize: '20px', padding: '10px 20px', background: '#8576FF', color: 'white', border: 'none', borderRadius: '5px'}} onClick={() => navigate('/Registro')}>Registrate aquí</button>
                </p>

            </div>
        </div>
        </main>

    );

};

export default Login; 