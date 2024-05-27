import React from 'react';
import './FullStackHow.css';
import { FaChalkboardTeacher, FaUserCheck, FaSchool, FaCertificate, FaBriefcase } from 'react-icons/fa';

const FullStackHow = () => {
  return (
    <div className="how-it-works-container">
      <h2>How It Works</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-icon">
            <FaChalkboardTeacher />
          </div>
          <div className="step-content">
            <h3>Step 1: Take Demo</h3>
            <p>Experience a free demo class to understand our teaching methodology and curriculum.</p>
          </div>
        </div>
        <div className="arrow">➔</div>
        <div className="step">
          <div className="step-icon">
            <FaUserCheck />
          </div>
          <div className="step-content">
            <h3>Step 2: Enroll</h3>
            <p>Enroll in your chosen course and become a part of our learning community.</p>
          </div>
        </div>
        <div className="arrow">➔</div>
        <div className="step">
          <div className="step-icon">
            <FaSchool />
          </div>
          <div className="step-content">
            <h3>Step 3: Attend Classes</h3>
            <p>Attend our interactive classes and engage with experienced instructors.</p>
          </div>
        </div>
        <div className="arrow">➔</div>
        <div className="step">
          <div className="step-icon">
            <FaCertificate />
          </div>
          <div className="step-content">
            <h3>Step 4: Get Certificates</h3>
            <p>Receive certificates upon successful completion of your course.</p>
          </div>
        </div>
        <div className="arrow">➔</div>
        <div className="step">
          <div className="step-icon">

            <FaBriefcase />
          </div>
          <div className="step-content">
            <h3>Step 5: Get Placed</h3>
            <p>Get assistance with job placements and start your professional career.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullStackHow;
