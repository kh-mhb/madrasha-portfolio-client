import React from "react";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import img1 from "../../../assets/pillar/img1.jpeg";
import img2 from "../../../assets/pillar/img2.jpeg";
import img3 from "../../../assets/pillar/img3.jpeg";
import img4 from "../../../assets/pillar/img4.jpeg";

class ErrorBoundary extends React.Component {
  componentDidCatch() {}

  render() {
    return this.props.children;
  }
}

const Gallery = () => {
  const onInit = () => {};

  return (
    <div>
      <div className="text-center mt-5 ">
        <h1 className="sm:text-3xl text-3xl  border-y-4 w-1/3 mx-auto py-3 font-medium title-font mb-4 text-gray-900">
          From Our Gallery
        </h1>
      </div>
      <ErrorBoundary>
        <div className="container mx-auto mt-6">
          <LightGallery
            onInit={onInit}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
          >
            <a className="mb-3" href={img1} data-lg-size="1600-1067">
              <img alt="img1" src={img1} className="w-full h-full" />
            </a>
            <a href={img2} data-lg-size="1600-1067">
              <img alt="img2" src={img2} className="w-full h-auto" />
            </a>
            <a href={img3} data-lg-size="1600-1067">
              <img alt="img3" src={img3} className="w-full h-auto" />
            </a>
            <a href={img4} data-lg-size="1600-1067">
              <img alt="img4" src={img4} className="w-full h-auto" />
            </a>
          </LightGallery>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 flex-wrap"></div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              {/* Rest of your code for the image gallery */}
            </div>
          </div>
        </section>
      </ErrorBoundary>
    </div>
  );
};

export default Gallery;
