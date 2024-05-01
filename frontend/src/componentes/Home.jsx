import React from 'react';

const NameApp = () => {
    const labelStyle = {
      fontFamily: 'Jersey 10',
      fontSize: '180px',
      fontWeight: 'bold',
      color: '#8576FF',
      textShadow: '4px 4px 6px black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '20vh',
    };
  
    return (
    <label style={labelStyle}>USocial</label>
    );
};
function Home (){
    return(
        <main className='container'>
            <NameApp/>
        </main>
    )
    
}
export default Home