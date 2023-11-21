import React, { useEffect, useRef } from 'react';
// import './Banner2.css';

const Banner2 = () => {
  const slideRef = useRef(null);

  useEffect(() => {
    const handleNextClick = () => {
      const lists = slideRef.current.querySelectorAll('.item');
      slideRef.current.appendChild(lists[0]);
    };

    const handlePrevClick = () => {
      const lists = slideRef.current.querySelectorAll('.item');
      slideRef.current.prepend(lists[lists.length - 1]);
    };

    document.getElementById('next').addEventListener('click', handleNextClick);
    document.getElementById('prev').addEventListener('click', handlePrevClick);

    return () => {
      // Cleanup event listeners on component unmount
      document.getElementById('next').removeEventListener('click', handleNextClick);
      document.getElementById('prev').removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className="container">
      <div id="slide" ref={slideRef}>
        
        <div className="item" style={{ backgroundImage: "url(1.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>

        {/* Other items go here */}
        <div className="item" style={{ backgroundImage: "url(1.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>

        {/* Other items go here */}
        <div className="item" style={{ backgroundImage: "url(1.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>

        {/* Other items go here */}
        <div className="item" style={{ backgroundImage: "url(1.jpg)" }}>
          <div className="content">
            <div className="name">LUNDEV</div>
            <div className="des">Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
            <button>See more</button>
          </div>
        </div>

        {/* Other items go here */}
      </div>

      <div className="buttons">
        <button id="prev"><i className="fa-solid fa-angle-left"></i></button>
        <button id="next"><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  );
};

export default Banner2;
