import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Header />
      <div>
        <h1>Our Story</h1>
        <p>Insert narrative about how the company/website came to be.</p>
      </div>
      <div>
        <h1>Our Mission</h1>
        <p>Insert narrative about what the company/website aims to do.</p>
      </div>
      <div>
        <h1>Ethical Standards</h1>
        <p>Insert narrative about the ethical standards the company/website upholds.</p>
        <p>Insert narrative about how the company/website ensures those ethical standards.</p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
