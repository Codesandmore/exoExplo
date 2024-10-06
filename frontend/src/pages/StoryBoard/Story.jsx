import React, { useState, useEffect } from 'react';
import img1 from './images/img (1).jpg';
import img2 from './images/img (2).jpg';
import img3 from './images/img (3).jpg';    
import img4 from './images/img (4).jpg';
import img5 from './images/img (5).jpg';
import img6 from './images/img (6).jpg';
import img7 from './images/img (7).jpg';
import img8 from './images/img (8).jpg';
import img9 from './images/img (9).jpg';
import img10 from './images/img (10).jpg';
import img11 from './images/img (11).jpg';
import img12 from './images/img (12).jpg';
import img13 from './images/img (13).jpg';
import img14 from './images/img (14).jpg';
import img15 from './images/img (15).jpg';
import img16 from './images/img (16).jpg';
import img17 from './images/img (17).jpg';
import img18 from './images/img (18).jpg';
import img19 from './images/img (19).jpg';
import img20 from './images/img (20).jpg';

const Story = () => {
  const images = [
    img1,img2,img3,img4,img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Slide delay (3 seconds)

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Inline styles
  const containerStyle = {
    width: '80%',
    margin: '0 auto',
    padding: '20px',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    fontSize: '1.5rem',
    padding: '10px',
    cursor: 'pointer',
  };

  const prevButtonStyle = {
    ...buttonStyle,
    left: '10px',
  };

  const nextButtonStyle = {
    ...buttonStyle,
    right: '10px',
  };

  return (
    <div style={containerStyle}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={imageStyle}
      />
      {/* Previous Button */}
      <button style={prevButtonStyle} onClick={goToPrevious}>
        &#10094;
      </button>
      {/* Next Button */}
      <button style={nextButtonStyle} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Story;
