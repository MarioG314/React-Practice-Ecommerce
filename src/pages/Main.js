import React, { useEffect,useState } from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import { Card, Container, Button, Row } from "react-bootstrap";

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
        <Row xs={1} md={2} className="g-4 py-3 justify-content-center">
          {data.map((d, i) => (
            <Card className="mx-2" style={{ width: "13rem" }}>
              <Card.Img variant="top" src={d.image} />
              <Card.Body>
                <Card.Title>
                  <div>{d.title}</div>
                </Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>

              <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>{d.price}</div>
                <Button variant="primary">Comprar</Button>
              </Card.Footer>
            </Card>
          ))}
        </Row>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
