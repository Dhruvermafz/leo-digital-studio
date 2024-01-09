import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Extras/Footer";
import "../../styles/adminApp.css";

import TopModal from "./TopModal";
const Landing = () => {
  return (
    <body classNameName="body header-fixed counter-scroll">
      <div id="wrapper">
        <div id="page" classNameName="clearfix">
          {/* <!-- Main Content Wrapper --> */}
          <main className="main-content w-full px-[var(--margin-x)] pb-8">
            <TopModal />
          </main>
          <Footer />
        </div>
      </div>

      <a id="scroll-top" classNameName="button-go"></a>
    </body>
  );
};

export default Landing;
