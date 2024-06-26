import React from "react";
import { Col, Row } from "react-bootstrap";
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
export default BookList;
