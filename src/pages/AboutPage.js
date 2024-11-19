import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to [Company Name], your trusted partner in financial services. We specialize in providing tailored financial solutions, expert advice, and innovative strategies to help you achieve your financial goals.
      </p>

      <h2>Our Mission</h2>
      <p>
        Empowering individuals and businesses with personalized financial solutions to ensure long-term success and security.
      </p>

      <h2>Our Story</h2>
      <p>
        Since our founding in [Year], [Company Name] has grown into a leading name in financial services, known for our commitment to excellence and client satisfaction.
      </p>
      <div className="cards-container">
        <div className="card">
          <h2>Our Services</h2>
          <ul>
            <li><strong>Investment Services:</strong> Build wealth with customized portfolios.</li>
            <li><strong>Loan Solutions:</strong> Flexible personal, home, and business loans.</li>
            <li><strong>Financial Planning:</strong> Holistic money management strategies.</li>
            <li><strong>Insurance Services:</strong> Protection for your family and assets.</li>
            <li><strong>Debt Management:</strong> Practical solutions for reducing debt.</li>
            <li><strong>Tax Planning:</strong> Maximize deductions and minimize liabilities.</li>
          </ul>
        </div>

        <div className="card">
          <h2>Why Choose Us?</h2>
          <ul>
            <li><strong>Expert Team:</strong> Certified professionals with proven expertise.</li>
            <li><strong>Client-Centric:</strong> Solutions tailored to your unique needs.</li>
            <li><strong>Transparent:</strong> Clear, open communication at every step.</li>
            <li><strong>Ongoing Support:</strong> Dedicated guidance for your financial journey.</li>
            <li><strong>Innovative Solutions:</strong> Leveraging the latest technologies and strategies to deliver cutting-edge financial services.</li>
            <li><strong>Proven Track Record:</strong> A history of success stories showcasing our impact on clients’ financial growth.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
