import React from 'react'
import team1 from "../../assets/images/img-box/team-1.jpg" 
import team2 from "../../assets/images/img-box/team-2.jpg"
import team3 from "../../assets/images/img-box/team-3.jpg"
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
                        <div className="icon-social link-style-6">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>                               
                            <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                        </div> 
                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="team-details.html">David L. Landrum</a> </h5> 
                        <div className="sub-title title-16 fw-6">CEO & Founder</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="box-team hover-img">
                    <div className="images flex-center img-style">
                        <img src={team2} alt=""/>
                        <div className="icon-social link-style-6">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>                               
                            <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                        </div> 
                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="team-details.html">Loren B. Snelson</a> </h5> 
                        <div className="sub-title title-16 fw-6">Web Developer</div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="box-team hover-img">
                    <div className="images flex-center img-style">
                        <img src={team3} alt=""/>
                        <div className="icon-social link-style-6">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>                               
                            <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                        </div> 
                    </div>
                    <div className="content center">                                 
                        <h5 className="link-style-1"><a href="team-details.html">Michael D. Nichols</a> </h5> 
                        <div className="sub-title title-16 fw-6">Web Designer</div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</section>
  )
}

export default TeamSection
