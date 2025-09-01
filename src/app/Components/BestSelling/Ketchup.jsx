import Image from "next/image";
import Link from "next/link";

const Ketchup = () => {

    const foodItems = [
   
        {img:'/assets/img/dishes/Garlic.png', title:'Chilli Garlic Ketchup', content:'The registration fee', price:'$26.99'},          
        {img:'/assets/img/dishes/Tamato.png', title:'Tomato Ketchup', content:'The registration fee', price:'$15.99'},     
        {img:'/assets/img/dishes/Tam-Pack.png', title:'Tomato Ketchup', content:'The registration fee', price:'$39.00'},    
  
      ]; 

    return (
        <section className="popular-dishes-section fix section-padding pb-0">
        <div className="popular-dishes-wrapper-container">
            <div className="container">
                <div className="popular-dishes-wrapper style4">
                    {/* <div className="shape1 float-bob-x d-none d-xxl-block"><Image src="/assets/img/shape/dishesShape5_1.png" alt="img" width={101} height={79}   /></div> */}
                    <div className="container">
                        {/* <div className="title-area mb-45">

                            <h2 className="title wow fadeInUp" data-wow-delay="0.7s"
                                >
                                Our Most Popular Products
                            </h2>
                        </div> */}
                        <div className="dishes-card-wrap style4">
                        {foodItems.map((item, i) => (
                            <div  key={i} className="dishes-card style5 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="dishes-thumb">
                                <Image src={item.img} alt="img" width={170} height={271}   />
                                </div>
                                <div className="dishes-content">
                                    <Link href="/menu">
                                        <h3>{item.title}</h3>
                                    </Link>
                                    {/* <div className="star"><img src="/assets/img/icon/star2.svg" alt="icon" /></div> */}
                                    {/* <div className="text">{item.content}</div> */}
                                    {/* <h6>{item.price}</h6> */}
                                    {/* <Link href="/menu" className="theme-btn style6"> Order Now <i className="bi bi-basket2"></i></Link> */}
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
};

export default Ketchup;