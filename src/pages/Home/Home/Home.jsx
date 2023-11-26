import React from "react";
import { useMediaQuery } from "react-responsive";
import PillarCards from "../PillarCards/PillarCards";
import AboutUs from "../AboutUs/AboutUs";
import Introduction from "../Introdcution/Introduction";
import Motivation from "../Motivation";
import AppBanner from "../Banner/Banner/AppBanner";

const Home = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <AppBanner />
      <AboutUs></AboutUs>
      <Motivation></Motivation>
      <Introduction></Introduction>
      <PillarCards></PillarCards>
    </div>
  );
};

export default Home;
