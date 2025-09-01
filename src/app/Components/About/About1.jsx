"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Image from "next/image";

const About1 = () => {

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
        <div className="about-wrapper style1">
          
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                              
                                    Our Mission
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                Delicious Sauces, Every Meal
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">
  <p>
    <strong>Delish</strong> aims to become a trusted name in Pakistan and beyond by delivering 
    <em>high-quality sauces</em> that are rich in taste, made with real ingredients, and crafted 
    to make everyday meals more enjoyable.
  </p>

  <p className="mt-3">
    <strong>Our Promise:</strong>  </p>
    <ul className="list-disc ps-5">
      <li><strong>Authenticity:</strong> In taste, inspiration, and innovation.</li>
      <li><strong>Consistency:</strong> In premium quality and impeccable service.</li>
      <li><strong>Strategy:</strong> In growing business value and seizing opportunities.</li>
      <li><strong>Consciousness:</strong> Towards employees, consumers, environment, and the global future.</li>
    </ul>

</div>



                            </div>
                
                        </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-end">
                            <div className="about-thumb mb-5 mb-lg-0">
                            <Image src="/assets/img/about/Spoon.png" alt="img" width={575} height={536}   />
                                
                                <div className="video-wrap">
                                    <a onClick={handelClick} 
                                        className="play-btn popup-video"><Image className="cir36" src="/assets/img/shape/player.svg" alt="img" width={152} height={152}   /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal> 

    </section>
    );
};

export default About1;