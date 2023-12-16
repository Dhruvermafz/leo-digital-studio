import React from 'react'
import TitleFaq from '../components/Faqs/TitleFaq'
import Faq from '../components/Extras/Faq'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import FlatContact from '../components/Contact/FlatContact'
import Help from '../components/Help/Help'
const Faqs = () => {
  return (
    <body className="body header-fixed counter-scroll">
        <div id="wrapper">
          <div id="page" className="clearfix">
            <Navbar />
            <TitleFaq/>
            <Faq/>
            <FlatContact/> 
            <Help/>       
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
  )
}

export default Faqs
