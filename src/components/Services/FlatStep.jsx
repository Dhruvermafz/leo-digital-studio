import React from 'react'
import step from "../../assets/images/img-box/step-2.png"
const FlatStep = () => {
  return (
    <section class="tf-section flat-step page">
    <div class="container">
        <div class="row">                      
            <div class="col-xl-8 col-lg-8 col-md-12">
                <div class="wrap-step flex">
                    <div class="box-step box-1">
                        <div class="heading-section style4">
                            <h6 class="">Working Process</h6>
                            <h2>Foundations of SEO to Complate Our Business Missions</h2>   
                        </div> 
                        <div class="step step-1">
                            <div class="number one text-color-1"> 01 </div>
                            <div class="title title-30 fw-7 link-style-">
                                <a href="#"> Benefited For Digital Marketing Solution</a>
                            </div>
                        </div>
                    </div>
                    <div class="box-step box-2"> 
                        <div class="step step-2">
                            <div class="number two"> 02 </div>
                            <div class="title title-30 fw-7 link-style-">
                                <a href="#">Content and Email Marketing Solutions</a> 
                            </div>
                        </div>
                        <div class="step step-3"> 
                            <div class="number three text-color-1"> 03 </div>
                            <div class="title title-30 fw-7 link-style-">
                                <a href="#">UI/UI Design & Web Development</a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-12">
                <div class="box-images">
                    <div class="images">
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
