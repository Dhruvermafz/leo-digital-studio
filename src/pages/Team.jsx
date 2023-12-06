import React from 'react'
import TitleTeam from '../components/Team/TitleTeam'
import TeamSection from '../components/Team/TeamSection'
import FlatSkills from '../components/Skills/FlatSkills'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import Help from '../components/Help/Help'
const Team = () => {
  return (
    <body className="body header-fixed counter-scroll">
        <div id="wrapper" className="wrapper-home2">
          <div id="page" className="clearfix">
            <Navbar />
            <TitleTeam/>
            <TeamSection/>
            <FlatSkills/>
            <Help/>       
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
  )
}

export default Team
