import Sauces from '@/app/Components/BestSelling/Sauces';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import React from 'react';

const page = () => {
  return (
    <div>
              <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Sauces"
            ></BreadCumb>      
            <Sauces></Sauces>       
    </div>
  );
};

export default page;


  