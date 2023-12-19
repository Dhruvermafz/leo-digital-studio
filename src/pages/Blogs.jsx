import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import TitleBlog from '../components/Blogs/TitleBlog'
import FlatBlog from '../components/Blogs/FlatBlog'
const Blogs = () => {
  return (
    <body className="body header-fixed counter-scroll">
    <div id="wrapper">
      <div id="page" className="clearfix">
        <Navbar />
       <TitleBlog/>
       <FlatBlog/>
        <Footer />
      </div>
    </div>

    <a id="scroll-top" className="button-go"></a>
  </body>
  )
}

export default Blogs
