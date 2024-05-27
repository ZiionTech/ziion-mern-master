import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menubar.css';
import logo from '../assets/images/logo.png'; // Adjust the path as necessary

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current route location

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="contact-info">
          <a className="call-button" href="tel:+919878564224">
            <i className="fas fa-phone-alt"></i>+91-9878564224
          </a>
          <a className="call-button" href="tel:+919878564224">
            <i className="fas fa-phone-alt"></i>Book free demo now!
          </a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="menu-icon-line"></span>
          <span className="menu-icon-line"></span>
          <span className="menu-icon-line"></span>
        </div>
      </div>
      <nav className={`menubar ${isOpen ? 'open' : ''}`}>
        <ul className="menubar-list">
          <li className={`menubar-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li className={`menubar-item ${location.pathname === '/services' ? 'active' : ''}`}>
            <Link to="/services" onClick={toggleMenu}>Services</Link>
          </li>
          <li className={`menubar-item ${location.pathname === '/trainings' ? 'active' : ''}`}>
            <Link to="/trainings" onClick={toggleMenu}>Trainings</Link>
          </li>
          <li className={`menubar-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
            <Link to="/about-us" onClick={toggleMenu}>About Us</Link>
          </li>
          <li className={`menubar-item ${location.pathname === '/blogs' ? 'active' : ''}`}>
            <Link to="/blogs" onClick={toggleMenu}>Blogs</Link>
          </li>
          <li className={`menubar-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
            <Link to="/contact-us" onClick={toggleMenu}>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menubar;
