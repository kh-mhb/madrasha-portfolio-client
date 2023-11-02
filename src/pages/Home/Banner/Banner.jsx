import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/banner1.png";
import img2 from "../../../assets/banner/banner2.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay="true" interval={300}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
