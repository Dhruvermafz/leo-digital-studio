import React from 'react'
import blog from"../../assets/images/img-box/blog-1.jpg" 
import blog2 from "../../assets/images/img-box/blog-2.jpg"
import blog3 from "../../assets/images/img-box/blog-3.jpg"
const NewsBlogs = () => {
  return (
   
          <section className="tf-section flat-news"> 
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="heading-section2 center" data-aos="fade-up" data-aos-duration="1200">
                                <h6 className="">News & Blogs</h6>
                                <h2 className="">Get Every Single Updates Articles Recent News & Blogs</h2>             
                            </div>  
                        </div>
                        <div className="col-lg-12">
                            <div className="swiper-container carousel-6">                            
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="box hover-img">
                                            <div className="images img-style">
                                                <a href="/blog_details"><img src={blog} alt=""/></a>
                                            </div>
                                            <div className="content">
                                                <p className="days p-14">September 25, 2022</p>
                                                <h3 className="link-style-4"><a href="blog-details.html">Ultimate Free Solo Blog Setup With Ghost And Gatsby</a></h3>
                                                <div className="meta">
                                                    <a href="blog-details.html" className="btn-button flex-three fw-5"><span>Read More </span> 
                                                    <svg width="31" height="9" viewBox="0 0 31 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z" fill="#120A21"/>
                                                    </svg>  </a>                            
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="box hover-img">
                                            <div className="images img-style">
                                                <a href="/blog_details"><img src={blog2} alt=""/></a>
                                            </div>
                                           <div className="content">
                                                <p className="days p-14">September 25, 2022</p>
                                                <h3 className="link-style-4"><a href="blog-details.html">Rethinking Server-Timing As Seen Critical Monitoring Tool</a> </h3>
                                                <div className="meta">
                                                    <a href="blog-details.html" className="btn-button flex-three fw-5"><span>Read More </span> 
                                                    <svg width="31" height="9" viewBox="0 0 31 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z" fill="#120A21"/>
                                                    </svg>  </a>                            
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide" data-aos="fade-up" data-aos-duration="1400">
                                        <div className="box hover-img">
                                            <div className="images img-style">
                                                <a href="blog-details.html">
                                                    <img src={blog3} alt=""/></a>
                                            </div>
                                           <div className="content">
                                                <p className="days p-14">September 25, 2022</p>
                                                <h3 className="link-style-4"><a href="blog-details.html">Top Tasks Focus On What Matters Must Focus On What Doesn’t</a> </h3>
                                                <div className="meta">
                                                    <a href="/blog_details" className="btn-button flex-three fw-5"><span>Read More </span> 
                                                    <svg width="31" height="9" viewBox="0 0 31 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z" fill="#120A21"/>
                                                    </svg>  </a>                            
                                                </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    
  )
}

export default NewsBlogs
