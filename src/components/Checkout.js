import React from 'react'
import { Container } from 'react-bootstrap';
import Cart from '../components/Cart'
import Register from '../components/Register';

const Checkout = () => {
  return (
    <Container>
      <Cart />
      <Register />
    </Container>
  );
}

export default Checkout