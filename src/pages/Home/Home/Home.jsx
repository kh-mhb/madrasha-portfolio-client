import React from "react";
import Header from "../../Header/Header";
import Banner from "../Banner/Banner";
import PillarCards from "../PillarCards/PillarCards";
import AboutUs from "../AboutUs/AboutUs";
import Introduction from "../Introdcution/Introduction";
import Motivation from "../Motivation";

const Home = () => {
  console.log("hello");
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Motivation></Motivation>
      <Introduction></Introduction>

      <PillarCards></PillarCards>
    </div>
  );
};

export default Home;
