import React from 'react';

function Testimonio () {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require('../imágenes/testimonio-alejandra.jpeg')} 
        alt='Foto de Alejandra'
        height='200px'
      />    
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Alejandra en Irlanda</p>
        <p className='cargo-testimonio'>Ingeniera de Software</p>
        <p className='texto-testimonio'>Lore ipsum lore data anar blod</p>
      </div>
    </div>
  );
}

export default Testimonio;