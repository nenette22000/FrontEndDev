import React from "react";
import Header from "../Components/Header.js";
import HeroSection from "../Components/HeroSection.js";
import Specials from "../Components/Specials.js";
import Testimonials from "../Components/Testimonials.js";
import AboutHome from "../Components/AboutHome.js";
import Footer from "../Components/Footer.js";



const Home = () => {
  return(
    <div>
  <Header />
  <HeroSection />
  <Specials />
  <Testimonials />
  <AboutHome />
  <Footer />
  </div>
  )
}
  export default Home;