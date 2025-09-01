import BestSelling3 from '@/app/Components/BestSelling/BestSelling3';
import BreadCumb from '@/app/Components/Common/BreadCumb';
// import FoodItem4 from '@/app/Components/FoodItem/FoodItem4';
// import Gallery1 from '@/app/Components/Gallery/Gallery1';
// import Timer2 from '@/app/Components/Timer/Timer2';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Our Products"
            ></BreadCumb>   
                 <BestSelling3></BestSelling3>  
    </div>
  );
};

export default page;