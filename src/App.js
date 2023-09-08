import logo from './logo.svg';
import freCodeCampLogo from './imagenes/800px-FreeCodeCamp_logo.png'
import './App.css';
import Contador from './componentes/contador';
import './hojas-de-estilos/contador.css'
import Boton from './componentes/boton';
import './hojas-de-estilos/boton.css'
import { useState } from 'react';

function App() {

    const [numClic, setNumClics] = useState(0)

    const manejarClic = ()=> {
        setNumClics(numClic +1);
    };

    const reiniciarCont = ()=> {
        setNumClics(0)
    };

  return(
    <div className='App'>
        <div className='logo-freecode-contenedor'>
            <img className='freecodecamp-logo' alt='logo-freecodecamp' src={freCodeCampLogo}/>
        </div>
        <div className='contenedor-principal'>
            <Contador
            numClics={numClic}/>
            <Boton
            texto='CLICK'
            esBotonClick={true}
            manejarClic={manejarClic}/>
            <Boton
            texto='REINICIAR'
            esBotonClick={false}
            manejarClic={reiniciarCont}/>
        </div>

    </div>
  )
}

export default App;

