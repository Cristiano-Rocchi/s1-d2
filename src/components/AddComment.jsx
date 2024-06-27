import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentText: "",
    error: null,
  };

  handleInputChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { asin, refreshComments } = this.props;
    const newComment = {
      comment: this.state.commentText,
      elementId: asin,
    };

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE4YjdjMjM5YzAwMTUyZjRiNDQiLCJpYXQiOjE3MTk0OTI1ODgsImV4cCI6MTcyMDcwMjE4OH0.cLLWY65WElBADdRyNpt6AnEzRij2AIh8TpzlPM104so",
      },
      body: JSON.stringify(newComment),
    })
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Errore durante l'invio del commento");
        }
        return resp.json();
      })
      .then((data) => {
        console.log("Commento inviato con successo:", data);
        this.setState({ commentText: "", error: null });
        refreshComments();
      })
      .catch((error) => {
        console.error("Errore durante l'invio del commento:", error);
        this.setState({
          error: "Errore durante l'invio del commento. Riprova più tardi.",
        });
      });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.state.error && <Alert variant="danger">{this.state.error}</Alert>}
        <Form.Group controlId="formComment">
          <Form.Label>Aggiungi un commento:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.commentText}
            onChange={this.handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
