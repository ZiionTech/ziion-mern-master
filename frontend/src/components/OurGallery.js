import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './OurGallery.css';

function OurGallery() {
  const images = [
    'https://via.placeholder.com/600x400?text=Photo+1',
    'https://via.placeholder.com/600x400?text=Photo+2',
    'https://via.placeholder.com/600x400?text=Photo+3',
    'https://via.placeholder.com/600x400?text=Photo+4',
    'https://via.placeholder.com/600x400?text=Photo+5',
    'https://via.placeholder.com/600x400?text=Photo+6',
    'https://via.placeholder.com/600x400?text=Photo+7',
    'https://via.placeholder.com/600x400?text=Photo+8',
    'https://via.placeholder.com/600x400?text=Photo+9'
  ];

  return (
    <section className="our-gallery">
      <div className="gallery-container">
        <h2>Our Gallery</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          interval={3000}
          centerMode
          centerSlidePercentage={33.33}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Gallery ${index + 1}`} className='image' />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default OurGallery;
