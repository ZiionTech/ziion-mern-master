// src/Hero.js
import React from 'react';
import './FullStackHero.css';
import video from '../../../assets/videos/full-stack.mp4'

const FullStackHero = () => {
  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="right-section">
          <p><i>Elevate your skills with us.</i></p>

          <h1>Master Full Stack Web Development with the Best Course in Chandigarh and Become a Top-Tier Developer</h1>
          <p className='desc'>
            Our Full Stack Web Development training program in Chandigarh features a cutting-edge curriculum designed to equip students with an in-depth understanding of the latest web development technologies and tools. This comprehensive program covers both front-end and back-end development, as well as databases, web servers, and APIs, ensuring students gain the skills needed to excel in the dynamic field of web development.
          </p>
          <div className="button-group">
            <button>Book Your Seat</button>
            <button>Download Syllabus</button>
          </div>
        </div>
        <div className="left-section">
          <h2>Have a query? Feel free to ask!</h2>
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

export default FullStackHero;
