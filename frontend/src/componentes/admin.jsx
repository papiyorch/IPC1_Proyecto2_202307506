import React, { useState, useEffect } from 'react'; 
import { Modal, Button } from 'react-bootstrap'; 
import Sidebar from './navbar';
import Cookies from 'js-cookie';

const Administrador = () => {
    const [users, setUsers] = useState([]); 
    const [posts, setPost] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null); 
    const [selectedPost, setSelectedPost] = useState(null);
    const [validarEliminacion, setValidarEliminacion] = useState(false); 


    useEffect(() => { 
        console.log("Bienvenido " + Cookies.get('usuario'))
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/users', {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setUsers(data.usuarios);
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };
    
        fetchData();
    }, [validarEliminacion]);


    const deleteUser = async (carnet) => { 
        try {
            const response = await fetch('http://localhost:5000/delete_user', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ carnet: carnet }),
            });

            const data = await response.json();
            console.log(data)

            if (! data.error) {
                alert(data.msj)
                setValidarEliminacion(!validarEliminacion);
            } else {
                alert(data.msj);                
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
        
    };

    const viewUser = (user) => { 
        setSelectedUser(user); 
    };

    const handleClose = () => { 
        setSelectedUser(null); 
    };

    //Publicaciones

    useEffect(() => { 
        console.log("Bienvenido " + Cookies.get('post'))
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/posts', {
                    method: 'GET',
                }); 
                if (response.ok) {
                    const data = await response.json();
                    setPost(data.posts);
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };
    
        fetchData();
    }, [validarEliminacion]);

    const deletePost = async (carnet) => { 
        try {
            const response = await fetch('http://localhost:5000/delete_post', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ carnet: carnet }),
            });

            const data = await response.json();
            console.log(data)

            if (! data.error) {
                alert(data.msj)
                setValidarEliminacion(!validarEliminacion);
            } else {
                alert(data.msj);                
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
        
    };

    const viewPost = (post) => { 
        setSelectedPost(post); 
    };

    const handleClose2 = () => { 
        setSelectedPost(null); 
    };



    return ( 

    <div className="App">
        <Sidebar activeWindow="Home"></Sidebar>

    <div className="content">
    <div className="table-container"> {/* Contenedor de la tabla */}
        <table className="table table-bordered text-center"> {/* Tabla con bordes y alineación centrada */}
            <thead className="table-dark"> {/* Cabecera de la tabla con fondo oscuro */}
                <tr> {/* Fila de la cabecera */}
                    <th>Carnet</th> 
                    <th>Nombre</th> 
                    <th>Apellido</th> 
                    <th>Genero</th> 
                    <th>Facultad</th> 
                    <th>Carrera</th> 
                    <th>Correo</th> 
                    <th>Acciones</th> 
                </tr>
            </thead>
            <tbody> 
                {users.map(user => ( 
                    <tr key={user.carnet}> 
                        <td>{user.carnet}</td> 
                        <td>{user.nombre}</td> 
                        <td>{user.apellido}</td> 
                        <td>{user.genero}</td> 
                        <td>{user.facultad}</td> 
                        <td>{user.carrera}</td> 
                        <td>{user.correo}</td> 
                        <td> 
                            <button className="btn btn-danger" onClick={() => deleteUser(user.carnet)}>Eliminar</button> {/* Botón para eliminar el usuario */}
                            <button className="btn btn-primary" onClick={() => viewUser(user)}>Ver</button> {/* Botón para ver los detalles del usuario */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {selectedUser && ( 
            <Modal show={true} onHide={handleClose}> 
                <Modal.Header closeButton> 
                    <Modal.Title>Detalles del Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>Carnet:</strong> {selectedUser.carnet}</p> 
                    <p><strong>Nombre:</strong> {selectedUser.nombre}</p> 
                    <p><strong>Apellido:</strong> {selectedUser.apellido}</p> 
                    <p><strong>Genero:</strong> {selectedUser.genero}</p> 
                    <p><strong>Facultad:</strong> {selectedUser.facultad}</p> 
                    <p><strong>Carrera:</strong> {selectedUser.carrera}</p> 
                    <p><strong>Correo:</strong> {selectedUser.correo}</p> 
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="secondary" onClick={handleClose}> 
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        )}
    </div>
    </div>

        {/*Tabla de publicaciones */}
    <div className="content">
    <div className="table-container"> {/* Contenedor de la tabla */}
        <table className="table table-bordered text-center"> {/* Tabla con bordes y alineación centrada */}
            <thead className="table-dark"> {/* Cabecera de la tabla con fondo oscuro */}
                <tr> {/* Fila de la cabecera */}
                    <th>ID</th> 
                    <th>Carnet</th> 
                    <th>Categoria</th> 
                    <th>Descripcion</th>
                    <th>Acciones</th> 
                </tr>
            </thead>
            <tbody> 
                {posts.map(post => ( 
                    <tr key={post.carnet}> 
                        <td>{post.id}</td> 
                        <td>{post.carnet}</td> 
                        <td>{post.category}</td> 
                        <td>{post.text}</td> 

                        <td> 
                            <button className="btn btn-danger" onClick={() => deletePost(post.carnet)}>Eliminar</button> {/* Botón para eliminar el usuario */}
                            <button className="btn btn-primary" onClick={() => viewPost(post)}>Ver</button> {/* Botón para ver los detalles del usuario */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        {selectedPost && ( 
            <Modal show={true} onHide={handleClose2}> 
                <Modal.Header closeButton> 
                    <Modal.Title>Detalles de la Publicacion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p><strong>ID:</strong> {selectedPost.id}</p> 
                    <p><strong>Carnet:</strong> {selectedPost.carnet}</p> 
                    <p><strong>Categoria:</strong> {selectedPost.category}</p> 
                    <p><strong>Descripcion:</strong> {selectedPost.text}</p> 
                </Modal.Body>
                <Modal.Footer> 
                    <Button variant="secondary" onClick={handleClose2}> 
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        )}
    </div>
    </div>

    </div>
);

}

export default Administrador;