import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    return (
        <footer className="footer-section bg-title fix">
        <div className="footer-widgets-wrapper">
          
            <div className="container">
                <div className="footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4">
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-geo-alt-fill"></i></div>
                                <div className="item2">
                                    <h6>address</h6>
                                    <p>Defence Road, Kahna Flyover Near
                                    Soneri Bank Lahore </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-envelope-fill"></i></div>
                                <div className="item2">
                                    <h6>send email</h6>
                                    <p>info.delishpakistan@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-telephone-fill"></i></div>
                                <div className="item2">
                                    <h6>call emergency</h6>
                                    <p>+92 333 3637479
                                    </p>
                                    <p>+92 305 8880039
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <Link href="/">
                                    <Image src="/assets/img/logo/Delish.png" alt="img" width={167} height={58}   />
                                </Link>
                            </div>
                            <div className="footer-content">
                                <p>
                                Inspired by rich flavors from around the globe, Delish brings you the perfect sauce for every
                                moment.
                                </p>
                                <div className="social-icon d-flex align-items-center">
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="https://www.instagram.com/delishpakistan.official"><i className="bi bi-instagram"></i></a>
                                    {/* <a href="#"><i className="bi bi-youtube"></i></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Quick Links</h3>
                            </div>
                            <ul className="list-area">
                            <li>
                                    <Link href="/blog-sidebar">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Our Distributors
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about2">
                                    <i className="bi bi-chevron-double-right"></i>
                                        About Us
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/faq">
                                    <i className="bi bi-chevron-double-right"></i>
                                        FAQ’S
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/contact">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Our Menu</h3>
                            </div>
                            <ul className="list-area">
                                <li>
                                    <Link href="/sauces">
                                    <i className="bi bi-chevron-double-right"></i>
                                      Sauces
                                    </Link>
                                </li>
                                <li>
                                <Link href="/ketchup">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Ketchup
                                    </Link>
                                </li>
                                <li>
                                <Link href="/seasonings">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Seasonings
                                    </Link>
                                </li>
                                <li>
                                <Link href="/mayonnaise">
                                    <i className="bi bi-chevron-double-right"></i>
                                        Mayonnaise
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".4s">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <h3>Contact Us</h3>
                            </div>
                            <ul className="list-area">
                                   <p>Email us anytime for any kind of query.</p>
                            </ul>
                            <form className="mt-4">
                                <div className="form-control">
                                    <input className="email" type="email" placeholder="Your email address" /> 
                                    <button type="submit" className="submit-btn"><i className="bi bi-arrow-right"></i></button>
                                </div>
                                {/* <div className="form-control style2 mt-3">
                                    <input id="checkbox" name="checkbox" type="checkbox" />
                                    <label htmlFor="checkbox">I agree to the <a href="#">Privacy Policy.
                                        </a></label>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-wrapper d-flex align-items-center justify-content-between">
                    <p className="wow fadeInLeft" data-wow-delay=".3s">
                        © All Copyright 2024 by <a href="#">Delish</a>
                    </p>
                    <ul className="brand-logo wow fadeInRight" data-wow-delay=".5s">
                        <li>
                            <a className="text-white" href="#">
                                Terms & Condition
                            </a>
                        </li>
                        <li>
                            <a className="text-white" href="#">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer1;