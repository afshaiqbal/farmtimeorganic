import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './index.scss'; // Import the CSS for styling
import peri from '../../../images/periMakhana.jpg';
import cheese from '../../../images/cheeseMakhana.jpg';
import onion from '../../../images/onionMakhana.jpg';
import logo from '../../../images/logofinal.png';
import periVideo from '../../../images/periVideo.MP4';
import cheeseVideo from '../../../images/cheeseVideo.MP4';
import onionVideo from '../../../images/onionVideo.MP4';
import periThumb from '../../../images/periThumb.jpeg';
import cheeseThumb from '../../../images/cheeseThumb.jpeg';
import onionThumb from '../../../images/onionThumb.jpeg';
import heroSalt from '../../../images/heroSalt.JPG';
import heroOnion from '../../../images/heroOnion.JPG';
import heroPeri from '../../../images/heroPeri.JPG';
import heroCheese from '../../../images/heroCheese.jpeg';
import heroMint from '../../../images/heroMint.JPG';
import cover from '../../../images/all.png';


const FollowUs = () => {
  const slides = [
    { type: 'video', url: periVideo, thumbnail: periThumb },
    { type: 'video', url: cheeseVideo, thumbnail: cheeseThumb },
    { type: 'video', url: onionVideo, thumbnail: onionThumb },
    { type: 'photo', url: heroSalt },
    { type: 'photo', url: heroOnion },
    { type: 'photo', url: heroPeri },
    { type: 'photo', url: heroCheese },
    { type: 'photo', url: heroMint },
    { type: 'photo', url: cover },
    { type: 'photo', url: logo }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Math.ceil(slides.length / 3) - 1 : prev - 1));
    setPlayingIndex(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const totalSlides = Math.ceil(slides.length / 3);
      return prev === totalSlides - 1 ? 0 : prev + 1;
    });
    setPlayingIndex(null);
  };

  const handleThumbnailClick = (index) => {
    setPlayingIndex(index);
  };

  return (
    <div className="follow-us-container">
      <div className="title">
        <h1 title="Follow us on Instagram">Follow us on Instagram</h1>
        <a href="https://www.instagram.com/farmtimeorganic?igsh=MXF6M3ZhZWRtZTY3eQ==" className="button-link">
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
              className={`slide ${index >= currentSlide * 3 && index < currentSlide * 3 + 3 ? 'active' : ''}`}
            >
              {slide.type === 'video' ? (
                playingIndex === index ? (
                  <ReactPlayer
                    url={slide.url}
                    playing={true}
                    controls={true}
                    width="70%"
                    height="50%"
                  />
                ) : (
                  <div className='thumbnail-wrapper' onClick={() => handleThumbnailClick(index)}>
                    <img
                      className='video-thumbnail'
                      src={slide.thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                    />
                    <div className='play-button-overlay'>
                      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7L8 5z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                )
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
