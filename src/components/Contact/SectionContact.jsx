import React, { useState } from 'react';

const SectionContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your form submission logic here
        console.log(formData);
    };

    return (
        <section className="flat-contact page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrap-contact">
                            <div id="comments" className="comments">
                                <div id="respond" className="respond-comment">
                                    <div className="heading-section center">
                                        <h6 className="">Get In Touch</h6>
                                        <h2 className="text-unset">Have Any Question On Mind! Send Us Message</h2>
                                    </div>
                                    <form onSubmit={handleSubmit} method="post" id="contactform" className="comment-form form-submit"
                                        action="./contact/contact-process.php" acceptCharset="utf-8"
                                        noValidate="novalidate">
                                        <div className="text-wrap clearfix flex">
                                            <fieldset className="text-box name-wrap">
                                                <input type="text" id="name" className="tb-my-input" name="name"
                                                    tabIndex="1" placeholder="Full Name" value={formData.name} size="32"
                                                    ariaRequired="true" required="" onChange={handleChange} />
                                            </fieldset>
                                            <fieldset className="text-box phone-wrap ">
                                                <input type="tel" id="tel" className="tb-my-input" name="phone"
                                                    tabIndex="1" placeholder="Phone Number" value={formData.phone} size="32"
                                                    ariaRequired="true" required="" pattern="^[\d\+\s\(\)]{7,20}$" onChange={handleChange} />
                                            </fieldset>
                                            <fieldset className="text-box email-wrap">
                                                <input type="email" id="email" className="tb-my-input" name="email"
                                                    tabIndex="2" placeholder="Email Address" value={formData.email} size="32"
                                                    ariaRequired="true" required="" onChange={handleChange} />
                                            </fieldset>
                                        </div>
                                        <fieldset className="message-wrap">
                                            <textarea id="comment-message" name="message" rows="4" tabIndex="5"
                                                placeholder="Write Message"
                                                ariaRequired="true" value={formData.message} onChange={handleChange}></textarea>
                                        </fieldset>
                                        <div className="button-box center">
                                            <button id="submit" name="submit" type="submit" className="cta btn-5">
                                                <span>Send Us Message</span>
                                                <span>
                                                    <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                        {/* ... (your existing SVG path data) */}
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionContact;
