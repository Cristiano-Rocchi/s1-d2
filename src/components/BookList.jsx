import React from "react";
import { Row, Col, FormControl } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends React.Component {
  state = {
    search: "",
  };
  render() {
    console.log("props", this.props);

    return (
      <>
        <Row className="justify-content-center mt-5 mb-3">
          <h1>HORROR</h1>
          <Col xs={8} md={6} lg={4}>
            <FormControl
              type="text"
              placeholder="ricerca"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            ></FormControl>
          </Col>
        </Row>
        <Row>
          {this.props.books
            .filter((book) =>
              book.title.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((book) => (
              <Col lg={3} md={6} sm={12} key={book.asin} className="mb-4">
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
      </>
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
