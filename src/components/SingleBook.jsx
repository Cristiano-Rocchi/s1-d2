import React from "react";
import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src={book.img} className="rounded img-cover" />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
