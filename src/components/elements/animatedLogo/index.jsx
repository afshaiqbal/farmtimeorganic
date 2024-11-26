import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './index.scss';
import logo from '../../../images/logo.png';

const AnimatedLogo = () => {
  const logoRef = useRef(null);
  const coconutTreeRef = useRef(null);
  const additionalImage1Ref = useRef(null);
  const additionalImage2Ref = useRef(null);
  const additionalImage3Ref = useRef(null);
  const additionalImage4Ref = useRef(null);
  const additionalImage5Ref = useRef(null);
  const additionalImage6Ref = useRef(null);

  useEffect(() => {
    const logo = logoRef.current;
    const coconutTree = coconutTreeRef.current;
    const additionalImage1 = additionalImage1Ref.current;
    const additionalImage2 = additionalImage2Ref.current;
    const additionalImage3 = additionalImage3Ref.current;
    const additionalImage4 = additionalImage4Ref.current;
    const additionalImage5 = additionalImage5Ref.current;
    const additionalImage6 = additionalImage6Ref.current;

    // Create a timeline for the logo animation
    const logoTl = gsap.timeline({ repeat: -1, yoyo: true });
    logoTl.to(logo, { duration: 7, scale: 1.2, ease: "power1.inOut" })
          .to(logo, { duration: 7, scale: 1, ease: "power1.inOut" });

    // Function to create infinite looping animation for background images
    const animateImage = (element, delay) => {
      gsap.set(element, { left: '-50%' });
      gsap.to(element, {
        left: '150%',
        duration: 12,
        ease: 'linear',
        repeat: -1,
        delay,
      });
    };

    // Animate background images
    animateImage(coconutTree, 0);
    animateImage(additionalImage1, 2.2);
    animateImage(additionalImage2, 3.6);
    animateImage(additionalImage3, 5);
    animateImage(additionalImage4, 6.5);
    animateImage(additionalImage5, 8);
    animateImage(additionalImage6, 9.5);

    // Clean up the animation on component unmount
    return () => {
      logoTl.kill();
      gsap.killTweensOf([
        coconutTree,
        additionalImage1,
        additionalImage2,
        additionalImage3,
        additionalImage4,
        additionalImage5,
        additionalImage6,
      ]);
    };
  }, []);

  return (
    <div className="logo">
      <img ref={logoRef} src={logo} alt="Animated Logo" />
      <div className="background">
        <div className="background-image coconut-tree" ref={coconutTreeRef}></div>
        <div className="background-image additional-image1" ref={additionalImage1Ref}></div>
        <div className="background-image additional-image2" ref={additionalImage2Ref}></div>
        <div className="background-image additional-image3" ref={additionalImage3Ref}></div>
        <div className="background-image additional-image4" ref={additionalImage4Ref}></div>
        <div className="background-image additional-image5" ref={additionalImage5Ref}></div>
        <div className="background-image additional-image6" ref={additionalImage6Ref}></div>
      </div>
    </div>
  );
};

export default AnimatedLogo;
