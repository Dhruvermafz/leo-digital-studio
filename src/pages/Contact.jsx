import React from 'react'
import ContactTitle from '../components/Contact/ContactTitle'
import FlatContact from '../components/Contact/FlatContact'
import Map from '../components/Contact/map'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import SectionContact from '../components/Contact/SectionContact'
import Help from '../components/Help/Help'
import Faqs from '../components/Faqs/Faqs'
const Contact = () => {
  return (
    <body className="body header-fixed counter-scroll">
        <div id="wrapper">
          <div id="page" className="clearfix">
            <Navbar />
            <ContactTitle/>
            <FlatContact/>
            <Map/>
            <SectionContact/>
            <Faqs/>
            
            <Help/>
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
  )
}

export default Contact
