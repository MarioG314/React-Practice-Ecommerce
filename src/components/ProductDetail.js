import React, { useState } from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

const ProductDetail = ({data}) => {
  const [counterState, setCounterState] = useState(1)

  const add = () =>{
    setCounterState(counterState + 1)
  }
  const sub = () => {
    // if (counterState > 1) {
    //   setCounterState(counterState - 1)
    // }else{}
    counterState > 1 &&  
    setCounterState(counterState - 1)
    
  }

  return (
    <Container>
      <Card className="border-0">
        <Row>
          <Col>
            <Card.Img variant="top" src={data.image} />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>
                {data.title}
              </Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Container className="d-flex justify-content-between">
                <Button disabled={counterState > 1 ? false :true} size="sm" variant="danger" onClick={sub}>-</Button>
                <div className="px-2">{counterState}</div>
                <Button size="sm" variant="primary" onClick={add}>+</Button>
                <Card.Text as="h2">${data.price}</Card.Text>
              </Container>
              <Container className="d-grid g-2 pt-3">
                <Button variant="success" size="lg">
                  Comprar
                </Button>
              </Container>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductDetail;
