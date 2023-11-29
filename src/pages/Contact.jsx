import React from 'react'
import ContactTitle from '../components/Contact/ContactTitle'
import FlatContact from '../components/Contact/FlatContact'
import Map from '../components/Contact/map'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
const Contact = () => {
  return (
    <body className="body header-fixed counter-scroll">
        <div id="wrapper" className="wrapper-home2">
          <div id="page" className="clearfix">
            <Navbar />
            <ContactTitle/>
            <FlatContact/>
            <Map/>
            <Footer />
          </div>
        </div>

        <a id="scroll-top" className="button-go"></a>
      </body>
  )
}

export default Contact
