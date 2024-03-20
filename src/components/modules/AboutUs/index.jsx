import React from "react";
import { Container } from "reactstrap";
import about from "../../../images/about.jpeg";
import Fade from "react-reveal/Fade";
import "./index.scss";
const AboutUs = () => {
  return (
    <div className='aboutUs' id='about'>
      <Container>
        <div className='aboutUsSection'>
          <div className='title'>
            <h1 title="About Us">
            About Us
            </h1>
          </div>
          <div className='subtitle'>
            <Fade bottom>
              <p>
              We at Farmtime Organic Pvt ltd are procuring our raw materials ( Makhana & Popcorn) directly from local farmers. Our product consists of Makhana (Fox Nuts) & Popcorn (Maize). By adding our secret recipes and ingredients we are trying to merge the world of healthy snacking and tasty snacking so that you can enjoy everything guilt free without having adverse affect on your health.
              </p>
            </Fade>
            <Fade bottom>
              <p>
              Our aim is to develop a healthy conscious snacking habit as 90% of India is nutrition deficit and this is mostly due to our unhealthy eating habits.
              </p>
            </Fade>
            <Fade bottom>
              <p>
              The snacks available in the market are generally fried in palm oil which is a major factor for cholestrols in people, the number of people dying due to heart attack has increased by 12% and its expected to grow more due to the amount of unhealthy eating habits we are exposed to. Term organic in our name is an indication of how we are trying to keep our products free from any additives or preservatives also our raw materials are sourced from farmers who uses a more sustainable method to help the ecosystem in return.
              </p>
            </Fade>
            <Fade bottom>
              <p>
              Our products are high in fiber , rich in calcium and various other vitamins and minerals, so that snacking just doesn't remain binging its about putting the right things inside your system and it gets better when healthy food can taste amazing and unique.
              </p>
            </Fade>
            {/* <Fade bottom>
              <ul>
                <li className="achievements">40+ SKU&#39;s being offered</li>
                <li className="achievements">100+ channel partner associations</li>
                <li className="achievements">Serving over 1400+ HORECA partners</li>
                <li className="achievements">Presence in 5+ states</li>
              </ul>
            </Fade>
            <Fade bottom>
              <p>
                Join us in reshaping the food service industry and creating a
                brighter future.
              </p>
            </Fade> */}
          </div>
        </div>
        <Fade bottom>
          <div className='imgGroup'>
            <img src ={about} alt="About Us"/>
          </div>
        </Fade>
      </Container>
    </div>
  );
};

export default AboutUs;
