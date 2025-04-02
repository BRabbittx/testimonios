import './App.css';
import Testimonio from './componentes/testimonio.js'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Estos son nuestros docentes </h1>
        <Testimonio
          nombre='Alexis'
          pais='Irlanda'
          imagen='alexis'
          cargo='Oftalmólogo'
          empresa='Oftalmoderm'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Oftalmoderm'
        />
        <Testimonio
          nombre='Alfredo'
          pais='Holanda'
          imagen='alfredo'
          cargo='Neurocirujano'
          empresa='Sanna'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Oftalmoderm'
        />
        <Testimonio
          nombre='Cesar'
          pais='Perú'
          imagen='cesar'
          cargo='Cirugía de tórax y cardiovascular'
          empresa='UPCH'
          testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Oftalmoderm'
        />
      </div>
    </div>
  );
}

export default App;
