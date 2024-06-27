import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import { SampleNextArrow, SamplePrevArrow } from "../../elements/ArrowButton";
import { reviewData } from "../../../data";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState(reviewData);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default is 1 slide to show
    slidesToScroll: 1, // Default is to scroll 1 slide at a time
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // On screens larger than 1024px, show 3 slides
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, // On screens between 426px and 1024px, show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 425, // On screens smaller than 426px, show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='review-section' id='reviews'>
      <div className='title'>
        <h1 title="Reviews">What Our Customers Say</h1>
      </div>
      <div className="review-container">
        <div className='review-carousel'>
          <Slider {...settings} ref={sliderRef}>
            {reviews.map((review, index) => (
              <div key={index} className='review-item'>
                <div className='review-content'>
                  <p className='review-text'>{review.text}</p>
                  <p className='review-author'>- {review.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
