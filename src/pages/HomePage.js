import React from 'react';
import landingImage from '../assets/landing-img3.png';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="left-content">
        <h1>Welcome to Our Financial Services</h1>
        <p>
          We provide expert financial guidance and tools to help you manage your money,
          plan for the future, and achieve your financial goals. Whether you're looking to invest,
          apply for a loan, or manage personal finances, we have the resources you need.
        </p>
        <a href="/services" className="cta-button">Get Started</a>
      </div>
      <div className="right-image">
        <img
          src={landingImage}
          alt="Financial services illustration"
        />
      </div>
    </div>
  );
};

export default HomePage;
