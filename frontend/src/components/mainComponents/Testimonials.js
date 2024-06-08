import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      name: "John Doe",
      review: "This course was fantastic! I learned so much and the instructors were very knowledgeable.",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      review: "A wonderful learning experience with great support from the staff. Highly recommended!",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Sam Wilson",
      review: "The materials were comprehensive and easy to follow. I feel much more confident in my skills now.",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <div className="testimonials-container">
      <h2>Student Testimonials</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        stopOnHover
        className="testimonials-carousel"
      >
        {reviews.map((review, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-img-wrapper">
              <img src={review.image} alt={`${review.name}`} className="testimonial-img" />
            </div>
            <h3>{review.name}</h3>
            <p className="testimonial-review">"{review.review}"</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
