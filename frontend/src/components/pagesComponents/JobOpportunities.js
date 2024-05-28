import React from 'react';
import './JobOpportunities.css';

function JobOpportunities() {
  const jobRoles = [
    'Front-End Developer',
    'Back-End Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'DevOps Engineer',
    'Database Administrator',
    'Mobile Application Developer',
    'Project Manager',
    'Software Engineer',
    'Quality Assurance Engineer',
    'Technical Lead',
    'Product Manager',
    'Cloud Engineer',
    'Technical Support Engineer'
  ]

  const images = [
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
    'https://via.placeholder.com/200',
  ];

  return (
    <section className="job-opportunities">
      <div className="job-container">
        <h2>Job Opportunities After Completing the Full Stack Development Course</h2>
        <p>
          After completing our Full Stack Development course, you'll be equipped with the skills required to excel in various roles in the tech industry. Whether you want to specialize in front-end, back-end, or full stack development, there are numerous opportunities available. Here are some of the top job roles you can pursue:
        </p>
        <ul className="job-roles">
          {jobRoles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
        <div className="images-grid">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <img src={image} alt={`Job Opportunity ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobOpportunities;
