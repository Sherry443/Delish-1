import Blog5 from '@/app/Components/Blog/Blog5';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import TradersTable from '@/app/Components/Brand/TradersTable';
import React from 'react';

const page = () => {
  return (
    <div>
              <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Distributors List"
            ></BreadCumb>
            <TradersTable></TradersTable>
    </div>
  );
};

export default page;