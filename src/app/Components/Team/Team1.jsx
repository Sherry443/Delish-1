"use client"
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";

const Team1 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 4000,        
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 6,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      }; 

    const teamItems = [
        {img:'/assets/img/chefe/chefeThumb1_1.png', title:'Ralph Edwards', content:'Chef Lead', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_2.png', title:'Leslie Alexander', content:'Chef Assistant', facebook:'#', linkedin:'#'},
        {img:'/assets/img/chefe/chefeThumb1_3.png', title:'Ronald Richards', content:'Chef Assistant', facebook:'#', linkedin:'#'},
      ]; 

      const logoItems = [
        {img:'/assets/img/logo/clientLogo1_1.png'},
        {img:'/assets/img/logo/clientLogo1_2.png'},
        {img:'/assets/img/logo/clientLogo1_3.png'},
        {img:'/assets/img/logo/clientLogo1_4.png'},
        {img:'/assets/img/logo/clientLogo1_5.png'},
        {img:'/assets/img/logo/clientLogo1_6.png'},
        {img:'/assets/img/logo/clientLogo1_1.png'},
        {img:'/assets/img/logo/clientLogo1_2.png'},        
      ]; 

    return (
<section className="chefe-section fix section-padding">
        <div className="chefe-wrapper style1">
            <div className="shape1 d-none d-xxl-block"><Image className="float-bob-y" src="/assets/img/shape/chefeShape1_1.png" alt="img" width={167} height={132}   /></div>
            <div className="shape2 d-none d-xxl-block"><Image className="float-bob-x" src="/assets/img/shape/chefeShape1_2.png" alt="img" width={142} height={90}   /></div>
            <div className="container">
                <div className="title-area">
                    <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                    <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                        OUR CHEFE<Image className="ms-1"
                            src="/assets/img/icon/titleIcon.svg" alt="img" width={20} height={20}   />
                    </div>
                    <h2 className="title  wow fadeInUp" data-wow-delay="0.7s">
                        Meet Our Expert Chefe
                    </h2>
                </div>
                <div className="chefe-card-wrap style1 pb-5">
                    <div className="row">
                    {teamItems.map((item, i) => (
                        <div key={i} className="col-lg-6 col-xl-4">
                            <div className="chefe-card style1 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="chefe-thumb">
                                <Image src={item.img} alt="img" width={310} height={297}   />
                                </div>
                                <div className="icon">
                                    <Link className="hovered-icon" href={item.facebook}><i className="bi bi-facebook"></i></Link>
                                    <a href="#"><i className="bi bi-share"></i></a>
                                    <Link className="hovered-icon" href={item.linkedin}><i className="bi bi-linkedin"></i></Link>
                                </div>
                                <div className="chefe-content">
                                    <Link href="/chef/chef-details">
                                        <h3>{item.title}</h3>
                                    </Link>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
                <div className="slider-area pt-5 mt-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="swiper clientSliderOne">
                        <div className="swiper-wrapper">
                        <Slider {...settings}>
                        {logoItems.map((item, i) => (
                            <div key={i} className="swiper-slide">
                                <div className="client-img text-center"><img src={item.img} alt="thumb" />
                                </div>
                            </div>
                        ))}
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Team1;