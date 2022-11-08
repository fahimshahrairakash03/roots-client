import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ServiceReview = ({ review }) => {
  const { serviceName, Reviewer, message } = review;
  return (
    <div className="mb-3">
      <Card>
        <Card.Header>{Reviewer}</Card.Header>
        <Card.Body>
          <Card.Title>{message}</Card.Title>
          <Card.Text>{serviceName}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceReview;
