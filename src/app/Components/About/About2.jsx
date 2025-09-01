"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const About2 = () => {

        const [iframeSrc, setIframeSrc] = useState('about:blank');
        const [toggle, setToggle] = useState(false);
      
        const handelClick = () => {
          setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
          setToggle(!toggle);
        };
        const handelClose = () => {
          setIframeSrc('about:blank');
          setToggle(!toggle);
        };

    return (
<section className="about-us-section fix section-padding pt-0">
        <div className="about-wrapper style2">
          
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            <div className="about-thumb mb-5 mb-lg-0">
                            <Image src="/assets/img/about/about.png" alt="img" width={875} height={536}   />
                                
                                {/* <div className="video-wrap">
                                    <a onClick={handelClick} 
                                        className="play-btn popup-video"><Image className="cir36" src="/assets/img/shape/player.svg" alt="img" width={152} height={152}   /></a>
                                </div> */}
                            </div>a

                        </div>
                        <div className="col-lg-6">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                              
                                    About US
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                Delicious Sauces, Every Meal
                                </h2>
                                <div className="text-x" data-wow-delay="0.8s">Our aim is to provide delicious sauces using authentic ingredients; good taste, at an affordable
price that will exceed international standards. So if you love experimenting with flavors or
simply enjoy food that tastes amazing then Delish has it all for you.</div>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">Inspired by rich flavors from around the Pak, Delish brings you the perfect sauce for every
moment. At Delish, we don’t just make sauces — we make flavors that connect people, uplift
meals, and bring something truly unforgettable to your table.</div>


                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item"><Image src="/assets/img/icon/aboutIcon1_1.svg" alt="img" width={36} height={36}   /></div>
                                    <div className="item">
                                        <h6>Authentic Rich Flavors</h6>
                                        <p>Experience sauces made with real, high-quality ingredients.</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item"><Image src="/assets/img/icon/aboutIcon1_2.svg" alt="img" width={36} height={36}   /></div>
                                    <div className="item">
                                        <h6>Delicious </h6>
                                        <p>Bringing flavor that uplifts every meal.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                        <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                        <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">chicken pizza</span>
                        <span className="text-slider"></span><span className="text-slider text-style">GRILLED CHICKEN</span>
                        <span className="text-slider"></span><span className="text-slider text-style">BURGER</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN PIZZA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">FRESH PASTA</span>
                        <span className="text-slider"></span><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
                        <span className="text-slider"></span><span className="text-slider text-style">CHICKEN FRY</span>
                    </li>
                </ul>
            </div>
        </div> */}
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal> 

    </section>
    );
};

export default About2;