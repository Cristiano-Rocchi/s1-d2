import React from "react";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card className={`mb-4 ${selected ? "border border-danger" : ""}`}>
        <Card.Img
          variant="top"
          src={book.img}
          className="rounded img-cover"
          onClick={this.toggleSelected}
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
