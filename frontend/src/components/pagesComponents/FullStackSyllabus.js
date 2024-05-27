// src/Syllabus.js
import React from 'react';
import './FullStackSyllabus.css';

function FullStackSyllabus() {
  const syllabus = [
    { week: 1, topic: 'Introduction to HTML & CSS' },
    { week: 2, topic: 'JavaScript Basics' },
    { week: 3, topic: 'Advanced JavaScript' },
    { week: 4, topic: 'Introduction to React' },
    { week: 5, topic: 'State Management with Redux' },
    { week: 6, topic: 'Node.js & Express' },
    { week: 7, topic: 'Databases with MongoDB' },
    { week: 8, topic: 'Building RESTful APIs' },
    { week: 9, topic: 'Authentication & Authorization' },
    { week: 10, topic: 'Deployment & DevOps Basics' },
  ];

  return (
    <section className="syllabus">
      <div className="syllabus-container">
        <h2>Syllabus</h2>
        <ul>
          {syllabus.map((item) => (
            <li key={item.week}>
              <div className="week">Week {item.week}</div>
              <div className="topic">{item.topic}</div>
            </li>
          ))}
        </ul>



      </div>
    </section>
  );
}

export default FullStackSyllabus;
