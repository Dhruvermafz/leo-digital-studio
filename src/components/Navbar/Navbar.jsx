import React from "react";
import logo from "../../assets/images/logo/logo.png";
import close from "../../assets/images/icon/close.png"
import news3 from "../../assets/images/blog/news-3.jpg"
import news from "../../assets/images/blog/news-2.jpg"
import news4 from "../../assets/images/blog/news-4.jpg"
import news2 from "../../assets/images/blog/news-1.jpg"
import "../../styles/scss/component/_header.scss";
import "../../styles/scss/component/_slider.scss"
const Navbar = () => {
  return (
    <header id="header_main" className="header_1 js-header home">
    <div className="container-fuild">
      <div className="row">
        <div className="col-md-12">
          <div id="site-header-wrap" className="header-home">
            <div className="wrap-box relative">
              <div id="site-logo" className="clearfix">
                <div id="site-logo-inner">
                  <a href="index.html" rel="home" className="main-logo">
                    <img
                      id="logo_header"
                      src={logo}
                      alt="img"
                      width="195"
                      height="50"
                    />
                  </a>
                </div>
              </div>
              <div className="mobile-button"><span></span></div>
              {/* <!-- /.mobile-button --> */}
              {/* <!-- <div className="wrap-nav"> --> */}
              <div id="site-header-inner">
                <div className="wrap-inner clearfix flex">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li
                        className="menu-item current-menu-item"
                      >
                        <a href="/">Home</a>
                        
                      </li>

                      {/* <li className="menu-item menu-item-has-children">
                        <a href="#"> Pages </a>
                        <ul className="sub-menu">
                        
                          
                          <li className="menu-item">
                            <a href="/pricing">Pricing</a>
                          </li>
                          <li className="menu-item">
                            <a href="/faq">Our Faq</a>
                          </li>                                               
                        </ul>
                      </li> */}
                      <li className="menu-item ">
                        <a href="/about"> About </a>
                        
                      </li>

                      <li className="menu-item ">
                        <a href="/services"> Services </a>
                        
                      </li>

                      <li className="menu-item ">
                        <a href="/portfolio">Portfolio </a>
                        
                      </li>

                      <li className="menu-item ">
                        <a href="/blogs">Blog</a>
                       
                      </li>

                      <li className="menu-item">
                        <a href="/contact">Contact </a>
                      </li>
                      <li className="menu-item ">
                        <a href="/portfolio"> Portfolio </a>
                        
                      </li>
                    </ul>
                  </nav>
                  {/* <!-- /#main-nav --> */}

                  <div
                    className="header-search flat-show-search shadows"
                    id="s1"
                  >
                    <a href="#" className="show-search header-search-trigger">
                      <span className="icon-Vector"
                        ><i className="far fa-search"></i
                      ></span>
                    </a>

                    <div className="top-search">
                      <form
                        action="#"
                        method="get"
                        role="search"
                        className="search-form"
                      >
                        <input
                          type="search"
                          id="s"
                          className="search-field"
                          placeholder="Search..."
                          value=""
                          name="s"
                          title="Search for"
                          required=""
                        />
                        <button
                          className="search search-submit"
                          type="submit"
                          title="Search"
                        >
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- </div> --> */}
              <div className="flat-button-top flex-three">
                <a href="#" className="menu-bar-right header-menu">
                  <svg
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.7904 16.4166V25.1666V16.4166ZM16.4154 20.7916H25.1654H16.4154ZM4.7487 10.5833H7.66536C8.43891 10.5833 9.18078 10.276 9.72776 9.72904C10.2747 9.18206 10.582 8.44019 10.582 7.66665V4.74998C10.582 3.97643 10.2747 3.23457 9.72776 2.68758C9.18078 2.1406 8.43891 1.83331 7.66536 1.83331H4.7487C3.97515 1.83331 3.23328 2.1406 2.6863 2.68758C2.13932 3.23457 1.83203 3.97643 1.83203 4.74998V7.66665C1.83203 8.44019 2.13932 9.18206 2.6863 9.72904C3.23328 10.276 3.97515 10.5833 4.7487 10.5833ZM19.332 10.5833H22.2487C23.0222 10.5833 23.7641 10.276 24.3111 9.72904C24.8581 9.18206 25.1654 8.44019 25.1654 7.66665V4.74998C25.1654 3.97643 24.8581 3.23457 24.3111 2.68758C23.7641 2.1406 23.0222 1.83331 22.2487 1.83331H19.332C18.5585 1.83331 17.8166 2.1406 17.2696 2.68758C16.7227 3.23457 16.4154 3.97643 16.4154 4.74998V7.66665C16.4154 8.44019 16.7227 9.18206 17.2696 9.72904C17.8166 10.276 18.5585 10.5833 19.332 10.5833ZM4.7487 25.1666H7.66536C8.43891 25.1666 9.18078 24.8594 9.72776 24.3124C10.2747 23.7654 10.582 23.0235 10.582 22.25V19.3333C10.582 18.5598 10.2747 17.8179 9.72776 17.2709C9.18078 16.7239 8.43891 16.4166 7.66536 16.4166H4.7487C3.97515 16.4166 3.23328 16.7239 2.6863 17.2709C2.13932 17.8179 1.83203 18.5598 1.83203 19.3333V22.25C1.83203 23.0235 2.13932 23.7654 2.6863 24.3124C3.23328 24.8594 3.97515 25.1666 4.7487 25.1666Z"
                      stroke="#120A21"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="sc-btn-top" id="site-header">
                  <a className="cta btn-2" href="contact.html">
                    <span>Get Started</span>
                    <span>
                      <svg
                        width="66px"
                        height="43px"
                        viewBox="0 0 66 43"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
              
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <path
                            className="one"
                            d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                          ></path>
                          <path
                            className="two"
                            d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z"
                            fill="#FFFFFF"
                          ></path>
                          <path
                            className="three"
                            d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z"
                            fill="#FFFFFF"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="sidebar" className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay"></div>
      <div className="inner-sidebar side-menu__block-inner fl-st-1">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn"
            ><img src={close} alt="images"
          /></a>
        </div>
        <aside className="side-bar">
          <div className="inner-side-bar">
            <div className="widget widget-search search">
              <h3 className="widget-title title-search">Search</h3>
              <div className="search-flat">
                <form
                  action="#"
                  method="get"
                  role="search"
                  className="search-form"
                >
                  <input
                    type="search"
                    className="search-field"
                    placeholder="Search here"
                    value=""
                    name="s"
                    title="Search for"
                    required=""
                  />
                  <button
                    className="search-icon search-submit"
                    type="submit"
                    title="Search"
                  ></button>
                </form>
              </div>
            </div>

            <div className="widget widget-categories style">
              <h3 className="widget-title title-list">Category</h3>
              <ul>
                <li>
                  <h6><a href="/blog">Digital Marketing</a></h6>
                </li>
                <li className="active">
                  <h6><a href="/blog">SEO Optimization</a></h6>
                </li>
                <li>
                  <h6><a href="/blog">Email Marketing</a></h6>
                </li>
                <li>
                  <h6><a href="/blog">Content Writing</a></h6>
                </li>
                <li>
                  <h6><a href="/blog">UI/UX Strategy</a></h6>
                </li>
                <li>
                  <h6><a href="/blog">Web Development</a></h6>
                </li>
              </ul>
            </div>

            <div className="widget widget-menu">
              <h3 className="widget-title title-news">Recent Post</h3>
              <ul className="recent-news">
                <li className="hover-img flex">
                  <div className="thumb img-style">
                    <img
                      className="img"
                      src={news}
                      alt="images"
                    />
                  </div>
                  <div className="content link-style-1">
                    <div className="days p-16">September 25, 2022</div>
                    <h6 className="title">
                      <a href="blog-details.html"
                        >Fluid Sizing Instead Of Media Queries</a
                      >
                    </h6>
                  </div>
                </li>
                <li className="hover-img flex">
                  <div className="thumb img-style">
                    <img
                      className="img"
                      src={news2}
                      alt="images"
                    />
                  </div>
                  <div className="content link-style-1">
                    <div className="days p-16">September 25, 2022</div>
                    <h6 className="title">
                      <a href="/blog-details"
                        >Fluid Sizing Instead Of Media Queries</a
                      >
                    </h6>
                  </div>
                </li>
                <li className="hover-img flex">
                  <div className="thumb img-style">
                    <img
                      className="img"
                      src={news3}
                      alt="images"
                    />
                  </div>
                  <div className="content link-style-1">
                    <div className="days p-16">September 25, 2022</div>
                    <h6 className="title">
                      <a href="/blog-details"
                        >Fluid Sizing Instead Of Media Queries</a
                      >
                    </h6>
                  </div>
                </li>
                <li className="hover-img flex">
                  <div className="thumb img-style">
                    <img
                      className="img"
                      src={news4}
                      alt="images"
                    />
                  </div>
                  <div className="content link-style-1">
                    <div className="days p-16">September 25, 2022</div>
                    <h6 className="title">
                      <a href="/blog-details"
                        >Fluid Sizing Instead Of Media Queries</a
                      >
                    </h6>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
      {/* <!--/inner-sidebar--> */}
    </div>
  </header>
  );
};

export default Navbar;
