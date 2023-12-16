import React from 'react'
import process from "../../assets/images/icon/process-1.png"
import process2 from "../../assets/images/icon/process-2.png"
import process3 from "../../assets/images/icon/process-3.png"
import mark from "../../assets/images/mark/mark-process.png"
import client from "../../assets/images/img-box/client-1.jpg" 
import client2 from "../../assets/images/img-box/client-2.jpg"
import client3 from "../../assets/images/img-box/client-3.jpg" 
import client4 from "../../assets/images/img-box/client-1.jpg" 
import client5 from "../../assets/images/img-box/client-5.jpg" 
import client6 from "../../assets/images/img-box/client-6.jpg" 
const FlatProcess = () => {
  return (
    <section class="flat-process">
    <div class="container-fuild">
      <div class="row">
        <div class="col-lg-12">
          <div class="wrap-process flex">
            <div class="box-process">
              <div class="heading-section2">
                <h6 class="">Working Process</h6>
                <h2 class="">
                  Foundations of SEO to Complate Our Business Missions
                </h2>
              </div>
              <div class="diagram-box flex">
                <div
                  class="diagram one center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div class="icon">
                    <img src={process} alt="" />
                  </div>
                  <div class="content">
                    <div class="sub-title title-14 fw-5">SETP 01</div>
                    <h6>Perform a Complete SEO and Content Audit</h6>
                    <p class="text-color-7">
                      Sit amet consect adipiscing nec tortor nec aenean
                    </p>
                  </div>
                </div>
                <div
                  class="diagram two center"
                  data-aos="fade-up"
                  data-aos-duration="1400"
                >
                  <div class="icon">
                    <img src={process2} alt="" />
                  </div>
                  <div class="content">
                    <div class="sub-title title-14 fw-5">SETP 02</div>
                    <h6>Identify Keywords to Optimize</h6>
                    <p class="text-color-7">
                      Sit amet consect adipiscing nec tortor nec aenean
                    </p>
                  </div>
                </div>
                <div
                  class="diagram three center"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div class="icon">
                    <img src={process3} alt="" />
                  </div>
                  <div class="content">
                    <div class="sub-title title-14 fw-5">SETP 03</div>
                    <h6>Install analytics and Set Key Performance</h6>
                    <p class="text-color-7">
                      Sit amet consect adipiscing nec tortor nec aenean
                    </p>
                  </div>
                </div>
                <div class="mark-diagram absolute">
                  <img src={mark} alt="" />
                </div>
              </div>
            </div>
            <div class="box-client">
              <h6 class="text-color-7 fw-4">Saticfied Clients</h6>
              <h3>We Have Thousands Of Global Clients</h3>
              <ul class="flex">
                <li class="user">
                  <img src={client} alt="" />
                </li>
                <li class="user">
                  <img src={client2}alt="" />
                </li>
                <li class="user">
                  <img src={client3} alt="" />
                </li>
                <li class="user">
                  <img src={client4} alt="" />
                </li>
                <li class="user">
                  <img src={client5} alt="" />
                </li>
                <li class="user">
                  <img src={client6} alt="" />
                </li>
                
                <li class="user style"><i class="far fa-plus"></i></li>
              </ul>
              <div class="images">
                <img src={process} alt="" />
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
