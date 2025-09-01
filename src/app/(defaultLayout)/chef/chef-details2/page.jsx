import ChefDetails2 from '@/app/Components/ChefDetails/ChefDetails2';
import ChefDetails1 from '@/app/Components/ChefDetails/ChefDetails1';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import Team4 from '@/app/Components/Team/Team4';
import React from 'react';

const page = () => {
  return (
    <div>
             <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Our Team"
            ></BreadCumb> 
            <ChefDetails2></ChefDetails2> 
            <ChefDetails1></ChefDetails1> 
            <ChefDetails2></ChefDetails2> 
            <Team4></Team4>       
    </div>
  );
};

export default page;