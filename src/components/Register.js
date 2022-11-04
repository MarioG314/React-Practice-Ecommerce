import React, { useState } from 'react'
import { Button, FloatingLabel, Card } from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import validator from 'validator';

const Register = () => {

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');

  console.log(name)

  const validateName = n => {
    return validator.matches(
      n,
      "^[ÁÉÍÓÚA-Z][a-záéíóú]+(s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$"
    );
  }

  return (
    <Card className="mb-3">
      <Card.Header className="fw-bold">Register</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mario Garcia"
              onInput={(e) => setName(e.target.value)}
            />
            {!validateName(name) && (
              <Form.Text className="text-danger">
                Ingrese un nombre válido.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="example@correo.com"
              onInput={(e) => setMail(e.target.value)}
            />
            <Form.Text className="text-danger">
              Ingrese un email válido.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Numero de telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="111-2223355"
              onInput={(e) => setPhone(e.target.value)}
            />
            <Form.Text className="text-danger">
              Ingrese un número de teléfono válido.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-2" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Acepto los terminos y condiciones."
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Ir a pagar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Register

