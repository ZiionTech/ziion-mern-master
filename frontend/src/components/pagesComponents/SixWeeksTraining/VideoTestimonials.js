import React from 'react';
import styles from './VideoTestimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    videoUrl: "https://www.example.com/video1.mp4",
    feedback: "This service is amazing! Highly recommend to everyone."
  },
  {
    id: 2,
    name: "Jane Smith",
    videoUrl: "https://www.example.com/video2.mp4",
    feedback: "A wonderful experience, exceeded my expectations!"
  },
  {
    id: 1,
    name: "John Doe",
    videoUrl: "https://www.example.com/video1.mp4",
    feedback: "This service is amazing! Highly recommend to everyone."
  },
  {
    id: 2,
    name: "Jane Smith",
    videoUrl: "https://www.example.com/video2.mp4",
    feedback: "A wonderful experience, exceeded my expectations!"
  },
  {
    id: 1,
    name: "John Doe",
    videoUrl: "https://www.example.com/video1.mp4",
    feedback: "This service is amazing! Highly recommend to everyone."
  },
  {
    id: 2,
    name: "Jane Smith",
    videoUrl: "https://www.example.com/video2.mp4",
    feedback: "A wonderful experience, exceeded my expectations!"
  },
  // Add more testimonials as needed
];

const VideoTestimonials = () => {
  return (
    <div className={styles.videoTestimonials}>
      <h2>What Our Clients Say</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className={styles.testimonial}>
            <video controls src={testimonial.videoUrl} />
            <p className={styles.feedback}>"{testimonial.feedback}"</p>
            <p className={styles.name}>- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
