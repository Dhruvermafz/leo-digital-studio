import React from "react";
import Navbar from "../components/Home/Navbar";
import Preloader from "../components/Home/Preloader";
import Footer from "../components/Home/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsBlogs from "../components/Blogs/News&Blogs";
import Faq from "../components/Extras/Faq";
import Brands from "../components/Extras/Brands";
import Slider from "../components/Extras/Slider";
import About from "../components/About/About";
const Home = () => {
  return (
    <>
      <body className="body header-fixed counter-scroll">
        <div id="wrapper" className="wrapper-home2">
          <div id="page" className="clearfix">
            <Navbar />
            <Slider />
            <About />
            <Brands />
            <Faq />
            <Testimonials />
            <NewsBlogs />
            <Footer />
          </div>
        </div>

        <a id="scroll-top" class="button-go"></a>
      </body>
    </>
  );
};

export default Home;
