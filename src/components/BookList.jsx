import React from "react";
import { Row, Col } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  render() {
    console.log("props", this.props);
    const { books } = this.props;

    return (
      <Row>
        {books.map((book) => (
          <Col lg={3} md={6} sm={12} key={book.asin} className="mb-4">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    );
  }
}

export default BookList;
/* import { Col, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
const BookList = ({ books }) => {
  return (
    <Row>
      {books.map((book) => (
        <Col lg={3} md={6} sm={12} key={book.asin} className="mb-4">
          <SingleBook book={book} />
        </Col>
      ))}
    </Row>
  );
};
export default BookList; */
