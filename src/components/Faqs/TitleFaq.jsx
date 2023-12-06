import React from 'react'
import faq from "../../assets/images/mark/mark-inner-page.png"
const TitleFaq = () => {
  return (
    <section class="flat-title-page inner">
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div class="page-title-heading">   
                    <div class="heading-inner">
                        <div class="heading"><span>Faqs</span> </div>
                        <div class="title-inner link-style-7">
                            <h5 class="font-2"><a class="home" href="index.html">Home</a><span>Faqs</span></h5>
                        </div>
                    </div>                     
                </div>                        
            </div>
            <div class="col-md-7">
                   <div class="images">
                        <img class="img-item animate-new" src={faq} alt=""/>
                   </div>                   
            </div>
        </div>
    </div>                    
</section> 
  )
}

export default TitleFaq
