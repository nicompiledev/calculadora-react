import React from 'react';
import '../stylesheets/BotonClear.css'

// This is a functional component that represents the clear button.
// It receives a manejarClear prop which is a function that is called when the button is clicked
const BotonClear = (props) => {
  return (
    <div className='boton-clear' 
    onClick={props.manejarClear}>
      {props.children}
    </div>
  );
};

export default BotonClear;

