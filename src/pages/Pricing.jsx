import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import TitlePricing from '../components/Pricing/TitlePricing'
import Help from '../components/Help/Help'
import SectionPricing from '../components/Pricing/SectionPricing'
const Pricing = () => {
  return (
    <body className="body header-fixed counter-scroll">
    <div id="wrapper">
      <div id="page" className="clearfix">
        <Navbar />
       <TitlePricing/>
       <SectionPricing/>
       <Help/>
        <Footer />
      </div>
    </div>

    <a id="scroll-top" className="button-go"></a>
  </body>
  )
}

export default Pricing
