import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  const { _id, title, description, price, service_id, img } = service;
  return (
    <div className="  col-lg-4 col-md-6  ">
      <Card style={{ width: "18rem" }}>
        {/* <Card.Img
          style={{ height: "200px", borderRadius: "20px" }}
          variant="top"
          src={img}
        /> */}
        <PhotoProvider>
          <div className="foo">
            <PhotoView src={service.img}>
              <img
                style={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "20px",
                }}
                src={service.img}
                alt=""
              />
            </PhotoView>
          </div>
        </PhotoProvider>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description.slice(0, 100)}. . .</Card.Text>
          <Card.Text className="fw-semibold">Price: ${price}</Card.Text>
          <Link to={`/services/${_id}`}>
            <Button variant="primary">Details</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceCard;
