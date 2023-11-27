import React from "react";
import Header from "../components/home/Header";
import Preloader from "../components/home/Preloader";
import Footer from "../components/home/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import NewsBlogs from "../components/Blogs/News&Blogs";
import Faq from "../components/Extras/Faq";
import Brands from "../components/Extras/Brands";
const Home = () => {
  return (
    <>
      <body className="body header-fixed counter-scroll">
        <Preloader />
        <div id="wrapper" className="wrapper-home2">
          <div id="page" className="clearfix">
            <Header />
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
