import React from 'react'
import faq from "../../assets/images/img-box/client-2.jpg" 
import faq2 from "../../assets/images/img-box/client-3.jpg" 
import faq3 from "../../assets/images/img-box/client-1.jpg" 
import faq4 from "../../assets/images/img-box/client-4.jpg" 
import faq5 from "../../assets/images/img-box/client-5.jpg"

const Faq = () => {
  return (
    <section
    className="tf-section flat-faq"
    data-aos="fade-up"
    data-aos-duration="1200"
  >
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-5">
          <div className="heading-section">
            <h6 className="">Asked Questions</h6>
            <h2 className="text-unset">
              Have Any Question On Minds! Frequently Asked Question
            </h2>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <div className="box-client">
            <h3>We Have Thousands Of Global Clients</h3>
            <ul className="flex">
              <li className="user">
                <img src={faq3} alt="" />
              </li>
              <li className="user">
                <img src={faq} alt="" />
              </li>
              <li className="user">
                <img src={faq2} alt="" />
              </li>
              <li className="user">
                <img src={faq4} alt="" />
              </li>
              <li className="user">
                <img src={faq5} alt="" />
              </li>
            
              <li className="user style"><i className="far fa-plus"></i></li>
            </ul>
            {/* <!-- <div className="images"> <img src="assets/images/img-box/process.jpg" alt=""></div>                                 --> */}
          </div>
        </div>
        <div className="col-lg-12">
          <div className="wrap-faq">
            <div className="flat-accordion fl-faq-content">
              <div className="flat-toggle flex activ">
                <div className="toggle-title active">
                  01.Ultimate Free Solo Blog Setup Gatsby?
                  <div className="btn-toggle"></div>
                </div>
                <div className="toggle-content section-desc">
                  <p className="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
                </div>
              </div>
              <div className="flat-toggle flex">
                <div className="toggle-title">
                  02.Rethinking Server-Timing Monitoring Tool?
                  <div className="btn-toggle"></div>
                </div>
                <div className="toggle-content section-desc">
                  <p className="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
                </div>
              </div>
              <div className="flat-toggle flex">
                <div className="toggle-title">
                  03.Focus On What Matters Must What Doesn’t?
                  <div className="btn-toggle"></div>
                </div>
                <div className="toggle-content section-desc">
                  <p className="texts p-18">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium totam rem
                    aperiam eaque quae abillo inventore veritatis quasi
                    architecto beatae
                  </p>
                </div>
              </div>
              <div className="flat-toggle flex">
                <div className="toggle-title">
                  04.Resilience, Flexibility And Headless Systems?
                  <div className="btn-toggle"></div>
                </div>
                <div className="toggle-content section-desc">
                  <p className="texts p-18">
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
