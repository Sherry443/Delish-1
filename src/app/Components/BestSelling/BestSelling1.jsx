import Image from "next/image";
import Link from "next/link";

const BestSelling1 = () => {

    const foodItems = [
        {img:'/assets/img/dishes/BBQ.png', title:'Chicken Fried Rice', content:'The registration fee', price:'$100.99'},    
        {img:'/assets/img/dishes/Chili.png', title:'Chinese Pasta', content:'The registration fee', price:'$15.99'},    
        {img:'/assets/img/dishes/Garlic.png', title:'Chicken Pizza', content:'The registration fee', price:'$26.99'},    
        {img:'/assets/img/dishes/Green.png', title:'Chicken Noodles', content:'The registration fee', price:'$39.00'},    
        {img:'/assets/img/dishes/Pizza.png', title:'Grilled Chicken', content:'The registration fee', price:'$20.99'},    
      ]; 

    return (
        <section className="popular-dishes-section fix section-padding">
        <div className="popular-dishes-wrapper style1">
            <div className="container">
                <div className="dishes-card-wrap style1">
                {foodItems.map((item, i) => (
                    <div key={i} className="dishes-card style1 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="dishes-thumb">
                        <Image src={item.img} alt="img" width={178} height={218}   />
                        </div>
                        <Link href="/menu">
                            <h3>{item.title}</h3>
                        </Link>
                        <p>{item.content}</p>
                        <h6>{item.price}</h6>

    
                    </div>
                    ))}
                </div>
                <div className="btn-wrapper  wow fadeInUp" data-wow-delay="0.9s">
                    <Link className="theme-btn" href="/menu2">VIEW ALL ITEM <i className="bi bi-arrow-right"></i></Link>
                </div>
            </div>
        </div>

    </section>

    );
};

export default BestSelling1;