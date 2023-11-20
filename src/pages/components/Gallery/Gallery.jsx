import React from 'react';
import LightGallery from 'lightgallery/react';
import img1 from '../../../assets/pillar/img1.jpeg';
import img2 from '../../../assets/pillar/img2.jpeg';
import img3 from '../../../assets/pillar/img3.jpeg';
import img4 from '../../../assets/pillar/img4.jpeg';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';


const images = [
  { src: img1, alt: 'Flag of India' },
  { src: img2, alt: '2' },
  { src: img3, alt: '3' },
  { src: img4, alt: '4' },
]


export function Gallery() {
  const onInit = () => {

  }

 
  return (
    <div  className="container w-full flex flex-wrap my-8">
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgRotate, lgShare]}>
        {images.map((image, index) => (
          <a className='w-1/3' href={image.src} key={index}>
            <img alt={image.alt} className="w-1/3 h-auto"  src={image.src} />
          </a>
        ))}
      </LightGallery>
    </div>
  )
}
