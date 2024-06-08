import React from 'react';
import './WhyChoose.css';
import { FaBriefcase, FaGraduationCap, FaBuilding, FaTools, FaLaptop, FaLightbulb, FaUsers, } from 'react-icons/fa';

const WhyChoose = () => {
  const benefits = [
    { icon: <FaBriefcase />, title: "35,00,000+ Jobs Available", description: "There are over 3.5 million jobs available only in India according to Indeed & other big portals." },
    { icon: <FaGraduationCap />, title: "No Degree Required", description: "If you have no degree, you can still join this training & become a web developer today." },
    { icon: <FaBuilding />, title: "Resources", description: "You will find out many useful resources during your training. Join now." },
    { icon: <FaTools />, title: "Interview Preparation", description: "We will also prepare you for interviews after completing your course." },
    { icon: <FaLaptop />, title: "Freelancing", description: "After completing the training, you can do freelancing and make money from home." },
    { icon: <FaBuilding />, title: "Work At A Company", description: "You can also work at an IT company after completing your training." },
    { icon: <FaLightbulb />, title: "Start Your Own Business", description: "You will be able to start your business after training. Join now." },
    { icon: <FaUsers />, title: "Room For Innovation", description: "You will learn many innovative things during your training. Join now." },
    { icon: <FaBuilding />, title: "Work From Anywhere", description: "After completing the training, you will be able to work from anywhere in the world." },
    { icon: <FaUsers />, title: "Exciting Industry", description: "You will become a part of an exciting industry after completing your training. Join now." },
    { icon: <FaBuilding />, title: "Growing Industry", description: "You will become a part of a growing industry after completing your training. Join now." },
    { icon: <FaBuilding />, title: "Highly Demanded", description: "You will become a part of a highly demanded industry after completing your training." },
  ];

  return (
    <div className="full-stack-development">
      <header className="page-header">
        <h1>Why you should learn <span>Full Stack Web Development</span> training in Chandigarh?</h1>
        <p>There are so many Full Stack Web Development training institutes out there in Chandigarh who are providing Full Stack Developer courses in Chandigarh, so why you should choose us? Some of the biggest reasons are listed below.</p>
      </header>
      <section className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-item">
            <div className="icon">{benefit.icon}</div>
            <div className="content">
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </section>
      <div className="cta-section">
        <p>Still confused? Let's talk!</p>
        <button className="cta-button">CALL US NOW</button>
      </div>
    </div>
  );
};

export default WhyChoose;
