import React from 'react';
import './Features.css';
import globePiture from '../assets/images/globe.png';
import projects from '../assets/images/project.png';
import flexibleBatch from '../assets/images/flexible-batch.png';
import expertsTrained from '../assets/images/experts-trained.png';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <img src={expertsTrained} alt="Feature 1" />
        <h2>5000+ Experts Trained</h2>
        <p>
Professionals skilled in job training excel in preparing individuals for employment, offering guidance, and ensuring successful job placement outcomes.</p>
      </div>
      <div className="feature">
        <img src={flexibleBatch} alt="Feature 2" />
        <h2>Flexible Batch Timings</h2>
        <p>
Flexible batch timings cater to diverse schedules, allowing learners to attend classes at their convenience, promoting accessibility and personalized learning.</p>
      </div>
      <div className="feature">
        <img src={globePiture} alt="Feature 3" />
        <h2>15+ Countries Served</h2>
        <p>Our services extend across 15+ countries, offering global reach and diverse solutions to meet clients' needs worldwide.</p>
      </div>
      <div className="feature">
        <img src={projects} alt="Feature 2" />
        <h2>Work on 30+ Live Projects</h2>
        <p>We engage in hands-on experience with over 30 live projects, fostering practical skills and real-world application for learners.</p>
      </div>
    </div>
  );
};

export default Features;
