import React from 'react'
import about3 from "../../assets/images/img-box/about-3.png" 
const FlatSkills = () => {
  return (
    <section class="flat-skills">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-7">
          <div class="wrap-skill">
            <div class="heading-section style3">
              <h6 class="">Our Best Skills</h6>
              <h2>We’re So Much Experience In Digital Solutions</h2>
            </div>
            <div class="wrap-progress">
              <div class="content-progress-box">
                <div class="progress-bar" data-percentage="89%">
                  <h4 class="progress-title-holder">
                    <span class="progress-title">Research</span>
                    <span class="progress-number-wrapper">
                      <span class="progress-number-mark">
                        <span class="percent"></span>
                      </span>
                    </span>
                  </h4>
                  <div class="progress-content-outter">
                    <div class="progress-content style-1"></div>
                  </div>
                </div>
                <div class="progress-bar" data-percentage="93%">
                  <h4 class="progress-title-holder">
                    <span class="progress-title">Development</span>
                    <span class="progress-number-wrapper">
                      <span class="progress-number-mark">
                        <span class="percent"></span>
                      </span>
                    </span>
                  </h4>
                  <div class="progress-content-outter">
                    <div class="progress-content style-1"></div>
                  </div>
                </div>
                <div class="progress-bar" data-percentage="78%">
                  <h4 class="progress-title-holder">
                    <span class="progress-title">SEO Optimization</span>
                    <span class="progress-number-wrapper">
                      <span class="progress-number-mark">
                        <span class="percent"></span>
                      </span>
                    </span>
                  </h4>
                  <div class="progress-content-outter">
                    <div class="progress-content style-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-5">
          <div class="box-images">
            <div class="images">
              <img src={about3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FlatSkills
