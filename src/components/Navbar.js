import React from 'react'
import Container from "react-bootstrap/Container";
import BSNavbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <BSNavbar bg="dark" variant="dark">
        <Container>
          <Link to='/'>
            <BSNavbar.Brand>
              <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Probando Cambios
            </BSNavbar.Brand>
          </Link>
        </Container>
      </BSNavbar>
    </>
  );
}

export default Navbar