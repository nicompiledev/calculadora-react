import './App.css';
import freeCodeCampLogo from './img/freecodecamp-logo.png';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

// This is the main component of the calculator, it uses the useState hook to manage the state of the input value
function App() {
  // Setting the initial state of the input
  const [input, setInput] = useState('');

  // This function is used to add input values when buttons are clicked
  const agregarInput = (val) => {
    setInput(input + val);
  };

  // This function is used to calculate the result of the input expression
  const calcularResultado = () => {
    // Checking if there is any input value
    if (input) {
      setInput(evaluate(input));
    } else {
      setInput('error');
    }
  };

  // the JSX code that is rendered to the screen
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          alt='Logo de freecodecamp'
          className='freecodecamp-logo'
        />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          {/* The clear button calls the manejarClear function with an anonymous function to set the input state to an empty string */}
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
