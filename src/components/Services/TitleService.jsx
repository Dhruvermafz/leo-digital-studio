import React from 'react'
import mark from "../../assets/images/mark/mark-inner-page.png"
const TitleService = () => {
  return (
   
    <section class="flat-title-page inner">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-7 ">
                    <div class="page-title-heading">   
                        <div class="heading-inner">
                            <div class="heading"><span>Our Services</span> </div>
                            <div class="title-inner link-style-7">
                                <h5 class="font-2"><a class="home" href="index.html">Home</a><span>Popular Services</span></h5>
                            </div>
                        </div>                     
                        
                    </div>                        
                </div>
                <div class="col-xl-7 col-lg-7 col-md-5 ">
                       <div class="images">
                            <img class="img-item animate-new" src={mark} alt=""/>
                       </div>                   
                </div>
            </div>
        </div>                    
    </section>
  )
}

export default TitleService
