import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="Container mt-auto">
      <div className="row">
        <div className="col-4">
          <img src="./logoNASA.png"></img>
        </div>
        <div className="col-4">
          
        </div>
        <div className="col-4">
          <ul>
            <li>Numero de telefono</li>
            <li>Correo electrónico</li>
            <li>Ubicación</li>
            <li>Otro item</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;