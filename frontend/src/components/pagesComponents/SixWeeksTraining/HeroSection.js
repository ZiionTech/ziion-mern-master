// src/Hero.js
import React from 'react';
import './HeroSection.css';
import video from '../../../assets/videos/training.mp4'

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="right-section">
          <p><i>Start your industrial training with ZIION Technology</i></p>

          <h1>Six Weeks <span>Industrial Summer Training</span> in Chandigarh</h1>
          <p className='desc'>
          Welcome to our 6-Week Industrial Training Program in Chandigarh and Mohali, a comprehensive course designed to equip students and professionals with the practical skills and knowledge required in today's competitive job market. Our program is tailored to provide hands-on experience in various industrial domains, ensuring participants are job-ready upon completion.
          </p>
          <div className="button-group">
            <button>Book Your Seat</button>
            <button>Download Syllabus</button>
          </div>
        </div>
        <div className="left-section">
          <h2>Have a query? Feel free to ask!</h2>
          <p> Welcome to our 6-Week Industrial Training Program in Chandigarh and Mohali, a comprehensive course designed to equip students and Welcome to our 6-Week Industrial Training Program in Chandigarh and Mohali, a comprehensive course designed to equip students and</p>
          <form className="enquiry-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
