// src/TrainingPage.js
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHtml5, FaMobileAlt, FaIndustry, FaBullhorn, FaCode, FaBriefcase, FaEllipsisH } from 'react-icons/fa';
import styles from './Trainings.module.css';
import TrainingPrograms from '../../assets/images/training-programs.png'

const trainings = {
  "WEB TECHNOLOGIES": ["Full Stack Development", "Web Development", "React.js", "Node.js", "Web Designing", "Wordpress Training", "Angular.js", "Advance Java", "Django & Flask"],
  "APP DEVELOPMENT": ["Android Development", "iOS Development", "Flutter", "React Native", "Kotlin"],
  "INDUSTRIAL TRAININGS": ["Six Months Industrial Training", "Six Weeks Industrial Training", "internship"],
  "DIGITAL MARKETING": ["SEO", "Content Marketing", "Social Media Marketing", "Email Marketing", "Digital Marketing Course", "Online Bidding", "PPC", "Affiliate Marketing", "Lead Generation", "Search Engine Marketing", "Content Optimization"],
  "PROGRAMMING COURSES": ["Python", "Java", "C++", "Ruby"],
  "PROFESSIONAL COURSES": ["Business Communication", "Leadership Training", "Time Management"],
  "OTHERS": ["Photography", "Graphic Design", "Music Production"]
};

const getIconForSection = (section) => {
  switch (section) {
    case "WEB TECHNOLOGIES":
      return <FaHtml5 />;
    case "APP DEVELOPMENT":
      return <FaMobileAlt />;
    case "INDUSTRIAL TRAININGS":
      return <FaIndustry />;
    case "DIGITAL MARKETING":
      return <FaBullhorn />;
    case "PROGRAMMING COURSES":
      return <FaCode />;
    case "PROFESSIONAL COURSES":
      return <FaBriefcase />;
    case "OTHERS":
      return <FaEllipsisH />;
    default:
      return <FaEllipsisH />;
  }
};

const Trainings = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <div className={styles.trainingPage}>
      <header className={styles.pageHeader}>
        <h1>Our Training Programs</h1>
        <img src={TrainingPrograms} alt="Training Programs" className={styles.headerImage} />
      </header>
      <h1>Choose from <span>Best Training Programs </span>in Chandigarh</h1>
      {Object.keys(trainings).map((section) => (
        <div key={section} className={`${styles.trainingSection} ${openSections[section] ? styles.open : ''}`}>
          <div className={styles.trainingHeader} onClick={() => toggleSection(section)}>
            <div className={styles.trainingIcon}>{getIconForSection(section)}</div>
            <h2>{section}</h2>
            <div className={styles.chevronIcon}>
              {openSections[section] ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          <ul className={`${styles.trainingList} ${openSections[section] ? styles.visible : ''}`}>
            {trainings[section].map((course) => (
              <li key={course}>
                <a href={`/trainings/${course.toLowerCase().replace(/ /g, '-')}`}>
                  {course}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Trainings;
