import Image from "next/image";
import Link from "next/link";

const Team4 = () => {

    const teamItems = [
        {img:'/assets/img/chefe/Ch umer.png', title:'Ch Umer', content:'Manager Sales and Marketing', areas:""},
        {img:'/assets/img/chefe/Raheel.png', title:'Raheel', content:'TSM', areas:""},
        {img:'/assets/img/chefe/Sarfaraz.png', title:'Sarfraz', content:'RSM', areas:"GT road belt (Kamoki-Mirpur)"},
        {img:'/assets/img/chefe/Khurram RSM.png', title:'Khurram Shahzad', content:'RSM', areas:"North KPK belt"},
        {img:'/assets/img/chefe/Noil.jpg', title:'Noil', content:'Sales Officer', areas:"Chungi, Nishter, Quanchi, Ghazi road, Walton,Ferozpur Road, Kahna, Gajjumatah, Kamahan Lidher Road"},
        {img:'/assets/img/chefe/Altaf.png', title:'Altaf', content:'Sales Officer', areas:"Allama Iqbal Town, Mansoora, Samnabad, Islampura, Gulshan Ravi, Bund Road, Ichra, Shama, Wahdat Road, Muslim Town"},
        {img:'/assets/img/chefe/asif.png', title:'Asif Muneer', content:'Sales Officer', areas:"Model Town, Johar Town, Wapda Town, Valencia, Defense Road, Ada Plot, Raiwand, Thokar to Behria"},
        {img:'/assets/img/chefe/Ch umer (1).png', title:'Shahmeer', content:'Sales Officer', areas:"Canal Road,Zaraar Shaheed Road , Barki Road, Dharampura,Cantt,Dha phase 8 ,"},
        {img:'/assets/img/chefe/Khurram.png', title:'Khurram Shahzad', content:'Sales Officer', areas:"Shahdarah, Sheikhupura, Bilal Gunj, Mohni Road, Karim Park, Sabzazar, Margazar"},
       
        {img:'/assets/img/chefe/Rameez (1).png', title:'Rameez', content:'Sales Officer', areas:"Gulberg, Cavalry, Firdos market, Dha phase 1 To 6, Defense Raya"},
       
        {img:'/assets/img/chefe/Waqas latif.png', title:'Waqas Latif', content:'Sales Officer', areas:"Gt Road, Shadbagh, Badami bagh, Walled City, Shadman, Ferozpur Road, Shalimar link road"},
       
       
    ];

    return (
        <div className="chefe-section fix section-padding">
            <div className="chefe-wrapper style1">
                <div className="container">
                    {/* Section Heading */}
                    <div className="section-title text-center mb-5">
                        <div className="title-divider">
                       
                            <h2 className="section-heading">Sales Team</h2>
                   
                        </div>
                    </div>
                    
                    <div className="chefe-card-wrap style1">
                        <div className="row">
                            {teamItems.map((item, i) => (
                                <div key={i} className="col-lg-6 col-xl-6">
                                    <div className="chefe-card style1 enterprise wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="chefe-thumb">
                                            <Image src={item.img} alt="img" width={80} height={80} />
                                        </div>
                                        
                                        <div className="chefe-content">
                                            <Link href="/chef/chef-details">
                                                <h3>{item.title}</h3>
                                            </Link>
                                            <p>{item.content}</p>
                                        </div>
                                        
                                        <div className="areas">
                                        <p>{item.areas}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team4;