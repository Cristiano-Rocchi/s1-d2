import { Button, Card, Col, Container, Row } from "react-bootstrap";
import libriHorror from "../data/horror.json";

const AllTheBooks = () => {
  return (
    <Container fluid="md">
      <Row>
        {libriHorror.map((book) => (
          <Col lg={3} md={6} sm={12} key={book.asin} className="mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{"prezzo " + book.price + "€"}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
