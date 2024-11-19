import React, { useEffect } from 'react';
import personalLoanImage from '../assets/loan-img1.png'; 
import homeLoanImage from '../assets/loan-img1.png';

const Loans = () => {
  useEffect(() => {
    const loanSections = document.querySelectorAll('.loan-card');
    loanSections.forEach((section, index) => {
      section.style.animation = `fadeIn 0.5s ease-out ${index * 0.3}s forwards`;
    });
  }, []);

  return (
    <div className="loans-page">
      <h1 className="page-title">Loans</h1>
      <p className="intro-text">
        Explore our loan options, including personal loans for any need and home loans to help you buy your dream home.
      </p>

      <div className="loan-cards-container">
        <div className="loan-card personal-loan">
          <div className="loan-image-container">
            <img src={personalLoanImage} alt="Personal Loan" className="loan-image" />
          </div>
          <div className="loan-content">
            <h2>Personal Loans</h2>
            <p>
              Unsecured loans for various financial needs like debt consolidation, home improvement, or emergencies.
            </p>
            <h4>Key Features:</h4>
            <ul>
              <li>No collateral</li>
              <li>Flexible amounts</li>
              <li>Quick approval</li>
              <li>Competitive rates</li>
            </ul>
            <a href="/apply/personal-loan" className="cta-button">Apply Now</a>
          </div>
        </div>

        <div className="loan-card home-loan">
          <div className="loan-image-container">
            <img src={homeLoanImage} alt="Home Loan" className="loan-image" />
          </div>
          <div className="loan-content">
            <h2>Home Loans</h2>
            <p>
              Secure loans to finance the purchase of your home with competitive interest rates and flexible terms.
            </p>
            <h4>Key Features:</h4>
            <ul>
              <li>Low rates</li>
              <li>Long repayment terms</li>
              <li>Flexible amounts</li>
              <li>Tax benefits</li>
            </ul>
            <a href="/apply/home-loan" className="cta-button">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loans;
