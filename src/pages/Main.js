import React, { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Card, Container, Button, Row } from "react-bootstrap";
import ProductListContainer from "../components/ProductListContainer";

const Main = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));

  }, [])
  
  return (
    <>
      <Container fluid className="px-0 d-flex flex-column min-vh-100 ">
        <Navbar />
        <Landing />
        <ProductListContainer />
        <Footer />
      </Container>
    </>
  );
};

export default Main;
