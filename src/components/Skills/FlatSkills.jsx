import React, { useEffect } from 'react';
import about3 from "../../assets/images/img-box/about-3.png";
import "../../styles/scss/component/_section.scss";
import "./flatSkills.css";

const FlatSkills = () => {
  useEffect(() => {
    const updateProgressBars = () => {
      const progressBars = document.querySelectorAll('.progress-bar');

      progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-percentage');
        bar.querySelector('.percent').innerText = percentage;
        bar.querySelector('.progress-content').style.width = percentage;
      });
    };

    updateProgressBars();
  }, []);

  return (
    <section className="flat-skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7">
            <div className="wrap-skill">
              <div className="heading-section style3">
                <h6 className="">Our Best Skills</h6>
                <h2>We’re So Much Experience In Digital Solutions</h2>
              </div>
              <div className="wrap-progress">
                <div className="content-progress-box">
                  <div className="progress-bar" data-percentage="89%">
                    <h4 className="progress-title-holder">
                      <span className="progress-title">Research</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent">89%</span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content style-1"></div>
                    </div>
                  </div>
                  <div className="progress-bar" data-percentage="93%">
                    <h4 className="progress-title-holder">
                      <span className="progress-title">Development</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent">93%</span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content style-1"></div>
                    </div>
                  </div>
                  <div className="progress-bar" data-percentage="78%">
                    <h4 className="progress-title-holder">
                      <span className="progress-title">SEO Optimization</span>
                      <span className="progress-number-wrapper">
                        <span className="progress-number-mark">
                          <span className="percent">78%</span>
                        </span>
                      </span>
                    </h4>
                    <div className="progress-content-outter">
                      <div className="progress-content style-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="box-images">
              <div className="images">
                <img src={about3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlatSkills;
