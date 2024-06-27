import React from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((state) => ({
      selected: !state.selected,
    }));
  };

  render() {
    const { book } = this.props;
    return (
      <Card className={this.state.selected ? "border border-danger" : ""}>
        <Card.Img
          variant="top"
          src={book.img}
          className="rounded img-cover"
          onClick={this.toggleSelected}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{"prezzo " + book.price + "€"}</Card.Text>
          {this.state.selected && <CommentArea asin={book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
