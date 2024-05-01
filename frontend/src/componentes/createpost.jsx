import React, { useState, useEffect } from 'react'; // Importa React, el hook useState y el hook useEffect 
import Sidebar from './navbar';
import Cookies from 'js-cookie';

const CreatePosts = () => {
  const [formData, setFormData] = useState({
    description: '',
    category: '',
    isAnonymous: false,
  });

  const [imageBase64, setImageBase64] = useState('');

  // Manejar cambios en los inputs del formulario
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result); // Establecer la imagen como cadena base64
    };
    reader.readAsDataURL(file);
  };

  // Manejar envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/publicar', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ carnet:  Cookies.get('usuario'), 
                                category: formData.category,
                                text: formData.description,
                                image: imageBase64,
                                anonymus: formData.isAnonymous }),
      })
      const data = await response.json();

      console.log(data)
      alert(data.mensaje)

    } catch (error) {

      console.log("Error en la solicitud", error);

    }
    
  };

  return (

    <div className="App">
      <Sidebar activeWindow="Create"></Sidebar>

      <div className="content">
        <div className="container mt-5 bg-body-tertiary p-4" style={{ width: '100%', maxWidth: '500px', maxHeight: '600px', padding: '20px', border: '4px solid #8576FF', borderRadius: "20px",background: '#ab99c4' }}>
          <h2 style={{ fontFamily: 'Jersey 10', fontSize: '30px', color: '#8576FF' }}>Crear un nuevo post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="description" className="form-label" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF' }}>Descripción del post (Obligatorio)</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF' }}>Categoría (Obligatorio)</label>
              <select
                className="form-select"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF' }}>Selecciona una categoría</option>
                <option value=" Importante">Anuncio Importante</option>
                <option value="Divertido">Divertido</option>
                <option value="Académico">Académico</option>
                <option value="Variedad">Variedad</option>
                <option value="Deportes">Deportes</option>
                <option value="Arte">Arte</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF' }}>Imagen (Opcional)</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
            <label className="form-check-label" htmlFor="isAnonymous" style={{ fontFamily: 'Jersey 10', fontSize: '20px', color: '#8576FF' }}>Publicar de forma anónima</label>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isAnonymous"
                name="isAnonymous"
                checked={formData.isAnonymous}
                onChange={handleChange}
              />
              
            </div><br></br>
            <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary" style={{  fontSize: '20px', padding: '10px 20px', background: '#8576FF', color: 'white', border: 'none', borderRadius: '5px'}} >Publicar</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>

  );
}



export default CreatePosts;