import React from "react";
import './index.scss';
// import heroVideo from '../../../images/hero.mp4';
import AnimatedLogo from "../../elements/animatedLogo";

function Header() {
  return (
    <div className='hero-section-carousel' id="header">
      {/* <video autoPlay loop muted className="hero-video">
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <AnimatedLogo/>
    </div>
  );
}

export default Header;
