import React from 'react';
import Sidebar from './navbar';
import ReporteCategoria from './reporte_categorias';


function Reportes() {

  return (
    <div className="App">
      <Sidebar activeWindow="reportes" />
      <div className="content" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <h2 style={{color: "white"}}>Reporte Cantidad de Post por categoria</h2>
        <ReporteCategoria></ReporteCategoria>
        </div>

        
        
    </div>
  );
}

export default Reportes;
