import React from 'react';
import './PopularCourses.css';
import { Link } from 'react-router-dom';
import fullStack from '../assets/images/full-stack.png';
import AiMl from '../assets/images/ai-ml.png'
import python from '../assets/images/python.png';
import java from '../assets/images/java.png'
import dm from '../assets/images/dm.png';
import graphics from '../assets/images/graphics.png';
import webDesign from '../assets/images/web-design.png';
import mobile from '../assets/images/mobile.png'

const PopularCourses = () => {

  const allCourses = [
    {
      id : 'c1',
      courseName : 'Full Stack Development',
      courseDesc : 'anything right now brief',
      courseImage : fullStack,
      slug: 'full-stack-development',

    },
    {
      id : 'c2',
      courseName : 'AI/ML',
      courseDesc : 'anything right now brief',
      courseImage : AiMl
    },
    {
      id : 'c3',
      courseName : 'Core & Advance Python',
      courseDesc : 'anything right now brief',
      courseImage : python
    },
    {
      id : 'c4',
      courseName : 'Core & Advance Java',
      courseDesc : 'anything right now brief',
      courseImage : java
    },
    {
      id : 'c5',
      courseName : 'Digital Marketing',
      courseDesc : 'anything right now brief',
      courseImage : dm
    },
    {
      id : 'c6',
      courseName : 'Graphic Designing',
      courseDesc : 'anything right now brief',
      courseImage : graphics
    },
    {
      id : 'c7',
      courseName : 'Web Designing',
      courseDesc : 'anything right now brief',
      courseImage : webDesign
    },
    {
      id : 'c8',
      courseName : 'Mobile App Development',
      courseDesc : 'anything right now brief',
      courseImage : mobile
    },
  ]


  return (
    <div className="popular-courses-container">
      <h2>Popular Courses</h2>
      <div className="course-grid">
        {allCourses.map((item) => (
            <div className="course">
            <img src={item.courseImage} alt="Course Thumbnail" />
            <h3>{item.courseName}</h3>
            <p>{item.courseDesc}</p>
            <div className="cta-buttons">
              <Link to = {`/trainings/${item.slug}`} className="enroll-button">Learn more</Link>
              <button className="download-button">Download Syllabus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
