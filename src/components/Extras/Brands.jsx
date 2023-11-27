import React from 'react'
import slider from "../../assets/images/img-box/partners-1.png"
import slider2 from "../../assets/images/img-box/brand-2.png"
import slider3 from "../../assets/images/img-box/brand-3.png"
import slider4 from "../../assets/images/img-box/brand-4.png"
import slider5 from "../../assets/images/img-box/brand-5.png"
const Brands = () => {
  return (
    <section class="flat-brand" data-aos="zoom-in" data-aos-duration="1200">
    <div class="container-fuild">
      <div class="row">
        <div class="col-lg-12">
          <div class="swiper-container carousel-5">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="slogan-logo">
                  <a href="#">
                    <img
                      src={slider}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slogan-logo">
                  <a href="#">
                    <img
                      src={slider2}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slogan-logo">
                  <a href="#">
                    <img
                      src={slider3}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slogan-logo">
                  <a href="#">
                    <img
                      src={slider4}
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slogan-logo">
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
