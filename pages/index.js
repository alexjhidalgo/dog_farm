import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import Footer from '../components/Footer';

const MainPage = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      {/* Add your main content here */}
      <Footer />
    </div>
  );
};

export default MainPage;

