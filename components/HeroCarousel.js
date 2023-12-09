import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselData, setCarouselData] = useState([
    {
      image: 'image1.jpg',
      caption: 'Welcome to our website!',
      buttonText: 'Learn More',
      buttonLink: '/about',
    },
    {
      image: 'image2.jpg',
      caption: 'Discover our amazing products!',
      buttonText: 'Shop Now',
      buttonLink: '/products',
    },
    // Add more carousel data objects as needed
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="hero-carousel">
      {carouselData.map((item, index) => (
        <div
          key={index}
          className={`carousel-slide ${
            index === currentIndex ? 'active' : ''
          }`}
        >
          <img src={item.image} alt={item.caption} />
          <div className="carousel-caption">
            <h2>{item.caption}</h2>
            <a href={item.buttonLink}>{item.buttonText}</a>
          </div>
        </div>
      ))}

      <div className="carousel-buttons">
        <button onClick={goToPreviousSlide}>Previous</button>
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={index === currentIndex ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
};

export default HeroCarousel;
