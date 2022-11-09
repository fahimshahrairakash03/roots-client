import React from "react";
import Card from "react-bootstrap/Card";

const ServiceReview = ({ review }) => {
  const { _id, serviceName, Reviewer, message, time } = review;
  console.log(typeof time);
  return (
    <div className="mb-3">
      <Card>
        <Card.Header>
          <h5>{Reviewer}</h5>
        </Card.Header>

        <Card.Body>
          <Card.Title>{message}</Card.Title>
          <Card.Text>{serviceName}</Card.Text>
        </Card.Body>
        <span className="ms-2">
          <little>{time}</little>
        </span>
      </Card>
    </div>
  );
};

export default ServiceReview;
