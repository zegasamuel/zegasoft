import React from 'react';
import FormOne from '../contact/FormOne';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">About Us</span>
                                <h2 className="title mb--40">We do design, code &amp; digital marketing.</h2>
                                <p>Zegasoft is been exist since 2021 an known as Aplikasikku. Start from May 2023 aplikasikku will be rebranding as Zegasoft. </p>
                                <p>With digital transformation spirit we will boost our customer succed percentage with digitalized product, social media management and creative content.. </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Connect with us now</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;