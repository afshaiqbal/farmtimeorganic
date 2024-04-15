import React from "react";
import './index.scss';
import heroVideo from '../../../images/hero.mov';

function Header() {
  return (
    <div className='hero-section-carousel'>
      <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Header;
