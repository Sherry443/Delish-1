import Seasonings from '@/app/Components/BestSelling/Seasonings';
import BreadCumb from '@/app/Components/Common/BreadCumb';

const page = () => {
  return (
    <div>
              <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Seasonings"
            ></BreadCumb>      
            <Seasonings></Seasonings>       
    </div>
  );
};

export default page;


  