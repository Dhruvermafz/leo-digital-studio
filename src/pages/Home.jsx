import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Extras/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsBlogs from "../components/Blogs/News&Blogs";
import Slider from "../components/Extras/Slider";
import FlatHelp from "../components/Home/FlatHelp";
import Analytics from "../components/Extras/Analytics";
import Partners from "../components/Partners/Partners";
import Projects from "../components/Projects/Projects";
import FlatIcons from "../components/Extras/FlatIcons";
import ServiceFlat from "../components/Services/ServiceFlat";
import FlatProcess from "../components/Extras/FlatProcess";
import FlatGrowing from "../components/Extras/FlatGrowing";
import "../scripts/swiper"
import Help from "../components/Help/Help"
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
            <Help/>
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
    </>
  );
};

export default Home;
