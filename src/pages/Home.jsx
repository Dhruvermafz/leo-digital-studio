import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Extras/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import Slider from "../components/Extras/Slider";
import "../scripts/swiper"
import Help from "../components/Help/Help"
import FlatPricing from "../components/Pricing/FlatPricing";
import FlatAbout from "../components/About/FlatAbout";
import Business from "../components/Extras/Business";
import SectionService from "../components/Services/SectionService";
import FlatStep from "../components/Services/FlatStep";
import FlatSkills from "../components/Skills/FlatSkills";
import Count from "../components/Services/Count";
import NewsBlogs from "../components/Blogs/News&Blogs";
import Faqs from "../components/Faqs/Faqs";
import SectionPricing from "../components/Pricing/SectionPricing";

const Home = () => {
  return (

      <body className="body header-fixed counter-scroll">
        <div id="wrapper">
          <div id="page" className="clearfix">
            <Navbar />
            <Slider />
            <Count/>
            <FlatAbout/>
            <SectionService/>
            <Business/>
            <FlatStep/>
            <FlatSkills/>
            <Testimonials />
            <NewsBlogs/>
            <FlatPricing/>
            <Faqs/>
            <Help/>
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
 
  );
};

export default Home;
