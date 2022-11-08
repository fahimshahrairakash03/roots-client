import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ServiceBanner = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container my-3 p-5">
      <h1 className="fw-bold mb-5">The services you can get</h1>
      <div className="d-sm-flex d-md-flex d-lg-flex  flex-sm-column flex-md-row flex-lg-row justify-content-sm-center justify-content-md-between justify-content-lg-between align-items-center">
        {services.map((service) => (
          <p key={service._id}>
            <Card style={{ width: "18rem", height: "25rem" }}>
              <Card.Img
                style={{ height: "200px", borderRadius: "20px" }}
                variant="top"
                src={service.img}
              />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description.slice(0, 100)}. . .</Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </p>
        ))}
      </div>
      <Link to="/services">
        <Button className="my-2 fw-semibold" variant="secondary">
          See All Services
        </Button>{" "}
      </Link>
    </div>
  );
};

export default ServiceBanner;
