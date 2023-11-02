import React from "react";
import Header from "../../Header/Header";
import Banner from "../Banner/Banner";
import PillarCards from "../PillarCards/PillarCards";

const Home = () => {
  console.log("hello");
  return (
    <div>
      <Banner></Banner>
      <PillarCards></PillarCards>
    </div>
  );
};

export default Home;
