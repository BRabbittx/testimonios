import './App.css';
import Testimonio from './componentes/testimonio.js'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos: </h1>
        <Testimonio/>
      </div>
    </div>
  );
}

export default App;
