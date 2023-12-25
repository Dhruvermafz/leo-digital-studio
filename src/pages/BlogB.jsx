import React from 'react'
import BlogTitle from '../components/Blogs/BlogTitle'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import Help from '../components/Help/Help'
import BlogBContent from '../components/Blogs/BlogBContent'
const BlogB = () => {
  return (
    <body className="body header-fixed counter-scroll">
    <div id="wrapper">
      <div id="page" className="clearfix">
        <Navbar />
       <BlogTitle/>
       <BlogBContent/>
      <Help/>
        <Footer />
      </div>
    </div>

    <a id="scroll-top" className="button-go"></a>
  </body>
  )
}

export default BlogB
