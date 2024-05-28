import React from 'react';
import './OurRecruiters.css';

function Recruiters() {
  const logos = [
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
    'https://via.placeholder.com/100',
  ];

  return (
    <section className="recruiters">
      <div className="recruiters-container">
        <h2>Our Placement Partners</h2>
        <div className="logos-grid">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo} alt={`Recruiter ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recruiters;
