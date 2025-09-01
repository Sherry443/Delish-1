import Image from "next/image";

const Contact3 = () => {
    return (
        <div>
<div className="contact-us-section section-padding fix">
        <div className="contact-box-wrapper style1">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"> <Image src="/assets/img/icon/location.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Our Address</h3>
                            <p>Defence Road, Kahna Flyover Near
                            Soneri Bank Lahore</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><Image src="/assets/img/icon/gmail.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">info.delishpakistan@gmail.com</h3>
                            <p>Email us anytime for any kind ofquety.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><Image src="/assets/img/icon/phone.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">+92 333 3637479                            </h3>
                            <h3 className="title">+92 305 8880039                         </h3>
                            <p>24/7 Live Chat and ticketing support.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="contact-box style1">
                            <div className="contact-icon"><Image src="/assets/img/icon/clock.png" alt="img" width={70} height={70}   /></div>
                            <h3 className="title">Opening Hour</h3>
                            <p>Sunday-Fri: 9 AM – 6 PM Saturday: 9 AM – 4 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="contact-form-section section-padding pt-0 fix">
        <div className="contact-form-wrapper style2">
            <div className="container">
                <div className="row gx-60 gy-5">
                    <div className="col-xl-6">
                        <div className="contact-form-thumb">
                        <Image src="/assets/img/contact/contactThumb2_1.png" alt="img" width={933} height={634}   />
                         
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-form style2">
                            <h2>Get in Touch</h2>
                            <form className="row" action="#">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email Address" />
                                </div>
                                <div className="col-md-6">
                                    <input type="number" placeholder="Phone Number" />
                                </div>
                                <div className="col-md-6">
                                    <select name="orderby" className="single-select" aria-label="Shop order">
                                        <option value="subject">Subject</option>
                                        <option value="complain">Complain</option>
                                        <option value="greetings">Greetings</option>
                                        <option value="date">Expire Date</option>
                                        <option value="price">About Price</option>
                                        <option value="order">About order</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea id="message" className="form-control" placeholder="Write your message here..."
                                        rows="5"></textarea>
                                </div>
                                <div className="col-12 form-group">
                                    <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                    <label htmlFor="reviewcheck">Collaboratively formulate principle capital. Progressively
                                        evolve user<span className="checkmark"></span></label>
                                </div>
                                <div className="col-12 form-group mb-0">
                                    <button className="theme-btn w-100">SUBMIT NOW <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        </div>
    );
};

export default Contact3;