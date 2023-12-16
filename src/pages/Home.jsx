import React from "react";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Extras/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsBlogs from "../components/Blogs/News&Blogs";
import Faq from "../components/Extras/Faq";
import Brands from "../components/Extras/Brands";
import Slider from "../components/Extras/Slider";
import About from "../components/About/About";
import Counter from "../components/Extras/Counter";
import SectionService from "../components/Services/SectionService";
import FlatHelp from "../components/Home/FlatHelp";
import Analytics from "../components/Extras/Analytics";
import Partners from "../components/Partners/Partners";
import Projects from "../components/Projects/Projects";
import FlatIcons from "../components/Extras/FlatIcons";
import ServiceFlat from "../components/Services/ServiceFlat";
import FlatProcess from "../components/Extras/FlatProcess";
import FlatGrowing from "../components/Extras/FlatGrowing";
const Home = () => {
  return (
    <>
      <body className="body header-fixed counter-scroll">
        <div id="wrapper">
          <div id="page" className="clearfix">
            <Navbar />
            <Slider />
            <FlatIcons/>
            <ServiceFlat/>
            <FlatProcess/>
            <FlatGrowing/>
            <Projects/>
            <Partners/>
            <Analytics/>
            <Testimonials />
            <NewsBlogs />
            <FlatHelp/>
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
    </>
  );
};

export default Home;
