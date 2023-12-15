import React from 'react'
import faqs from "../../assets/images/img-box/faq-1.jpg" 
const Faqs = () => {
  return (
    <section className="tf-section flat-faq page">
    <div className="container">
        <div className="row">                      
            <div className="col-lg-12">
                <div className="heading-section center">
                    <h6 className="">Asked Questions</h6>
                    <h2 className="text-unset">Have Any Question On Minds! Frequently Asked Question</h2>                                                  
                </div> 
            </div>

            <div className="col-lg-12">
                <div className="wrap-faq">
                    <div className="flat-accordion fl-faq-content">                          
                        <div className="flat-toggle flex activ">
                            <div className="toggle-title active">01.Ultimate Free Solo Blog Setup  Gatsby
                                Things Known Earlier Career ?<div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                                <img src={faqs} alt=""/>
                            </div>
                        </div>
                        <div className="flat-toggle flex">
                            <div className="toggle-title">02.Rethinking Server-Timing Monitoring Tool? <div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                            </div>
                        </div>
                        <div className="flat-toggle flex">
                            <div className="toggle-title">03.Focus On What Matters Must What Doesn’t? <div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                            </div>
                        </div>
                        <div className="flat-toggle flex">
                            <div className="toggle-title">04.Resilience, Flexibility And Headless Systems? <div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                            </div>
                        </div>
                        <div className="flat-toggle flex">
                            <div className="toggle-title">02.Rethinking Server-Timing Monitoring Tool? <div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                            </div>
                        </div>
                        <div className="flat-toggle flex">
                            <div className="toggle-title">03.Focus On What Matters Must What Doesn’t? <div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
                            </div>
                        </div>
                        <div className="flat-toggle flex">
                            <div className="toggle-title">04.Resilience, Flexibility And Headless Systems? <div className="btn-toggle"></div> </div>
                            <div className="toggle-content section-desc">
                                <p className="texts p-18">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae</p>
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

export default Faqs
