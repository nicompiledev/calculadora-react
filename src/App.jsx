import "./App.css";
import Boton from "./components/Boton";
import Logo from "./components/Logo";
import BotonClear from "./components/BotonClear";
import Pantalla from "./components/Pantalla";
import { useState } from "react";
import { evaluate } from "mathjs";

// This is the main component of the calculator, it uses the useState hook to manage the state of the input value
function App() {
  // Setting the initial state of the input
  const [input, setInput] = useState("");
  const [lastCharIsOperator, setLastCharIsOperator] = useState(false);

  const agregarInput = (val) => {
    if (val === "+" || val === "-" || val === "*" || val === "/") {
      if (lastCharIsOperator === true) {
        return;
      } else {
        setInput(input + val);
        setLastCharIsOperator(true);
      }
    } else {
      setInput(input + val);
      setLastCharIsOperator(false);
    }
  };

  // This function is used to calculate the result of the input expression
  const calcularResultado = () => {
    // Checking if there is any input value
    if (input) {
      setInput(evaluate(input));
    } else {
      setInput("error");
    }
  };

  // the JSX code that is rendered to the screen
  return (
    <div className="App">
      <Logo />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          {/* The clear button calls the manejarClear function with an anonymous function to set the input state to an empty string */}
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

/*
Explanation:

This is the main component of the calculator, it uses the useState hook to manage the state of the input value.

We have defined two state variables: input, and lastCharIsOperator.

The agregarInput function is responsible for adding input values when buttons are clicked. It checks if the value passed to the function is an operator or not. If it is an operator, it checks if the last character is already an operator. If it is, it returns and does not add the operator to the input. If not, it adds the operator to the input and sets lastCharIsOperator to true. If the value passed to the function is not an operator, it adds the value to the input and sets lastCharIsOperator to false.

The calcularResultado function is used to calculate the result of the input expression. It uses the evaluate function from the mathjs library to evaluate the input expression and sets the input state to the result. If there is no input, it sets the input state to "error".

The JSX code renders the calculator layout with buttons, a clear button and a display screen. Each button calls the agregarInput function when clicked and the clear button calls the setInput function with an anonymous function to set the input state to an empty string.
*/
