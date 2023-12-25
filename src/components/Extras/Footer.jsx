import React from "react";
import footer from "../../assets/images/logo/logo-footer.png";
import "../../styles/scss/component/_footer.scss";
const Footer = () => {
  return (
    <>
      <footer id="footer" className="clearfix home">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="widget widget-logo">
                <div className="flat-box">
                  <div className="logo-footer style" id="logo-footer">
                    <a href="/">
                      <img
                        id="logo_footer"
                        src={footer}
                        alt="img"
                        width="195"
                        height="50"
                      />
                    </a>
                  </div>
                  <p className="sub-widget-logo tp-16">
                    At Leo Digital Studio, we redefine digital marketing as an art form, crafting bespoke strategies that resonate with your brand's uniwue essence. With a commitment to innovation and a relentless pursuit of excellence, we stand as architects of digital success, transforming businesses into online powerhouses.{" "}
                  </p>
                  <div className="icon-social text-color-1">
                    <a href="https://www.facebook.com/LeoDigitalStudio10/" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/Leo_Digital_01" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/leo-digital-studio-65a55921a" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.instagram.com/leo.digitalstudio/" target="_blank" rel="noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=9416511010" target="_blank" rel="noreferrer">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 col-6">
              <div className="widget widget-menu style-2 ">
                <div className="title-widget fw-6">Quick Link</div>
                <ul className="box-menu link-style-1">
                  <li>
                    <a href="/services">Services</a>
                  </li>
                
                 
                  
                  <li>
                    <a href="/portfolio">Our Portfolio</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/team">Team</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-6">
              <div className="widget widget-menu style-3 ">
                <ul className="box-menu link-style-1">
                  <li>
                    <a href="/about"> About Company</a>
                  </li>
                  <li>
                    <a href="/contact">Our Contact</a>
                  </li>
                  <li>
                    <a href="/blog">Blogs</a>
                  </li>
                 
                  <li>
                    <a href="/faq">Faqs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              <div className="widget widget-menu style-4">
                <div className="title-widget fw-6">Supports</div>
                <div className="box-icon flex">
                  <div className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.657 16.657L13.414 20.9C13.2284 21.0857 13.0081 21.233 12.7656 21.3336C12.523 21.4341 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4341 11.2354 21.3336C10.9929 21.233 10.7726 21.0857 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657V16.657Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 11C15 11.7956 14.6839 12.5587 14.1213 13.1213C13.5587 13.6839 12.7956 14 12 14C11.2044 14 10.4413 13.6839 9.87868 13.1213C9.31607 12.5587 9 11.7956 9 11C9 10.2044 9.31607 9.44129 9.87868 8.87868C10.4413 8.31607 11.2044 8 12 8C12.7956 8 13.5587 8.31607 14.1213 8.87868C14.6839 9.44129 15 10.2044 15 11V11Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Location</h6>
                    <p>2058 sector-1 housing board colony near jaat bhawan Rohtak Haryana 124001</p>
                  </div>
                </div>
                <div className="box-icon flex">
                  <div className="icon">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 4L8.89 9.26C9.21866 9.47928 9.6049 9.5963 10 9.5963C10.3951 9.5963 10.7813 9.47928 11.11 9.26L19 4H1ZM3 15H17C17.5304 15 18.0391 14.7893 18.4142 14.4142C18.7893 14.0391 19 13.5304 19 13V3C19 2.46957 18.7893 1.96086 18.4142 1.58579C18.0391 1.21071 17.5304 1 17 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Email Us</h6>
                    <a href="mailto:officialabhi1010@gmail.com">
                      <p>officialabhi1010@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div className="box-icon flex">
                  <div className="icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H6.28C6.48979 1.00016 6.69422 1.0663 6.86436 1.18905C7.03449 1.3118 7.1617 1.48496 7.228 1.684L8.726 6.177C8.8019 6.40534 8.79293 6.65339 8.70072 6.87564C8.60851 7.0979 8.43925 7.27945 8.224 7.387L5.967 8.517C7.07332 10.9655 9.03446 12.9267 11.483 14.033L12.613 11.776C12.7205 11.5607 12.9021 11.3915 13.1244 11.2993C13.3466 11.2071 13.5947 11.1981 13.823 11.274L18.316 12.772C18.5152 12.8383 18.6885 12.9657 18.8112 13.136C18.934 13.3064 19.0001 13.511 19 13.721V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H16C7.716 19 1 12.284 1 4V3Z"
                        stroke="white"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h6>Hotline</h6>
                    <a href="tel:9416511010">
                      <p>Call +9416511010 </p>
                    </a>
                    <a href="tel:9416367707">
                      <p>Call +9416367707</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="widget-social-footer home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="title-bottom tp-16 font-2">
                {" "}
                © 2023{" "}
                <a
                  href="https://leodigitalstudio.in"
                  className="text-color-3" target="_blank" rel="noreferrer"
                >
                  Leo Digital Studio.
                </a>{" "}
                All Rights Reserved.{" "}
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="">
                <ul className="menu-bottom link-style-4 flex font-2">
                  <li>
                    <a href="/about">About</a>{" "}
                  </li>
                  <li>
                    <a href="/services">Services </a>{" "}
                  </li>
                  <li>
                    <a href="/faq">Faqs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
