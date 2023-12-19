import React from 'react'
import TitleService from '../components/Services/TitleService'
import ServiceFlat from '../components/Services/ServiceFlat'
import Count from '../components/Services/Count'
import FlatStep from '../components/Services/FlatStep'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import Help from '../components/Help/Help'
import WeDo from '../components/Services/WeDo'
import SectionService from '../components/Services/SectionService'
const Services = () => {
  return (
    <body className="body header-fixed counter-scroll">
        <div id="wrapper">
          <div id="page" className="clearfix">
            <Navbar />
            <TitleService/>
            <WeDo/>
            <SectionService/>      
            <Count/>
            <FlatStep/>
            <Help/>
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
  )
}

export default Services
