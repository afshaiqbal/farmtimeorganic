import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./index.scss";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carouselItems = [0, 1,2,3,4,5]; // Array to loop through the three carousel items

  return (
    <div className="hero-section-carousel">
      <Slider {...settings}>
        {carouselItems.map((index) => (
          <div key={index} className={`carouselItems item${index}`}>
            <Link to="/#product">
              {/* Content inside the carousel item, if needed */}
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
