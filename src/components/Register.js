import React from 'react'
import { Button, FloatingLabel, Card } from 'react-bootstrap';
import Form from "react-bootstrap/Form"

const Register = () => {
  return (
    <Card>
      <Card.Header className='fw-bold'>Register</Card.Header>
      <Card.Body>
      <Card.Title>Special title treatment</Card.Title>
      <FloatingLabel
        controlId="floatingInput"
        label="Full Name"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button variant="primary">RegisterMe</Button>
      </Card.Body>
    </Card>
  );
}

export default Register

