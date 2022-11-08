import React from "react";
import { useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  console.log(services);

  return (
    <div>
      <h1 className="fw-bolder my-5">Explore all the Services</h1>
      <div className="container">
        <div className="row gy-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
