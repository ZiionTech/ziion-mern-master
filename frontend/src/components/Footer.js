import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/images/logo.png'; // Import company logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-info">
          <h3>Site Map</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/trainings">Trainings</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p>D-152, First Floor, Phase-8, Industrial Area</p>
          <p>Mohali, Punjab - 160055</p>
          <p>Email: ziiontechnology@gmail.com</p>
          <p>Phone: +91-9878564224 | +91-9878304224 | +91-8264974224</p>
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com"><FaFacebook /></a>
        <a href="https://www.twitter.com"><FaTwitter /></a>
        <a href="https://www.instagram.com"><FaInstagram /></a>
      </div>
      <div className="legal">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-and-conditions">Terms and Conditions</Link>
        <Link to="/faqs">FAQs</Link>
      </div>
    </footer>
  );
};

export default Footer;
