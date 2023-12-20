import React from 'react'
import process from "../../assets/images/icon/process-1.png"
import process4 from "../../assets/images/img-box/process.jpg"
import process2 from "../../assets/images/icon/process-2.png"
import process3 from "../../assets/images/icon/process-3.png"
import mark from "../../assets/images/mark/mark-process.png"
import client from "../../assets/images/img-box/client-1.jpg" 
import client2 from "../../assets/images/img-box/client-2.jpg"
import client3 from "../../assets/images/img-box/client-3.jpg" 
import client4 from "../../assets/images/img-box/client-1.jpg" 
import client5 from "../../assets/images/img-box/client-5.jpg" 
import client6 from "../../assets/images/img-box/client-6.jpg" 
import client7 from "../../assets/images/img-box/client-7.jpg"
import client8 from "../../assets/images/img-box/client-8.jpg"
const FlatProcess = () => {
  return (
    <section className="flat-process">
    <div className="container-fuild">
      <div className="row">
        <div className="col-lg-12">
          <div className="wrap-process flex">
            <div className="box-process">
              <div className="heading-section2">
                <h6 className="">Working Process</h6>
                <h2 className="">
                  Foundations of SEO to Complate Our Business Missions
                </h2>
              </div>
              <div className="diagram-box flex">
                <div
                  className="diagram one center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="icon">
                    <img src={process} alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-title title-14 fw-5">SETP 01</div>
                    <h6>Perform a Complete SEO and Content Audit</h6>
                    <p className="text-color-7">
                      Sit amet consect adipiscing nec tortor nec aenean
                    </p>
                  </div>
                </div>
                <div
                  className="diagram two center"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <div className="icon">
                    <img src={process2} alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-title title-14 fw-5">SETP 02</div>
                    <h6>Identify Keywords to Optimize</h6>
                    <p className="text-color-7">
                      Sit amet consect adipiscing nec tortor nec aenean
                    </p>
                  </div>
                </div>
                <div
                  className="diagram three center"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="icon">
                    <img src={process3}alt="" />
                  </div>
                  <div className="content">
                    <div className="sub-title title-14 fw-5">SETP 03</div>
                    <h6>Install analytics and Set Key Performance</h6>
                    <p className="text-color-7">
                      Sit amet consect adipiscing nec tortor nec aenean
                    </p>
                  </div>
                </div>
                <div className="mark-diagram absolute">
                  <img src={mark} alt="" />
                </div>
              </div>
            </div>
            <div className="box-client">
              <h6 className="text-color-7 fw-4">Saticfied Clients</h6>
              <h3>We Have Thousands Of Global Clients</h3>
              <ul className="flex">
                <li className="user">
                  <img src={client} alt="" />
                </li>
                <li className="user">
                  <img src={client2} alt="" />
                </li>
                <li className="user">
                  <img src={client3} alt="" />
                </li>
                <li className="user">
                  <img src={client4} alt="" />
                </li>
                <li className="user">
                  <img src={client5} alt="" />
                </li>
                <li className="user">
                  <img src={client6} alt="" />
                </li>
                <li className="user">
                  <img src={client7} alt="" />
                </li>
                <li className="user">
                  <img src={client8} alt="" />
                </li>
                <li className="user style"><i className="far fa-plus"></i></li>
              </ul>
              <div className="images">
                <img src={process4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FlatProcess
