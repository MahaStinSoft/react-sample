import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            We are a trusted provider of financial solutions, committed to helping you achieve your financial goals with personalized services.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/#services" className="footer-link">Services</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/#faq" className="footer-link">FAQ</a></li>
            <li><a href="/#privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Address: 123 Financial Avenue, Suite 456, Your City, Your Country</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
