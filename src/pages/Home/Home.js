import React from "react";
import About from "../shared/About/About";
import Information from "../shared/Information/Information";
import Banner from "./Banner";
import ServiceBanner from "./ServiceBanner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <ServiceBanner></ServiceBanner>
      <Information></Information>
    </div>
  );
};

export default Home;
