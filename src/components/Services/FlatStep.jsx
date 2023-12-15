import React from 'react'
import step from "../../assets/images/img-box/step-2.png"
const FlatStep = () => {
  return (
    <section className="tf-section flat-step page">
    <div className="container">
        <div className="row">                      
            <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="wrap-step flex">
                    <div className="box-step box-1">
                        <div className="heading-section style4">
                            <h6 className="">Working Process</h6>
                            <h2>Foundations of SEO to Complate Our Business Missions</h2>   
                        </div> 
                        <div className="step step-1">
                            <div className="number one text-color-1"> 01 </div>
                            <div className="title title-30 fw-7 link-style-">
                                <a href="#"> Benefited For Digital Marketing Solution</a>
                            </div>
                        </div>
                    </div>
                    <div className="box-step box-2"> 
                        <div className="step step-2">
                            <div className="number two"> 02 </div>
                            <div className="title title-30 fw-7 link-style-">
                                <a href="#">Content and Email Marketing Solutions</a> 
                            </div>
                        </div>
                        <div className="step step-3"> 
                            <div className="number three text-color-1"> 03 </div>
                            <div className="title title-30 fw-7 link-style-">
                                <a href="#">UI/UI Design & Web Development</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="box-images">
                    <div className="images">
                        <img src={step} alt=""/>
                    </div>                          
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default FlatStep
