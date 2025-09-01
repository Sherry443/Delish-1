import About1 from '@/app/Components/About/About1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import CtaBanner1 from '@/app/Components/CtaBanner/CtaBanner1';
import CtaBanner3 from '@/app/Components/CtaBanner/CtaBanner3';
import Gallery1 from '@/app/Components/Gallery/Gallery1';
import Offer2 from '@/app/Components/Offer/Offer2';
import Team3 from '@/app/Components/Team/Team3';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

const page = () => {
  return (
    <div>
            <BreadCumb
                bgimg="/assets/img/bg/breadcumb.jpg"
                Title="About Us"
            ></BreadCumb>  
            <Offer2></Offer2>    
            <About1></About1>
            <CtaBanner1></CtaBanner1>
            <Team3></Team3>
            <CtaBanner3></CtaBanner3>
            <Testimonial2></Testimonial2>
            <Gallery1></Gallery1>            
    </div>
  );
};

export default page;