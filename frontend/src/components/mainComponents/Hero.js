// src/Hero.js
import React from 'react';
import './Hero.css';
import video from '../../assets/videos/video-bg.mp4';

const Hero = () => {

  
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
       
        <div className="right-section">
            <p><i>Elevate your skills with us.</i></p>
          <h1>ZIION TECHNOLOGY - Leading IT Training Company in Mohali</h1>
          <p>
          Transform your career with our expert IT training in Mohali. Gain the skills you need to succeed in the dynamic world of technology. From programming to cyber security, our courses cover it all. Start your journey to IT excellence with us today.
          </p>
        </div>
        <div className="left-section">
          <h2>Have a query? Feel free to ask!</h2>
          <form className="enquiry-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <div className="button-group">
              <button type="submit">Submit</button>
              <button type="button" className="secondary-button">Download Syllabus</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
