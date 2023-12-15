import React from 'react'
import team from "../../assets/images/img-box/team-1.jpg" 
import team2 from "../../assets/images/img-box/team-2.jpg" 
import team3 from "../../assets/images/img-box/team-3.jpg" 
import team4 from "../../assets/images/img-box/team-4.jpg" 
const FlatTeam = () => {
  return (
    <section className="tf-section flat-team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="heading-section style4 center">
            <h6 className="">Team Member</h6>
            <h2>We Have an Experience Team Member! Meet With Us</h2>
          </div>
          <div className="swiper-container carousel-team pagi3">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="box-team hover-img">
                  <div className="images flex-center img-style">
                    <img src={team} alt="" />
                    <div className="icon-social link-style-6">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content center">
                    <h5 className="link-style-1">
                      <a href="team-details.html">David L. Landrum</a>
                    </h5>
                    <div className="sub-title title-16 fw-6">
                      CEO & Founder
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-team hover-img">
                  <div className="images flex-center img-style">
                    <img src={team2} alt="" />
                    <div className="icon-social link-style-6">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content center">
                    <h5 className="link-style-1">
                      <a href="team-details.html">Loren B. Snelson</a>
                    </h5>
                    <div className="sub-title title-16 fw-6">
                      Web Developer
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-team hover-img">
                  <div className="images flex-center img-style">
                    <img src={team3} alt="" />
                    <div className="icon-social link-style-6">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content center">
                    <h5 className="link-style-1">
                      <a href="team-details.html">Michael D. Nichols</a>
                    </h5>
                    <div className="sub-title title-16 fw-6">
                      Web Designer
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-team hover-img">
                  <div className="images flex-center img-style">
                    <img src={team4} alt="" />
                    <div className="icon-social link-style-6">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content center">
                    <h5 className="link-style-1">
                      <a href="team-details.html">Robert M. Chapman</a>
                    </h5>
                    <div className="sub-title title-16 fw-6">
                      SEO Specialist
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-team hover-img">
                  <div className="images flex-center img-style">
                    <img src={team} alt="" />
                    <div className="icon-social link-style-6">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content center">
                    <h5 className="link-style-1">
                      <a href="team-details.html">David L. Landrum</a>
                    </h5>
                    <div className="sub-title title-16 fw-6">
                      CEO & Founder
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="box-team hover-img">
                  <div className="images flex-center img-style">
                    <img src={team2} alt="" />
                    <div className="icon-social link-style-6">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"> <i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content center">
                    <h5 className="link-style-1">
                      <a href="team-details.html">Loren B. Snelson</a>
                    </h5>
                    <div className="sub-title title-16 fw-6">
                      Web Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-pagi relative center">
              <div className="inner-pagi2">
                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FlatTeam
