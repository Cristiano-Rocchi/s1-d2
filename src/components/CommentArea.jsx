import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmE4YjdjMjM5YzAwMTUyZjRiNDQiLCJpYXQiOjE3MTk0OTI1ODgsImV4cCI6MTcyMDcwMjE4OH0.cLLWY65WElBADdRyNpt6AnEzRij2AIh8TpzlPM104so",
        },
      }
    )
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((e) => {
        console.log("Errore durante il recupero dei commenti:", e);
      });
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <ListGroup>
          <CommentsList comments={this.state.comments} />
        </ListGroup>
        <AddComment
          asin={this.props.asin}
          refreshComments={this.fetchComments}
        />
      </div>
    );
  }
}

export default CommentArea;
