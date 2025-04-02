import './App.css';
import villamediclogo from './imagenes/logo.png';
import Boton from './componentes/boton.js';
import Contador from './componentes/contador.js';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  
  const manejarClic = () => {
    setNumClics(numClics +1);    
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='villamedic-logo-contenedor'>
        <img className='villamedic-logo'
          src={villamediclogo}
          alt='Logo de Villamedic'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
