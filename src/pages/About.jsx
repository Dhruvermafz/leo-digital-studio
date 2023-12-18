import React from "react";
import Navbar from "../components/Navbar/Navbar";
import TitleAbout from "../components/About/TitleAbout";
import FlatAbout from "../components/About/FlatAbout";
import FlatSkills from "../components/Skills/FlatSkills";
import FlatTeam from "../components/Team/FlatTeam";
import Business from "../components/Extras/Business";
import Footer from "../components/Extras/Footer";
import TeamSection from "../components/Team/TeamSection";
const About = () => {
  return (
    <body className="body header-fixed counter-scroll">
      <div id="wrapper">
        <div id="page" className="clearfix">
          <Navbar />
          <TitleAbout />
          <FlatAbout />
          <FlatSkills />
          <TeamSection/>
          <Business />

          <Footer />
        </div>
      </div>

      <a id="scroll-top" class="button-go"></a>
    </body>
  );
};

export default About;
