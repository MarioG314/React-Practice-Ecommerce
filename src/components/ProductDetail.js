import React from "react";
import { Row, Col, Card, Container, Button } from "react-bootstrap";

const ProductDetail = ({data}) => {
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
                <div>{data.description}</div>
              </Card.Text>
              <Container className="d-flex justify-content-between">
                <Button variant="dark">Counter</Button>
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
