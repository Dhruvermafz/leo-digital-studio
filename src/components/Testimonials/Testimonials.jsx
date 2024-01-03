import React, { useEffect } from 'react';
import testimonials from "../../assets/images/img-box/testimonials.jpg";
import testimonials2 from "../../assets/images/img-box/testimonials-1.png";
import testimonials3 from "../../assets/images/img-box/testimonials-2.png";
import testimonials4 from "../../assets/images/img-box/testimonials-3.png";
import testimonials5 from "../../assets/images/img-box/testimonials-4.png";
import testimonials6 from "../../assets/images/img-box/testimonials-5.png";
import testimonials7 from "../../assets/images/img-box/testimonials-6.png";
import testimonials8 from "../../assets/images/img-box/testimonials-7.png";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Testimonials = () => {
  useEffect(() => {
    // Initialize Swiper when the component mounts
    const swiper = new Swiper('.carousel-3', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    // Destroy Swiper when the component unmounts
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div>
      <section className="flat-testimonials">
        <div className="container-fuild">
          <div className="row">
            <div className="col-lg-12">
              <div className="wrap-testi flex">
                <div className="box-testi">
                  <div className="heading-section2" data-aos="fade-up" data-aos-duration="1200">
                    <h6 className="">Our Testimonials</h6>
                    <h2 className="">What Our Clients Say About Solutions</h2>
                  </div>
                  <div className="swiper-container carousel-3 pagi2">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="box-inner">
                          <div className="inner inner-bottom">
                            <h6 className="lh-27 fw-5">Leo Digital Studio is an incredible SEO optimization agency. Their expertise and dedication have significantly improved our online presence.</h6>
                            <p className="lh-26">Their team is highly skilled, and their strategies are effective. We've seen a noticeable increase in traffic and rankings since partnering with them.</p>
                          </div>
                          <div className="author-box flex-three">
                            <div className="image">
                              <img src={testimonials} alt="Leo Digital Studio" />
                            </div>
                            <div className="content">
                              <h4 className="fw-5">John Doe</h4>
                              <p className="text-color-7 fw-5">CEO, XYZ Company</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="box-inner">
                          <div className="inner inner-bottom">
                            <h6 className="lh-27 fw-5">Leo Digital Studio is an incredible SEO optimization agency. Their expertise and dedication have significantly improved our online presence.</h6>
                            <p className="lh-26">Their team is highly skilled, and their strategies are effective. We've seen a noticeable increase in traffic and rankings since partnering with them.</p>
                          </div>
                          <div className="author-box flex-three">
                            <div className="image">
                              <img src={testimonials} alt="Leo Digital Studio" />
                            </div>
                            <div className="content">
                              <h4 className="fw-5">John Doe</h4>
                              <p className="text-color-7 fw-5">CEO, XYZ Company</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="box-inner">
                          <div className="inner inner-bottom">
                            <h6 className="lh-27 fw-5">Leo Digital Studio is an incredible SEO optimization agency. Their expertise and dedication have significantly improved our online presence.</h6>
                            <p className="lh-26">Their team is highly skilled, and their strategies are effective. We've seen a noticeable increase in traffic and rankings since partnering with them.</p>
                          </div>
                          <div className="author-box flex-three">
                            <div className="image">
                              <img src={testimonials} alt="Leo Digital Studio" />
                            </div>
                            <div className="content">
                              <h4 className="fw-5">John Doe</h4>
                              <p className="text-color-7 fw-5">CEO, XYZ Company</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="box-inner">
                          <div className="inner inner-bottom">
                            <h6 className="lh-27 fw-5">Leo Digital Studio is an incredible SEO optimization agency. Their expertise and dedication have significantly improved our online presence.</h6>
                            <p className="lh-26">Their team is highly skilled, and their strategies are effective. We've seen a noticeable increase in traffic and rankings since partnering with them.</p>
                          </div>
                          <div className="author-box flex-three">
                            <div className="image">
                              <img src={testimonials} alt="Leo Digital Studio" />
                            </div>
                            <div className="content">
                              <h4 className="fw-5">John Doe</h4>
                              <p className="text-color-7 fw-5">CEO, XYZ Company</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Add more testimonial slides for Leo Digital Studio or other clients if needed */}
                    </div>
                    <div className="swiper-pagination2 center"></div>
                    
                  </div>
                </div>
                <div className="box-images">
                  <div className="inner flex" data-aos="fade-up" data-aos-duration="1200">
                    <div className="images style">
                      <img src={testimonials2} alt="" />
                    </div>
                    <div className="images">
                      <img src={testimonials3} alt="" />
                    </div>
                    <div className="images style">
                      <img src={testimonials4} alt="" />
                    </div>
                  </div>
                  <div className="inner flex" data-aos="fade-up" data-aos-duration="1300">
                    <div className="images style">
                      <img src={testimonials5} alt="" />
                    </div>
                    <div className="images">
                      <img src={testimonials6} alt="" />
                    </div>
                    <div className="images style">
                      <img src={testimonials7} alt="" />
                    </div>
                  </div>
                  <div className="image2" data-aos="zoom-in" data-aos-duration="1400">
                    <img src={testimonials8} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
