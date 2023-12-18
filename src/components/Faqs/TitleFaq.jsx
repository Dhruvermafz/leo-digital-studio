import React from 'react'
import faq from "../../assets/images/mark/mark-inner-page.jpg"
const TitleFaq = () => {
  return (
    <section className="flat-title-page inner">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                <div className="page-title-heading">   
                    <div className="heading-inner">
                        <div className="heading"><span>Faqs</span> </div>
                        <div className="title-inner link-style-7">
                            <h5 className="font-2"><a className="home" href="index.html">Home</a><span>Faqs</span></h5>
                        </div>
                    </div>                     
                </div>                        
            </div>
            <div className="col-md-7">
                   <div className="images">
                        <img className="img-item animate-new" src={faq} alt=""/>
                   </div>                   
            </div>
        </div>
    </div>                    
</section> 
  )
}

export default TitleFaq
