import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = useLoaderData();
  useTitle("services");
  // console.log(services);

  return (
    <div>
      <h1 className="fw-bolder my-5 text-center">Explore all the Services</h1>
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
