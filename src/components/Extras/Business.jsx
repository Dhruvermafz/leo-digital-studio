import React from 'react'
import bussiness from "../../assets/images/img-box/business.jpg" 
const Business = () => {
  return (
    <section className="tf-section flat-business">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5">
                <div className="box-images">
                  <div className="images">
                    <img src={bussiness} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-7">
                <div className="business-box">
                  <div className="heading-section style4">
                    <h6 className="">Business Analysis</h6>
                    <h2>Build Your Business Grateful & Successful Together</h2>
                  </div>
                  <p className="tp-16">
                    Sit amet consectetur adipiscing elit. Ornare molestie
                    ultrices accumsan nunc. Dolor feugiat etiam egestas
                    volutpat, tempus maecenas quam sagittis. Tortor ut dictumst
                    sit euismod quis fringilla. Laoreet tempor morbi adipiscing
                    Orci, quisque vitae nisl, sed sit nec feugiat amet. In
                    feugiat
                  </p>
                  <div className="meta">
                    <a
                      href="service-details.html"
                      className="btn-button flex-three fw-5"
                      ><span>Learn More</span>
                      <svg
                        width="31"
                        height="9"
                        viewBox="0 0 31 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.3536 4.85355C30.5488 4.65829 30.5488 4.34171 30.3536 4.14645L27.1716 0.964466C26.9763 0.769204 26.6597 0.769204 26.4645 0.964466C26.2692 1.15973 26.2692 1.47631 26.4645 1.67157L29.2929 4.5L26.4645 7.32843C26.2692 7.52369 26.2692 7.84027 26.4645 8.03553C26.6597 8.2308 26.9763 8.2308 27.1716 8.03553L30.3536 4.85355ZM0 5H30V4H0V5Z"
                          fill="#120A21"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Business
