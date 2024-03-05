import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const Slider = ({ images, autoSlideInterval }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchMoveX, setTouchMoveX] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slidesContainerRef = useRef(null);
  const autoSlideTimerRef = useRef(null);

  useEffect(() => {
    setSlideWidth(slidesContainerRef.current.offsetWidth);
    startAutoSlide();

    return () => {
      clearInterval(autoSlideTimerRef.current);
    };
  }, []);

  const handleTouchStart = (event) => {
    clearInterval(autoSlideTimerRef.current);
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event) => {
    setTouchMoveX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchMoveX - touchStartX;
    if (Math.abs(swipeDistance) > slideWidth / 3) {
      if (swipeDistance > 0) {
        showPreviousSlide();
      } else {
        showNextSlide();
      }
    }
    startAutoSlide();
  };

  const showPreviousSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const updateSlidePosition = () => {
    slidesContainerRef.current.style.transform = `translateX(${
      -activeIndex * slideWidth
    }px)`;
  };

  const startAutoSlide = () => {
    clearInterval(autoSlideTimerRef.current);
    autoSlideTimerRef.current = setInterval(() => {
      showNextSlide();
    }, autoSlideInterval);
  };

  return (
    <div
      className="banner-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="slides-container"
        ref={slidesContainerRef}
        style={{ width: `${images.length * 100}%` }}
      >
        {images.map((image, index) => (
          <div
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            key={index}
            style={{ flexBasis: `${100 / images.length}%` }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={showPreviousSlide}>
        &lt;
      </button>
      <button className="next-button" onClick={showNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Slider;
