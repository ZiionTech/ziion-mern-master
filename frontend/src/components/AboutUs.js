import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2>About Us</h2>
      <div className="introduction">
        <p>
          Welcome to our company! We are dedicated to providing top-notch education and training to help you excel in your career. Our team of experts is passionate about delivering the best learning experience. Join us and be a part of a community that values growth and excellence.
        </p>
      </div>
      <div className="team-carousel">
        <Carousel
          autoPlay={true}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          interval={3000}
          transitionTime={500}
          swipeable={true}
        >
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Team Member 1" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Team Member 2" />
          </div>
          <div>
            <img src="https://via.placeholder.com/600x400" alt="Team Member 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
