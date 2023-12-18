import React from 'react'
import title from "../../assets/images/mark/mark-inner-page.jpg"
const TitleAbout = () => {
  return (
    <section className="flat-title-page inner">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="page-title-heading">
                  <div className="heading-inner">
                    <div className="heading"><span>About Us</span></div>
                    <div className="title-inner link-style-7">
                      <h5 className="font-2">
                        <a className="home" href="/">Home</a
                        ><span>About Us</span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="images">
                  <img
                    className="img-item animate-new"
                    src={title}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default TitleAbout
