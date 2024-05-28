import React from 'react';
import './Benefits.css';
import { FaChalkboardTeacher, FaBook, FaLaptop, FaCertificate, FaGlobe, FaHandsHelping } from 'react-icons/fa';
import benefitsImage from '../assets/images/benefits.png';

const Benefits = () => {

  const benefits = [
    {
      icon : <FaChalkboardTeacher className="benefit-icon" />,
      benefit : 'Expert Instructors',
      desc : 'Learn from industry experts who bring real-world experience to the classroom'
    },
    {
      icon : <FaLaptop className="benefit-icon" />,
      benefit : 'Flexible Learning',
      desc : 'Access the course materials anytime, anywhere, and learn at your own pace.'
    },
    {
      icon : <FaBook className="benefit-icon" />,
      benefit : 'Comprehensive Curriculum',
      desc : 'Our curriculum covers all the essential topics to help you excel in your career.'
    },
    {
      icon :   <FaCertificate className="benefit-icon" />,
      benefit : 'Certification',
      desc : 'Earn a recognized certification to enhance your professional credentials.'
    },
    {
      icon :  <FaGlobe className="benefit-icon" />,
      benefit : 'Global Community',
      desc : 'Join a global community of learners and expand your network.'
    },
    {
      icon : <FaHandsHelping className="benefit-icon" />,
      benefit : 'Supportive Environment',
      desc : 'Get support from our dedicated staff and connect with fellow students.'
    },
    
    
  ]

  return (
    <div className="benefits-container">
      <h2>Benefits of Our Course</h2>
      <div className="benefits-content">
        <div className="benefits-list">
            {benefits.map((item) => (
              <div className="benefit">
                {item.icon}
                <h3>{item.benefit}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
        </div>
        <div className="benefits-image">
          <img src={benefitsImage} alt="Benefits" />
        </div>
      </div>
    </div>
  );
};

export default Benefits;
