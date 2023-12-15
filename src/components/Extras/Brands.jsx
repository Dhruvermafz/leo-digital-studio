import React from 'react'
import slider from "../../assets/images/img-box/partners-1.png"
import slider2 from "../../assets/images/img-box/brand-2.png"
import slider3 from "../../assets/images/img-box/brand-3.png"
import slider4 from "../../assets/images/img-box/brand-4.png"
import slider5 from "../../assets/images/img-box/brand-5.png"
const Brands = () => {
  return (
    <section className="flat-brand" data-aos="zoom-in" data-aos-duration="1200">
    <div className="container-fuild">
      <div className="row">
        <div className="col-lg-12">
          <div className="swiper-container carousel-5">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slogan-logo">
                  <a href="#">
                    <img
                      src={slider}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slogan-logo">
                  <a href="#">
                    <img
                      src={slider2}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slogan-logo">
                  <a href="#">
                    <img
                      src={slider3}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slogan-logo">
                  <a href="#">
                    <img
                      src={slider4}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slogan-logo">
                  <a href="#">
                    <img
                      src={slider5}
                      alt="images"
                    />
                  </a>
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

export default Brands
