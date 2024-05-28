import React from 'react';
import './EnrollNow.css';
import admission from '../assets/images/admission.png'

const EnrollNow = () => {
  return (
    <div className="enroll-now-container">
      <div className="enroll-now-content">
        <div className="left-section">
          <div className="image-container">
            <img src={admission} alt="enroll" />
          </div>
        </div>
        <div className="right-section">
          <div className="form-container">
            <div className="form-heading">
              <h2>Start your Admission Process</h2>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="college">College Name</label>
                <input type="text" id="college" name="college" required />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course Interested In</label>
                <select id="course" name="course" required>
                  <option value="" disabled selected>Select a Course</option>
                  <option value="Technical Course 1">Technical Course 1</option>
                  <option value="Technical Course 2">Technical Course 2</option>
                  <option value="Technical Course 3">Technical Course 3</option>
                  {/* Add more technical courses */}
                  <option value="Language 1">Language 1</option>
                  <option value="Language 2">Language 2</option>
                  <option value="Language 3">Language 3</option>
                  {/* Add more language courses */}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="button-container">
            <button className="enroll-button">Enroll Now</button>
            <button className="syllabus-button">Download Syllabus</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollNow;
