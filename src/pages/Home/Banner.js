import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/slider/img1.jpg";
import img2 from "../../assets/slider/img2.jpg";
import img3 from "../../assets/slider/img3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="container">
      <Carousel.Item interval={1000}>
        <div className="carousel-img">
          <img className="d-block w-100" src={img1} alt="First slide" />
        </div>
        <Carousel.Caption>
          <h3>Higher Study</h3>
          <p>Helping Students to get the place for higher study worldwide</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="carousel-img">
          <img className="d-block w-100 " src={img2} alt="Second slide" />
        </div>
        <Carousel.Caption>
          <h3>Guidance on SOP/Personal Statement/Scholarship Essay Writing</h3>
          <p>
            Take advantage of Essay Support session to help you come up with the
            best version for your essay with correct guidelines and constant
            feedback
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-img">
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </div>
        <Carousel.Caption>
          <h3>Scholarships</h3>
          <p>
            Trying our best to connect you with available scholarships to make
            study abroad more affordable. Many of my students receive
            scholarships for higher studies
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
