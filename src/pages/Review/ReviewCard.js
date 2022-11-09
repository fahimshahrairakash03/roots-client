import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReviewCard = ({ review, handleDelete }) => {
  const { _id, serviceName, Reviewer, message } = review;
  return (
    <div className="w-75 mx-auto mt-4">
      <Card>
        <Card.Header>
          <div>
            {Reviewer}
            <div className="ms-auto">
              <Button className="w-25 fw-bold" variant="outline-warning">
                Update
              </Button>{" "}
              <Button
                onClick={() => handleDelete(_id)}
                className="w-25 fw-bold"
                variant="outline-danger"
              >
                Delete
              </Button>{" "}
            </div>
          </div>
        </Card.Header>

        <Card.Body>
          <Card.Title>{message}</Card.Title>
          <Card.Text>{serviceName}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReviewCard;
