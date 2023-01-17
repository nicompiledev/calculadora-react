import React from "react";
import '../stylesheets/Pantalla.css'

// This is a functional component that represents the display screen of the calculator
// It receives an input prop which is used to display the current input value
const Pantalla = ({input}) => {
    return (
        <div className="pantalla">
            {input}
        </div>
    );
}

export default Pantalla;
