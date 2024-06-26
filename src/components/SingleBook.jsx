import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selezione: false,
  };

  selectex = () => {
    this.setState((state) => ({
      selezione: !state.selezione,
    }));
  };

  render() {
    const { book } = this.props;
    const { selezione } = this.state;

    return (
      <Card className={`mb-4 ${selezione && "border border-danger"}`}>
        <Card.Img
          variant="top"
          src={book.img}
          className="rounded img-cover"
          onClick={this.selectex}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
