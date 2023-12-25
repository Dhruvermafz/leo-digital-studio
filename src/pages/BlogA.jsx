import React from 'react'
import BlogTitle from '../components/Blogs/BlogTitle'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Extras/Footer'
import Help from '../components/Help/Help'
import BlogAContent from '../components/Blogs/BlogAContent'
const BlogA = () => {
  return (
    <body className="body header-fixed counter-scroll">
    <div id="wrapper">
      <div id="page" className="clearfix">
        <Navbar />
       <BlogTitle/>
       <BlogAContent/>
      <Help/>
        <Footer />
      </div>
    </div>

    <a id="scroll-top" className="button-go"></a>
  </body>
  )
}

export default BlogA
