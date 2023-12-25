import React, { useState } from 'react';
import faqImage from "../../assets/images/img-box/faq-1.jpg";
import "./faq.css"
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Ultimate Free Solo Blog Setup Gatsby Things Known Earlier Career?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae",
      image: faqImage
    },
    {
      question: "Rethinking Server-Timing Monitoring Tool?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae",
      image: faqImage
    },
    {
      question: "Focus On What Matters Must What Doesn’t?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae",
      image: faqImage
    },
    {
      question: "Resilience, Flexibility And Headless Systems?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae abillo inventore veritatis quasi architecto beatae",
      image: faqImage
    },
  ];

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
            <div className="wrap-faq">
              <div className="flat-accordion fl-faq-content">
                {faqs.map((faq, index) => (
                  <div className={`flat-toggle flex ${activeIndex === index ? 'activ' : ''}`} key={index}>
                    <div className="toggle-title" onClick={() => handleToggle(index)}>
                      {`${index + 1}.${faq.question}`}
                      <div className="btn-toggle"></div>
                    </div>
                    <div className="toggle-content section-desc">
                      <p className="texts p-18">{faq.answer}</p>
                      <img src={faq.image} alt="" />
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
