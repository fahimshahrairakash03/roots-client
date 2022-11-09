import React from "react";
import useTitle from "../../hooks/useTitle";
import About from "../shared/About/About";
import Information from "../shared/Information/Information";
import Banner from "./Banner";
import ServiceBanner from "./ServiceBanner";

const Home = () => {
  useTitle("home");
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
