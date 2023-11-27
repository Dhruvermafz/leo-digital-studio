import React from 'react'

const Faq = () => {
  return (
    <section
    class="tf-section flat-faq"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-5">
          <div class="heading-section">
            <h6 class="">Asked Questions</h6>
            <h2 class="text-unset">
              Have Any Question On Minds! Frequently Asked Question
            </h2>
          </div>
        </div>
        <div class="col-xl-6 col-lg-7">
          <div class="box-client">
            <h3>We Have Thousands Of Global Clients</h3>
            <ul class="flex">
              <li class="user">
                <img src="assets/images/img-box/client-1.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-2.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-3.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-4.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-5.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-6.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-7.jpg" alt="" />
              </li>
              <li class="user">
                <img src="assets/images/img-box/client-8.jpg" alt="" />
              </li>
              <li class="user style"><i class="far fa-plus"></i></li>
            </ul>
            {/* <!-- <div class="images"> <img src="assets/images/img-box/process.jpg" alt=""></div>                                 --> */}
          </div>
        </div>
        <div class="col-lg-12">
          <div class="wrap-faq">
            <div class="flat-accordion fl-faq-content">
              <div class="flat-toggle flex activ">
                <div class="toggle-title active">
                  01.Ultimate Free Solo Blog Setup Gatsby?
                  <div class="btn-toggle"></div>
                </div>
                <div class="toggle-content section-desc">
                  <p class="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
                </div>
              </div>
              <div class="flat-toggle flex">
                <div class="toggle-title">
                  02.Rethinking Server-Timing Monitoring Tool?
                  <div class="btn-toggle"></div>
                </div>
                <div class="toggle-content section-desc">
                  <p class="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
                </div>
              </div>
              <div class="flat-toggle flex">
                <div class="toggle-title">
                  03.Focus On What Matters Must What Doesn’t?
                  <div class="btn-toggle"></div>
                </div>
                <div class="toggle-content section-desc">
                  <p class="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
                </div>
              </div>
              <div class="flat-toggle flex">
                <div class="toggle-title">
                  04.Resilience, Flexibility And Headless Systems?
                  <div class="btn-toggle"></div>
                </div>
                <div class="toggle-content section-desc">
                  <p class="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
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

export default Faq
