import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="mt-auto bg-dark bg-opacity-75">
      <div className="row">
        <div className="col-4">
          <img src="./logoNASA.png"></img>
        </div>
        <div className="col-4">
          
        </div>
        <div className="col-4">
          <ul>
            <li>333555777888</li>
            <li>correo@gmail.com</li>
            <li>Ubicación</li>
            <li>Otro item</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
