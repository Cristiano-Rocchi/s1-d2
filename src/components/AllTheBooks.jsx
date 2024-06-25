import { Card, Col, Container, Row } from "react-bootstrap";
import libriHorror from "../data/horror.json";

const AllTheBooks = () => {
  return (
    <Container fluid="md">
      <h1 className="my-4">HORROR</h1>
      <Row>
        {libriHorror.map((book) => (
          <Col lg={3} md={6} sm={12} key={book.asin} className="mb-4">
            <Card className="cardStyle">
              <Card.Img
                className="rounded img-cover"
                variant="top"
                src={book.img}
              />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{"prezzo " + book.price + "€"}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default AllTheBooks;
