import React, { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Card, Container, Button, Row, Form } from "react-bootstrap";
import ProductListContainer from "../components/ProductListContainer";
import ProductDetailContainer from '../components/ProductDetailContainer'
import { Routes, Route} from 'react-router-dom'

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
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/product" element={<ProductDetailContainer />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
