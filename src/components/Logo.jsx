import React from "react";
import freeCodeCampLogo from "../img/freecodecamp-logo.png";
import '../stylesheets/Logo.css';

const Logo = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={freeCodeCampLogo}
        alt="Logo de freecodecamp"
        className="freecodecamp-logo"
      />
    </div>
  );
};

export default Logo;
