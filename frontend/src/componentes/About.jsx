function About () {
    return(
        <main className='container'>
            <h1 style={{fontFamily: 'Jersey 10', fontSize:'100px', textAlign: 'cente r', color: '#8576FF',textShadow:'3px 3px 4px blue', display:'flex', justifyContent:'center', alignItems: 'center', height: '20vh'}}>USocial</h1>
            <p style={{fontFamily: 'Jersey 10', fontSize:'30px', textAlign: 'center', color: 'whitesmoke',textShadow:'3px 3px 4px black',display:'flex', justifyContent:'center', alignItems: 'center', maxWidth: '60%', margin: '0 auto'}} >
                USocial es un espacio de tipo blog y foro, donde todos los estudiantes o catedráticos de la Universidad de San Carlos de Guatemala puedan publicar sus opiniones, así como su rutina diaria. USocial tiene como objetivo hacer más sencilla la interacción social entre estudiantes y/o catedráticos logrando crear un sistema de hilos de conversación y de likes para cada publicación, además, implementa un sistema de "Trending Topic", en donde se podran visualizar las publicaciones más votadas por los usuarios.
                </p>
                    
        </main>
    )   
}
export default About;