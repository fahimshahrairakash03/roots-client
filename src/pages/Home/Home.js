import React from "react";
import About from "../shared/About/About";
import Banner from "./Banner";
import ServiceBanner from "./ServiceBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ServiceBanner></ServiceBanner>
    </div>
  );
};

export default Home;
