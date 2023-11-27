import React from 'react'
import slider from "../../assets/images/img-box/partners-1.png"
import slider2 from "../../assets/images/img-box/brand-2.png"
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
                      src="assets/images/img-box/brand-3.png"
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slogan-logo">
                  <a href="#">
                    <img
                      src="assets/images/img-box/brand-4.png"
                      alt="images"
                    />
                  </a>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="slogan-logo">
                  <a href="#">
                    <img
                      src="assets/images/img-box/brand-5.png"
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
