import React from 'react'
import { Card , Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Product = ({ d }) => {
  return (
    <Card className="mx-2" style={{ width: "13rem" }}>
      <Card.Img variant="top" src={d.image} />
      <Card.Body>
        <Card.Title>
          <div>{d.title}</div>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center">
        <div>${d.price}</div>
        <Link to={`/product/${d.id}`}>
          <Button variant="primary">Comprar</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
}

export default Product