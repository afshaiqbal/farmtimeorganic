import React from "react";
// import Categories from "../Category";
import AboutUs from "../AboutUs";
import Products from "../Products";
import FollowUs from "../FollowUs";
// import Testimonials from "../Testimonials";
import ReviewCarousel from "../Reviews";
import Carousel from "../Carousel";


const Dashboard = () => {
  return (
    <>
      <Carousel/>
      <Products/>
      <AboutUs />
      <FollowUs/>
      <ReviewCarousel/>
      {/* <Testimonials/> */}
    </>
  );
};

export default Dashboard;
