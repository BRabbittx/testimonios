import './App.css';
import logovillamedic from './imagenes/logo.png';

function App() {
  return (
    <div className='App'>
      <div className='villamedic-logo-contenedor'>
        <img
          className='villamedic-logo'
          src={logovillamedic}
          alt='Logo de Villamedic'
        />
      </div>
    </div>
  );
}

export default App;
