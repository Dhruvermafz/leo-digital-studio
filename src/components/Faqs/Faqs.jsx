import React, { useState } from 'react';
import { faqData } from './faqData';
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="tf-section flat-faq page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading-section center">
              <h6 className="">Asked Questions</h6>
              <h2 className="text-unset">Have Any Question On Minds! Frequently Asked Question</h2>
            </div>
          </div>

          <div className="col-lg-12">
            <div className='wrap-faq'>
              <div className="flat-accordion fl-faq-content">
                {faqData.map((faq, index) => (
                  <div className="flat-toggle flex" key={index}>
                    <h4 className={`toggle-title ${activeIndex === index ? 'active' : ''}`} onClick={() => handleToggle(index)}>
                      {`${index + 1}. ${faq.question}`}
                      <div className="btn-toggle"></div>
                    </h4>
                    <div className={`toggle-content section-desc ${activeIndex === index ? 'show' : ''}`}>
                      <p className="texts p-18">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
