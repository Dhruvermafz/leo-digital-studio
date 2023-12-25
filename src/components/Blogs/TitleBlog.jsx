import React from 'react'
import inner from "../../assets/images/mark/mark-inner-page.png"
const TitleBlog = () => {
  return (
    // <!-- title page -->
    <section className="flat-title-page inner">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-7 ">
                    <div className="page-title-heading">   
                        <div className="heading-inner">
                            <div className="heading"><span>Our Blogs</span> </div>
                            <div className="title-inner link-style-7">
                                <h5 className="font-2"><a className="home" href="/">Home</a><span>Blog List</span></h5>
                            </div>
                        </div>                     
                        
                    </div>                        
                </div>
                <div className="col-xl-7 col-lg-7 col-md-5 ">
                       <div className="images">
                            <img className="img-item animate-new" src={inner} alt=""/>
                       </div>                   
                </div>
            </div>
        </div>                    
    </section>
  )
}

export default TitleBlog
