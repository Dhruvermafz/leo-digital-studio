import React from 'react'
import news from "../../assets/images/mark/mark-7.png"
import news2 from "../../assets/images/mark/mark-8.png"
import news3 from "../../assets/images/mark/mark-9.png"
import news4 from "../../assets/images/mark/mark-10.png"
import blog from "../../assets/images/img-box/blog-4.jpg"
import blog2 from "../../assets/images/img-box/blog-5.jpg"

const SectionNews = () => {
  return (
    <section class="tf-section flat-news2">
    <div class="mark-img">
      <img
        class="mark-1 absolute animate-up"
        src={news}
        alt=""
      />
      <img
        class="mark-2 absolute animate-zoom"
        src={news2}
        alt=""
      />
      <img
        class="mark-3 absolute animate-u p"
        src={news3}
        alt=""
      />
      <img
        class="mark-4 absolute animate-rotat e"
        src={news4}
        alt=""
      />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="heading-section center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h6 class="">News & Blog</h6>
            <h2 class="">Get Every Single Updates Articles</h2>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="swiper-container carousel-7 pagi3">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <div class="box flex">
                  <div class="content po-content-2">
                    <p class="days p-14">September 25, 2022</p>
                    <h4 class="link-style-1 lh-28">
                      <a href="blog-details.html"
                        >How Partytown Eliminates Website Bloat From Third
                        Party Scripts Ways</a
                      >
                    </h4>
                    <div class="meta">
                      <a
                        href="blog-details.html"
                        class="btn-button flex-three fw-5"
                        ><span>Read More </span>
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
                  <div class="images po-content-1">
                    <img src={blog} alt="" />
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div class="box flex">
                  <div class="content po-content-2">
                    <p class="days p-14">September 25, 2022</p>
                    <h4 class="link-style-1 lh-28">
                      <a href="blog-details.html"
                        >Productivity Tips And Tools For More Efficient
                        Workflow Rendering Patterns</a
                      >
                    </h4>
                    <div class="meta">
                      <a
                        href="blog-details.html"
                        class="btn-button flex-three fw-5"
                        ><span>Read More </span>
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
                  <div class="images po-content-1">
                    <img src={blog2} alt="" />
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <div class="box flex">
                  <div class="content po-content-2">
                    <p class="days p-14">September 25, 2022</p>
                    <h4 class="link-style-1 lh-28">
                      <a href="blog-details.html"
                        >How Partytown Eliminates Website Bloat From Third
                        Party Scripts Ways</a
                      >
                    </h4>
                    <div class="meta">
                      <a
                        href="blog-details.html"
                        class="btn-button flex-three fw-5"
                        ><span>Read More </span>
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
                  <div class="images po-content-1">
                    <img src={blog} alt="" />
                  </div>
                </div>
              </div>
              <div
                class="swiper-slide"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div class="box flex">
                  <div class="content po-content-2">
                    <p class="days p-14">September 25, 2022</p>
                    <h4 class="link-style-1 lh-28">
                      <a href="blog-details.html"
                        >Productivity Tips And Tools For More Efficient
                        Workflow Rendering Patterns</a
                      >
                    </h4>
                    <div class="meta">
                      <a
                        href="blog-details.html"
                        class="btn-button flex-three fw-5"
                        ><span>Read More </span>
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
                  <div class="images po-content-1">
                    <img src={blog2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="box-pagi relative center">
              <div class="inner-pagi2">
                <div class="swiper-pagination3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionNews
