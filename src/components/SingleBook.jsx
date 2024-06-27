import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selezione: false,
  };

  selected = () => {
    this.setState((state) => ({
      selezione: !state.selezione,
    }));
  };

  render() {
    const { book } = this.props;
    const { selezione } = this.state;

    return (
      <Card className={selezione && "border border-danger"}>
        <Card.Img
          variant="top"
          src={book.img}
          className="rounded img-cover"
          onClick={this.selected}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{"prezzo " + book.price + "€"}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
