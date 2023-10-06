import React, { useState } from 'react';
import './Banner.css';
import banner from '../../assets/banner.jpg';

const Banner = () => {
  const [ripples, setRipples] = useState([]);

  const handleHover = (e) => {
    const rippleContainer = e.currentTarget;
    const containerRect = rippleContainer.getBoundingClientRect();
    const rippleSize = 40; // Adjust the ripple size as desired
    const mouseX = e.clientX - containerRect.left;
    const mouseY = e.clientY - containerRect.top;

    const newRipple = {
      id: Date.now(),
      style: {
        top: `${mouseY - rippleSize / 2}px`,
        left: `${mouseX - rippleSize / 2}px`,
        width: `${rippleSize}px`,
        height: `${rippleSize}px`,
      },
    };

    setRipples([...ripples, newRipple]);
  };

  return (
    <div className='Banner-container' onMouseMove={handleHover}>
      <img className='bImage' src={banner} alt='' />
      <div className='ripple-container'>
        {ripples.map((ripple) => (
          <div key={ripple.id} className='ripple' style={ripple.style}></div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
