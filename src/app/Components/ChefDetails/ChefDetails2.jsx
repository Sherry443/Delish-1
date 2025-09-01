import Image from "next/image";
import Link from "next/link";

const ChefDetails2 = () => {
    return (
        <div>
    <div className="chefe-details-section section-padding fix">
        <div className="container">
            <div className="about-chefe-details">
                <div className="row gy-5 gx-60">
                    <div className="col-xl-6">
                        <div className="chefe-thumb">
                        <Image className="img-fluid" src="/assets/img/chefe/ali.png" alt="img" width={618} height={367}   />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="chefe-details-wrapper style2">
                            {/* <div className="star-wrapper">
                            <Image src="/assets/img/icon/star4.svg" alt="img" width={116} height={16}   />
                                 (5k)
                            </div> */}
                            <h2>Ali Jamal</h2>
                            <h6>Sales Head</h6>
                            <h6>0305-8880039</h6>
                            <p>As Sales Head at Delish, my mission is simple — make sure our flavors reach every home, restaurant, and kitchen that loves quality food. I work closely with our sales teams across the country, building strong partnerships and ensuring that every bottle and sachet carries our promise of taste, quality, and consistency.</p>

                            <div className="follow-area">
                                <ul className="social-media">
                                {/* <li> <a href="https://www.facebook.com"> <i className="bi bi-facebook"></i> </a>
                                </li>
                                <li> <a href="https://www.youtube.com"> <i className="bi bi-linkedin"></i> </a> </li>
                                <li> <a href="https://www.x.com"> <i className="bi bi-twitter-x"></i> </a> </li>
                                <li> <a href="https://www.linkedin.com"><i className="bi bi-linkedin"></i> </a>
                                </li> */}
                                </ul>
                            </div>
                            {/* <Link className="theme-btn" href="/menu">Contact with me<i className="bi bi-arrow-right"></i></Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default ChefDetails2;