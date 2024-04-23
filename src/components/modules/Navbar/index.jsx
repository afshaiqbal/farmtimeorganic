import React,  { useState } from 'react';
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import './index.scss';
import { HashLink as Link } from "react-router-hash-link";
import logo from "../../../images/logofinal.png";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const closeMenu = () => setClick(false);
  
    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
      const yOffset = -90;
      window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
    }
  return (
    <div className='header'>
    <nav className='navbar'>
    <a href='/' className='logo'>
          <img src ={logo} alt='farmtime' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? <RxCross1 size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className='nav-item'>
        <Link to='/#header' onClick={closeMenu}>
              Home
            </Link>
        </li>
        <li className='nav-item'>           
         <Link to='/#product' onClick={closeMenu} spy={true}
              smooth={true}
              scroll={scrollWithOffset}>
              Products
            </Link></li>
            <li className='nav-item'>
            <Link
              to='/#about'
              spy={true}
              smooth={true}
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/review'
              spy={true}
              smooth={true}
              scroll={scrollWithOffset}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;