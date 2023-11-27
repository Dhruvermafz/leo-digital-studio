import React from "react";
import Header from "../components/home/Header";
import Preloader from "../components/home/Preloader";
const Home = () => {
  return (
    <>
      <body className="body header-fixed counter-scroll">
        <Preloader />
        <div id="wrapper" className="wrapper-home2">
          <div id="page" className="clearfix">
            <Header />
          </div>
        </div>
      </body>
    </>
  );
};

export default Home;
