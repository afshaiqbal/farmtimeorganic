import React, { useState } from 'react';
import './index.scss'; // Import the CSS for styling
import { reviewData } from '../../../data'; // Adjust the import path based on your project structure
import { SampleNextArrow,SamplePrevArrow } from '../../elements/ArrowButton';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonialsPerSlide = 3; // Number of testimonials to show per slide

  // Calculate total number of slides
  const totalSlides = Math.ceil(reviewData.length / testimonialsPerSlide);

  // Handle the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Handle the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Calculate which testimonials to display on the current slide
  const startIndex = currentSlide * testimonialsPerSlide;
  const endIndex = startIndex + testimonialsPerSlide;
  const currentTestimonials = reviewData.slice(startIndex, endIndex);

  return (
    <div className="testimonial-carousel">
        <div className='title'>
      <h1 title="What Our Customers Say">What Our Customers Say</h1>
      </div>
      <button className="arrow left-arrow" onClick={prevSlide}>
      <SampleNextArrow />
      </button>

      <div className="testimonial-slide-container">
        {currentTestimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="arrow right-arrow" onClick={nextSlide}>
      <SamplePrevArrow />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
