import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";

const Main = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, [])
  
  return (
    <>
      <Container 
      fluid 
      className ="px-0 d-flex flex-column min-vh-100"
      >
        <Navbar />
        <Landing />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
