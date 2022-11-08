import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ServiceCard = ({ service }) => {
  const { _id, title, description, price, service_id, img } = service;
  return (
    <div className="  col-lg-4 col-md-6  ">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          style={{ height: "200px", borderRadius: "20px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 100)}. . .</Card.Text>
          <Button variant="primary">Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
