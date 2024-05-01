function Contact () {
    return(
        <main className='container'>
            <h1 style={{fontFamily: 'Jersey 10', fontSize:'80px', textAlign: 'center', color: 'whitesmoke',textShadow:'3px 3px 4px black', display:'flex', justifyContent:'center', alignItems: 'center', height: '30vh'}}>
                Información de Soporte
                </h1>
            <ul style={{fontFamily: 'Jersey 10', fontSize: '30px', textAlign: 'center', color: 'whitesmoke', textShadow: '3px 3px 4px black', maxWidth: '60%', margin: '0 auto 40px', listStyleType: 'none', display: 'flex', flexDirection: 'column'}}>
                <li>Desarrollador: Jorge Ivan Samayoa Sian</li>
                <li>Correo Eelectrónico: 3004159310101@ingenieria.usac.edu.gt </li>
                <li>Número Telefónico: 4020-9543</li>
            </ul>
                    
        </main>
    )   
}
export default Contact;