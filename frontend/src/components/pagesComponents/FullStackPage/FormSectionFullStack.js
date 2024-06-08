import React from 'react';
import './FormSectionFullStack.css';

const FormSectionFullStack = () => {
  const features = [
    { title: "220 Hrs Instructor Led Training", icon: "🧑‍🏫" },
   
    { title: "248 Hrs Project & Exercises", icon: "💻" },
    { title: "Certification", icon: "📜" },
    { title: "Job Assistance", icon: "🧑‍💼" },
    { title: "Flexible Schedule", icon: "📅" },
    { title: "Lifetime Free Upgrade", icon: "🔄" },
    { title: "Mentor Support", icon: "👨‍🏫" },
  ];

  return (
    <div className="full-stack-page">
      <div className="content-section">
        <header className="page-heading">
          <h1>Join Full Stack Web Development Training in Chandigarh</h1>
          <p>Our expert instructors provide hands-on training, working with students to build real-world projects and applications. Through this practical experience, students gain the skills and knowledge necessary to succeed in the fast-paced field of web development.</p>
          <p>In addition to technical skills, our training program also focuses on developing problem-solving and critical thinking skills. Our goal is to prepare students to become not just skilled developers, but also effective problem-solvers who can tackle complex challenges in the industry.</p>
          <p>Whether you're new to web development or looking to enhance your skills, our full stack web development training program in Chandigarh is the perfect place to start. Join us today and take the first step towards a rewarding career in web development.</p>
          <p className="highlight">Our Training Programs Are Especially Designed For 10th/12th Passed Students, College & University Students, Marketing Professionals, Small Business Owners & Housewives To Get Their 1st Job In IT Sector</p>
        </header>
        <section className="features-section">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
            </div>
          ))}
        </section>
        <div className="cta-sec">
          <button className="cta-btn">TALK TO ADVISOR</button>
        </div>
      </div>
      <div className="advisor-form-section">
        <h2>Talk to Learning Advisor</h2>
        <form className="advisor-form">
          <input type="text" placeholder="Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
          <input type="tel" placeholder="Phone No." className="form-input" />
          <select className="form-select">
            <option value="">--Select Course--</option>
          </select>
          <select className="form-select">
            <option value="">--Select Branch--</option>
          </select>
          <button type="submit" className="form-button">Submit Now</button>

          <p>
          Thank you for reaching out to us! Our learning advisors are eager to assist you on your journey towards mastering full stack web development. By submitting this form, you're taking the first step towards unlocking a world of opportunities in the dynamic field of IT. Expect a prompt response from our team who will guide you through our comprehensive training programs tailored to suit your needs and aspirations. Get ready to embark on an exciting learning adventure with us!
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormSectionFullStack;
