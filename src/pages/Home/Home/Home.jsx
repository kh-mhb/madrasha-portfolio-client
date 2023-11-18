import React from "react";
import Header from "../../Header/Header";
import Banner from "../Banner/Banner";
import PillarCards from "../PillarCards/PillarCards";
import AboutUs from "../AboutUs/AboutUs";
import Introduction from "../Introdcution/Introduction";
import Motivation from "../Motivation";
import Banner1 from "../Banner/Banner1";


const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Banner1></Banner1>
      <AboutUs></AboutUs>
      <Motivation></Motivation>
      <Introduction></Introduction>
      <PillarCards></PillarCards>
    </div>
  );
};

export default Home;
