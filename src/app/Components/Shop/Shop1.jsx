import Link from "next/link";
import ShopCard from "../Card/ShopCard";
import Image from "next/image";

const Shop1 = () => {
    return (
        <div className="shop-section section-padding fix">
        <div className="shop-wrapper style1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1 wow fadeInUp" data-wow-delay=".3s">
                        
                        <div className="main-sidebar">
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Search
                                </h5>
                                <div className="search-widget">
                                    <form action="#"> 
                                        <input type="text" placeholder="Search here" />
                                        <button><i className="bi bi-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Search
                                </h5>
                                <ul className="tagcloud">
                                    <li><a href="#">Cheese</a></li>
                                    <li><a href="#">Cocktail</a></li>
                                    <li><a href="#">Drink</a></li>
                                    <li><a href="#">Uncategorized</a></li>
                                    <li><a href="#">Pizza</a></li>
                                    <li><a href="#">Non Veg</a></li>
                                </ul>
                            </div>
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Filter By Price
                                </h5>
                                <div className="range__barcustom">
                                    <div className="slider">
                                        <div className="progress"></div>
                                    </div>
                                    <div className="range-input">
                                        <input type="range" className="range-min" min="0" max="10000" value="2500" />
                                        <input type="range" className="range-max" min="100" max="10000" value="7500" />
                                    </div>
                                    <div className="range-items">
                                        <div className="price-input">
                                            <div className="price-wrapper d-flex align-items-center gap-1">
                                                <div className="field">
                                                    <span>Price:</span>
                                                </div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-min" value="100" />
                                                </div>
                                                <div className="separators">-</div>
                                                <div className="field">
                                                    <span>$</span>
                                                    <input type="number" className="input-max" value="1000" />
                                                </div>
                                                <a href="#" className="filter-btn mt-2 me-3">Filter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-sidebar-widget">
                                <h5 className="widget-title">
                                    Filter By Price
                                </h5>

                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_1.png" alt="img" width={78} height={78}   />
                                    </div>
                                    <div className="recent-content">
                                    <Link href="/shop"> Ruti With Beef Slice </Link>
                                        <div className="star"> <Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">35$</div>
                                            <div className="offer-price">25$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_2.png" alt="img" width={78} height={78}   />
                                    </div>
                                    <div className="recent-content">
                                        <Link href="/shop"> Fast Food Combo </Link>
                                        <div className="star"><Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">95$</div>
                                            <div className="offer-price">75$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_3.png" alt="img" width={78} height={78}   />                                       
                                    </div>
                                    <div className="recent-content">
                                    <Link href="/shop"> divicious Salad </Link>
                                        <div className="star"><Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">65$</div>
                                            <div className="offer-price">55$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="recent-box">
                                    <div className="recent-thumb">
                                    <Image src="/assets/img/shop/recentThumb1_4.png" alt="img" width={78} height={78}   />                                        
                                    </div>
                                    <div className="recent-content">
                                    <Link href="/shop"> Chiness Pasta </Link>
                                        <div className="star"><Image src="/assets/img/icon/star3.svg" alt="img" width={86} height={16}   /></div>
                                        <div className="price">
                                            <div className="regular-price">45$</div>
                                            <div className="offer-price">35$</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-9 col-lg-8 order-1 order-md-2 wow fadeInUp" data-wow-delay=".5s">
                        <div className="sort-bar">
                            <div className="row g-sm-0 gy-20 justify-content-between align-items-center">
                                <div className="col-md">
                                    <p className="woocommerce-result-count">Showing 1 - 12 of 30 Results</p>
                                </div>

                                <div className="col-md-auto">
                                    <form className="woocommerce-ordering" method="get">
                                        <select name="orderby" className="single-select" aria-label="Shop order">
                                            <option  >Default Sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by latest</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </form>
                                </div>
                                <div className="col-md-auto">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="pills-grid-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-grid" type="button" role="tab"
                                                aria-controls="pills-grid" aria-selected="true"><i
                                                    className="fa-solid fa-grid"></i></button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-list-tab" data-bs-toggle="pill"
                                                data-bs-target="#pills-list" type="button" role="tab"
                                                aria-controls="pills-list" aria-selected="false"><i
                                                    className="fa-solid fa-list"></i></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-grid" role="tabpanel"
                                aria-labelledby="pills-grid-tab" tabIndex="0">
                                <div className="dishes-card-wrap style2">
                                    <ShopCard
                                        img="/assets/img/dishes/dishes2_1.png"
                                        title="Chicken Pizza"
                                        content="The registration fee"
                                        price="$24.00"
                                    ></ShopCard>
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_2.png"
                                        title="Egg and Cucumber"
                                        content="The registration fee"
                                        price="$28.00"
                                    ></ShopCard>       
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_3.png"
                                        title="Chicken Fried Rice"
                                        content="The registration fee"
                                        price="$20.00"
                                    ></ShopCard> 
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_4.png"
                                        title="Chicken Leg Piece"
                                        content="The registration fee"
                                        price="$58.00"
                                    ></ShopCard> 
                                </div>
                                <div className="dishes-card-wrap style2">
                                <ShopCard
                                        img="/assets/img/dishes/dishes2_1.png"
                                        title="Chicken Pizza"
                                        content="The registration fee"
                                        price="$24.00"
                                    ></ShopCard>
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_2.png"
                                        title="Egg and Cucumber"
                                        content="The registration fee"
                                        price="$28.00"
                                    ></ShopCard>       
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_3.png"
                                        title="Chicken Fried Rice"
                                        content="The registration fee"
                                        price="$20.00"
                                    ></ShopCard> 
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_4.png"
                                        title="Chicken Leg Piece"
                                        content="The registration fee"
                                        price="$58.00"
                                    ></ShopCard> 

                                </div>
                                <div className="dishes-card-wrap style2">
                                <ShopCard
                                        img="/assets/img/dishes/dishes2_1.png"
                                        title="Chicken Pizza"
                                        content="The registration fee"
                                        price="$24.00"
                                    ></ShopCard>
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_2.png"
                                        title="Egg and Cucumber"
                                        content="The registration fee"
                                        price="$28.00"
                                    ></ShopCard>       
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_3.png"
                                        title="Chicken Fried Rice"
                                        content="The registration fee"
                                        price="$20.00"
                                    ></ShopCard> 
                                     <ShopCard
                                        img="/assets/img/dishes/dishes2_4.png"
                                        title="Chicken Leg Piece"
                                        content="The registration fee"
                                        price="$58.00"
                                    ></ShopCard> 
                                </div>
                            </div>

                        </div>


                        <div className="page-nav-wrap text-center">
                            <ul>
                                <li><a className="previous" href="#"><i className="bi bi-arrow-left"></i></a></li>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers active" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">...</a></li>
                                <li><a className="next" href="#"><i className="bi bi-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Shop1;