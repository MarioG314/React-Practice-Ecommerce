import React from 'react'
import { Card, Button } from "react-bootstrap";

const Cart = () => {
  return (
    <Card className='mb-3 mt-3'>
      <Card.Header className='fw-bold'>Cart</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart