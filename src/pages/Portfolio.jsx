import React from 'react'
import TitlePortfolio from '../components/Portfolio/TitlePortfolio'
import LatestWorks from '../components/Portfolio/LatestWorks'
import Navbar from '../components/Navbar/Navbar'
import Help from '../components/Help/Help'
import Footer from '../components/Extras/Footer'
const Portfolio = () => {
  return (
    <body className="body header-fixed counter-scroll">
    <div id="wrapper">
      <div id="page" className="clearfix">
        <Navbar />
        <TitlePortfolio/>
        <LatestWorks/>
        <Help/>
        <Footer />
      </div>
    </div>

    <a id="scroll-top" className="button-go"></a>
  </body>
  )
}

export default Portfolio
