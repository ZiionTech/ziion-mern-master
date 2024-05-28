import React from 'react';
import './ContactNow.css';

function ContactNow() {
  return (
    <section className="contact-now">
      <div className="contact-container">
        <div className="map-section">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Map Location"
            className="map-image"
          />
        </div>
        <div className="form-section">
          <h2>Request <span>Free Demo</span> Class</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="city">City:</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="college">College Name:</label>
              <input type="text" id="college" name="college" required />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course Opted:</label>
              <select id="course" name="course" required>
                <option value="">Select Course</option>
                <option value="frontend">Front-End Development</option>
                <option value="backend">Back-End Development</option>
                <option value="fullstack">Full Stack Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="devops">DevOps</option>
              </select>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactNow;
