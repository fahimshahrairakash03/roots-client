import React from "react";
import aboutimg from "../../../assets/about.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="fw-bolder text-center">About</h1>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-md-12">
          <img className="about-img" src={aboutimg} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 col-md-12 ">
          <div className="about-text">
            <h3 className="text-center fw-bold">Story of Roots</h3>
            <p>
              ROOTS was established in 2007 with just one university partner and
              the vision to change the nature of education consultancy services
              provided in Bangladesh. Today ROOTS is a highly respected brand
              name and an industry leader working with more than two hundred
              higher education providers which include some of the top names in
              the UK, USA, Canada, Australia, Japan, and Malaysia. Roots strive
              to be the best by providing a service to students that is free and
              unrivaled by any other agency in the country, a service that gives
              students the confidence in knowing that they have made the right
              decision by coming to roots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
