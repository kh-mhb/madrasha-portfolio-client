import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import img1 from "../../../assets/banner/banner1.png";
// import img2 from "../../../assets/banner/banner2.jpg";
import img1 from "../../../assets/banner/img1.jpeg";
import img2 from "../../../assets/banner/img2.jpeg";
import img3 from "../../../assets/banner/img3.jpeg";
import img4 from "../../../assets/banner/img4.jpeg";

const Banner = () => {

  return (
    <div>
      <Carousel autoPlay="true" interval={1000}>
        <div>
          <img src={img1} />
          <p className="legend">Hello World</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">Hello World</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Hello World</p>
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
