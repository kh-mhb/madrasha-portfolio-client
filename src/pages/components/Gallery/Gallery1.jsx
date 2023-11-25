import React from "react";

import img1 from "../../../assets/pillar/img1.jpeg";
import img2 from "../../../assets/pillar/img2.jpeg";
import img3 from "../../../assets/pillar/img3.jpeg";
import img4 from "../../../assets/pillar/img4.jpeg";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

class ErrorBoundary extends React.Component {
  componentDidCatch() {}

  render() {
    return this.props.children;
  }
}

const Gallery = () => {
  const onInit = () => {};

  return (
    <ErrorBoundary>
      <div className="container mx-auto mt-6">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <a mb-3 href={img1} data-lg-size="1600-1067">
            <img alt="img1" src={img1} className="w-full h-full" />
          </a>
          <a href={img2} data-lg-size="1600-1067">
            <img alt="img2" src={img2} className="w-full h-auto" />
          </a>
          <a href={img3} data-lg-size="1600-1067">
            <img alt="img3" src={img3} className="w-full h-auto" />
          </a>
          <a href={img4} data-lg-size="1600-1067" />
          <img alt="img4" src={img2} className="w-full h-auto" />
        </LightGallery>
      </div>
    </ErrorBoundary>
  );
};

export default Gallery;
