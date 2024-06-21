import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './index.scss';
import logo from '../../../images/logo.png';

const AnimatedLogo = () => {
  const logoRef = useRef(null);
  const coconutTreeRef = useRef(null);
  const additionalImage1Ref = useRef(null);
  const additionalImage2Ref = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const coconutTree = coconutTreeRef.current;
    const additionalImage1 = additionalImage1Ref.current;
    const additionalImage2 = additionalImage2Ref.current;

    // Create a timeline for the logo animation
    const logoTl = gsap.timeline({ repeat: -1, yoyo: true });
    logoTl.to(logo, { duration: 7, scale: 1.2, ease: "power1.inOut" })
          .to(logo, { duration: 7, scale: 1, ease: "power1.inOut" });

    // Function to create infinite looping animation for background images
    const animateImage = (element, delay) => {
      gsap.set(element, { left: '-50%' });
      gsap.to(element, {
        left: '150%',
        duration: 10,
        ease: 'linear',
        repeat: -1,
        delay,
      });
    };

    // Animate background images
    animateImage(coconutTree, 0);
    animateImage(additionalImage1, 2); // Start 2 seconds later
    animateImage(additionalImage2, 4); // Start 4 seconds later

    // Clean up the animation on component unmount
    return () => {
      logoTl.kill();
      gsap.killTweensOf([coconutTree, additionalImage1, additionalImage2]);
    };
  }, []);

  return (
    <div className="logo-container">
      <img ref={logoRef} src={logo} alt="Animated Logo" />
      <div className="background">
        <div className="background-image coconut-tree" ref={coconutTreeRef}></div>
        <div className="background-image additional-image1" ref={additionalImage1Ref}></div>
        <div className="background-image additional-image2" ref={additionalImage2Ref}></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
