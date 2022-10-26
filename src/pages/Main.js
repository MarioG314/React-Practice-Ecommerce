import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import ProductListContainer from "../components/ProductListContainer";
import ProductDetailContainer from '../components/ProductDetailContainer'
import { Routes, Route} from 'react-router-dom'
import NotFoudn from "../components/NotFoudn";

const Main = () => {
  
  return (
    <>
      <Container fluid className="px-0 d-flex flex-column min-vh-100 ">
        <Navbar />
        <Landing />
        <Routes>
          <Route path="/" element={<ProductListContainer />} />
          <Route path="/product/:id" element={<ProductDetailContainer />} />
          <Route path="*" element={<NotFoudn/>} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
