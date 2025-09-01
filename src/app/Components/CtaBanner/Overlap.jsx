import Image from "next/image";
import Link from "next/link";
const Overlap = () => {
    return (
        <div className="overlapping-images-section">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-6 col-md-3">
                        <div className="overlap-image overlap-1 ketchup">
                            <Image 
                                className="img-fluid float-bob-x" 
                                src="/assets/img/cta/tomato-sauce.png" 
                                alt="img" 
                                width={560} 
                                height={320} 
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="overlap-image overlap-2 white ">
                            <Image 
                                className="img-fluid float-bob-y" 
                                src="/assets/img/cta/bowl-mayonnaise.png" 
                                alt="img" 
                                width={400} 
                                height={200} 
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="overlap-image overlap-2 chili">
                            <Image 
                                className="img-fluid float-bob-y" 
                                src="/assets/img/cta/delicious-hot-spicy-red-sauce.png" 
                                alt="img" 
                                width={330} 
                                height={205} 
                            />
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="overlap-image overlap-1 mayo">
                            <Image 
                                className="img-fluid float-bob-x" 
                                src="/assets/img/cta/bowl-with-cheese-sauce.png" 
                                alt="img" 
                                width={350} 
                                height={220} 
                            />
                        </div>
                    </div>


                   
                </div>
            </div>
        </div>
    );
};
export default Overlap;