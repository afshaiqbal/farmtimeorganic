import React from "react";
import './index.scss';
import heroimage from '../../../images/farm.png'

function Header() {
  return (
    <div className='hero-section-carousel'>
         <img src={heroimage} alt="Hero Image" />
    </div>
  );
}

export default Header;