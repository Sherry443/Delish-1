import Image from "next/image";

const Contact3 = () => {
    return (
        <div>
            <div className="contact-us-section section-padding fix">
                <div className="contact-box-wrapper style1">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <div className="contact-box style1">
                                    <div className="contact-icon"> 
                                        <Image src="/assets/img/icon/location.png" alt="img" width={70} height={70} />
                                    </div>
                                    <h3 className="title">Our Address</h3>
                                    <p>Defence Road, Kahna Flyover Near Soneri Bank Lahore</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-box style1">
                                    <div className="contact-icon">
                                        <Image src="/assets/img/icon/gmail.png" alt="img" width={70} height={70} />
                                    </div>
                                    <h3 className="title">info.delishpakistan@gmail.com</h3>
                                    <p>Email us anytime for any kind of query.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-box style1">
                                    <div className="contact-icon">
                                        <Image src="/assets/img/icon/phone.png" alt="img" width={70} height={70} />
                                    </div>
                                    <h3 className="title">+92 333 3637479</h3>
                                    <h3 className="title">+92 305 8880039</h3>
                                    <p>24/7 Live Chat and ticketing support.</p>
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
                                    <div className="map-container" style={{ width: '933px', height: '634px', maxWidth: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                                        <iframe 
                                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3401.8!2d74.3068771362305!3d31.3947124481201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIzJzQxLjAiTiA3NMKwMTgnMjQuOCJF!5e0!3m2!1sen!2s!4v1693468945123!5m2!1sen!2s"
                                            width="100%" 
                                            height="100%" 
                                            style={{ border: 0 }}
                                            allowFullScreen="" 
                                            loading="lazy" 
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title="Delish Pakistan Location"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="contact-form style2">
                                    <h2>Get in Touch</h2>
                                    <div className="row">
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
                                            <textarea 
                                                id="message" 
                                                className="form-control" 
                                                placeholder="Write your message here..."
                                                rows="5"
                                            ></textarea>
                                        </div>
                                        <div className="col-12 form-group">
                                            <input id="reviewcheck" name="reviewcheck" type="checkbox" />
                                            <label htmlFor="reviewcheck">
                                                Collaboratively formulate principle capital. Progressively evolve user
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <div className="col-12 form-group mb-0">
                                            <button className="theme-btn w-100">
                                                SUBMIT NOW 
                                                <i className="bi bi-arrow-right bg-transparent text-white"></i>
                                            </button>
                                        </div>
                                    </div>
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