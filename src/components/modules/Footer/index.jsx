import React from "react";
import logo from "../../../images/logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
// import { CategoryList } from "../../../data";
import "./index.scss";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='info'>
        <a href='/' className='logo'>
          <img src = {logo} alt='logo' />
        </a>
        <div className='companyInfo subtitle'>
          <p>Manufactured by :</p>
          <p>FARMTIME ORGANIC PVT LTD</p>
          {/* <p>An ISO 9001:2015 Certified Co.</p> */}
          <p>98A, Dilkusha Street</p>
          <p>Kolkata-700017</p>
        </div>
      </div>
      <div className='products'>
        {/* <Link to={`/products?category=All`}> */}
          <div className='title'>Our Categories</div>
        {/* </Link> */}
        <div className='productList'>
        <div className='subtitle'>
            Makhana
            </div>
            <div className='subtitle'>
            Popcorn
            </div>
        </div>
        {/* <div className='productList'>
          {CategoryList.map((item) => {
            return (
              <Link to={`/products?category=${item.name}`}>
                <div className='subtitle'>{item.name}</div>
              </Link>
            );
          })}
        </div> */}
      </div>
      <div className='contact'>
        <div className='title'>Contact Us</div>
        <div className='subtitle'>For any queries mail us at</div>
        <div className='subtitle'>
          <a className='mail' href='mailto:alamsaqlain@hotmail.com'>
            <AiOutlineMail size={30} />
            alamsaqlain@hotmail.com
          </a>
        </div>
        <div className='subtitle'>Call us at</div>
        <div className='title'>
          <a
            className='call'
            href='tel:+918013856518'
            title='CLICK TO DIAL - Mobile Only'
          >
            <BiPhoneCall size={30} className='buzz-out-on-hover wave' />
            +91 8013856518
          </a>
        </div>
        <div className='title'>
          <a
            className='call'
            href='tel:+918017462207'
            title='CLICK TO DIAL - Mobile Only'
          >
            <BiPhoneCall size={30} className='buzz-out-on-hover wave' />
            +91 8017462207
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
