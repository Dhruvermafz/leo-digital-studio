import React from 'react'
import team1 from "../../assets/images/team/Abhishek.jpg" 
import team2 from "../../assets/images/team/Dhruv.jpg"
import team3 from "../../assets/images/team/Jaideep.jpg"
import team4 from "../../assets/images/team/Jatin .jpg"
const TeamSection = () => {
  return (
    <section className="tf-section flat-team page">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="heading-section style4 center">
                    <h6 className="">Team Member</h6>
                    <h2>We Have an Experience Team Member! Meet With Us</h2>   
                </div> 
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="box-team hover-img">
                    <div className="images flex-center img-style">
                        <img src={team1} alt=""/>

                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="/about">Abhishek Rathor</a> </h5> 
                        <div className="sub-title title-16 fw-6">CEO & Founder</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="box-team hover-img">
                    <div className="images flex-center img-style">
                        <img src={team2} alt=""/>
                       
                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="/about">Dhruv Verma</a> </h5> 
                        <div className="sub-title title-16 fw-6">Web Developer</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="box-team hover-img">
                    <div className="images flex-center img-style">
                        <img src={team4} alt=""/>
                        
                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="/about">Jatin Wadhwa</a> </h5> 
                        <div className="sub-title title-16 fw-6">Designer</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="box-team hover-img">
                    <div className="images flex-center img-style">
                        <img src={team3} alt=""/>
                        
                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="/about">Jaideep Sanghwan</a> </h5> 
                        <div className="sub-title title-16 fw-6">Social Media Manager</div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>
  )
}

export default TeamSection
