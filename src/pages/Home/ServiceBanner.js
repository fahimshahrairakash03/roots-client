import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "../shared/Information/Information.css";

const ServiceBanner = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://roots-agency-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className=" information my-3 p-5">
      <h1 className="fw-bold mb-5 text-center text-color">
        The services you can get
      </h1>
      <div className="d-sm-flex d-md-flex d-lg-flex  flex-sm-column flex-md-row flex-lg-row justify-content-sm-center justify-content-md-between justify-content-lg-between align-items-center">
        {services.map((service) => (
          <p key={service._id}>
            <Card style={{ width: "18rem", height: "27rem" }}>
              <PhotoProvider>
                <div className="foo">
                  <PhotoView src={service.img}>
                    <img src={service.img} alt="" />
                  </PhotoView>
                </div>
              </PhotoProvider>

              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description.slice(0, 100)}. . .</Card.Text>
                <Card.Text className="fw-semibold">
                  Price: ${service.price}
                </Card.Text>
                <Link to={`/services/${service._id}`}>
                  <Button variant="primary">Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </p>
        ))}
      </div>
      <Link to="/services">
        <Button className=" service-btn  my-2 fw-bold" variant="secondary">
          See All Services
        </Button>{" "}
      </Link>
    </div>
  );
};

export default ServiceBanner;
