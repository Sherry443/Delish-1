import About1 from '@/app/Components/About/About1';
import About2 from '@/app/Components/About/About2';
import Blog1 from '@/app/Components/Blog/Blog1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import CtaBanner1 from '@/app/Components/CtaBanner/CtaBanner1';
import Offer4 from '@/app/Components/Offer/Offer4';
import Team1 from '@/app/Components/Team/Team1';
import OurVision from '@/app/Components/Vision/OurVision';

import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="About Us"
            ></BreadCumb>   
            <About2></About2>
           <About1></About1>
           <OurVision></OurVision>
       
    </div>
  );
};

export default page;