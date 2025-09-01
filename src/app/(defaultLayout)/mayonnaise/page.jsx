import Mayo from '@/app/Components/BestSelling/Mayo';
import BreadCumb from '@/app/Components/Common/BreadCumb';

const page = () => {
  return (
    <div>
              <BreadCumb
                // bgimg="/assets/img/bg/breadcumb.jpg"
                Title="Mayonnaise"
            ></BreadCumb>      
            <Mayo></Mayo>       
    </div>
  );
};

export default page;


  