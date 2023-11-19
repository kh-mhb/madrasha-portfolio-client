import React from "react";
import Header from "../../Header/Header";
import { useMediaQuery } from "react-responsive";
import Banner from "../Banner/Banner";
import PillarCards from "../PillarCards/PillarCards";
import AboutUs from "../AboutUs/AboutUs";
import Introduction from "../Introdcution/Introduction";
import Motivation from "../Motivation";
import Banner1 from "../Banner/Banner1";
import Footer from "../../Footer/Footer";

const Home = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      {isLargeDevice ? <Banner1 /> : <Banner />}
      <AboutUs></AboutUs>
      <Motivation></Motivation>
      <Introduction></Introduction>
      <PillarCards></PillarCards>
    </div>
  );
};

export default Home;
