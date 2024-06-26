import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './index.scss'; // Import the CSS for styling
import peri from '../../../images/periMakhana.jpg';
import cheese from '../../../images/cheeseMakhana.jpg';
import onion from '../../../images/onionMakhana.jpg';
import logo from '../../../images/logofinal.png'
import periVideo from '../../../images/periVideo.MP4';
import cheeseVideo from '../../../images/cheeseVideo.MP4';
import onionVideo from '../../../images/onionVideo.MP4';

const FollowUs = () => {
  // Slide data: Array of objects with type 'video' or 'photo' and the respective URL
  const slides = [
    { type: 'video', url: periVideo },
    { type: 'video', url: cheeseVideo },
    { type: 'video', url: onionVideo },
    { type: 'photo', url: peri },
    { type: 'photo', url: cheese },
    { type: 'photo', url: onion },
    { type: 'photo', url: logo }
  ];

  // State to track the current slide index (0, 1, 2,... since we show four items at a time)
  const [currentSlide, setCurrentSlide] = useState(0);

  // State to track which video is playing
  const [playingIndex, setPlayingIndex] = useState(null);

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(slides.length / 4) - 1 : prev - 1));
    setPlayingIndex(null); // Stop any playing video when changing slides
  };

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const totalSlides = Math.ceil(slides.length / 4); // Calculate total slide sets
      return prev === totalSlides - 1 ? 0 : prev + 1; // Move to the next slide set or reset to the first slide
    });
    setPlayingIndex(null); // Stop any playing video when changing slides
  };

  // Function to handle video click
  const handleVideoClick = (index) => {
    setPlayingIndex(playingIndex === index ? null : index);
  };

  return (
    <div>
      <div className="title">
        <h1 title="Follow us on Instagram">Follow us on Instagram</h1>
        <a href="https://www.instagram.com/farmtimeorganic?igsh=MXF6M3ZhZWRtZTY3eQ==" class="button-link">
    <div className="hyperlink">
        <h4>@farmtimeorganic</h4>
    </div>
</a>
      </div>
       
      <div className="follow-us">
        <button className="arrow left-arrow" onClick={prevSlide}>
          &lt;
        </button>

        <div className="slide-container" style={{ '--slide-index': currentSlide }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index >= currentSlide * 4 && index < currentSlide * 4 + 4 ? 'active' : ''}`}
            >
              {slide.type === 'video' ? (
                <ReactPlayer
                  url={slide.url}
                  playing={playingIndex === index}
                  controls={true}
                  width="70%"
                  height="50%"
                  onClick={() => handleVideoClick(index)}
                />
              ) : (
                <img className='followImage' src={slide.url} alt={`Slide ${index}`} />
              )}
            </div>
          ))}
        </div>

        <button className="arrow right-arrow" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default FollowUs;
