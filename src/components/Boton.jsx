import React from "react";
import '../stylesheets/Boton.css';

// This is a functional component that represents a button on the calculator
// It receives a manejarClic prop which is a function that is called when the button is clicked
// and children prop which is used to display the button value
function Boton(props) {
  // This function checks if the button value is an operator
  const esOperador = (val) => {
    return isNaN(val) && val !== "." && val !== "=";
  };
  return (
    <div
      className={`boton-contenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Boton;
