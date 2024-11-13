import styles from './DashboardHomePage.module.css';
import clsx from "clsx";
import {LineChart, BarChart} from "~/components/elements";

function DashboardHomePage() {
    const labelsRecentOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const datasetsRecentOrder = [65, 59, 80, 81, 56, 55, 40];
    const datasetsRevenue = [65, 59, 80, 81, 56, 55, 40];
    const datasetsProfit = [68, 49, 52, 91, 86, 45, 60];

    const dataRecentOrder = {
        labels: labelsRecentOrder,
        datasets: [
            {
                // label: 'Revenue',
                data: datasetsRecentOrder,
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };
    const dataRevenueAndProfit = {
        labels: labelsRecentOrder,
        datasets: [
            {
                label: 'Revenue',
                data: datasetsRevenue,
                fill: false,
                backgroundColor: 'rgba(35, 119, 252,0.6)',
                borderColor: 'rgba(75,192,192,1)',
            },
            {
                label: 'Profit',
                data: datasetsProfit,
                fill: false,
                backgroundColor: 'rgba(203, 213, 225,0.6)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const dataBestSeller = [
        {id: 1, name: 'IPhone 13', stock: '100', sell: '99', img: '/img/customer/product/mobile/iphone13.png'},
        {id: 2, name: 'IPhone 13', stock: '100', sell: '99', img: '/img/customer/product/mobile/iphone13.png'},
        {id: 3, name: 'IPhone 13', stock: '100', sell: '99', img: '/img/customer/product/mobile/iphone13.png'},
        {id: 4, name: 'IPhone 13', stock: '100', sell: '99', img: '/img/customer/product/mobile/iphone13.png'},
        {id: 5, name: 'IPhone 13', stock: '100', sell: '99', img: '/img/customer/product/mobile/iphone13.png'},
    ];
    const dataTopCustomer = [
        {id: 1, name: 'John Doe', order: '100', email: 'jason@gmail.com', img: '/img/customer/profile/profile-img-test.jpg'},
        {id: 2, name: 'Marry Johnson', order: '100', email: 'jason@gmail.com', img: '/img/customer/profile/profile-img-test.jpg'},
        {id: 3, name: 'Bob Johnson', order: '100', email: 'jason@gmail.com', img: '/img/customer/profile/profile-img-test.jpg'},
        {id: 4, name: 'Jack Jason', order: '100', email: 'jason@gmail.com', img: '/img/customer/profile/profile-img-test.jpg'},
        {id: 5, name: 'Kim Jun Soo', order: '100', email: 'jason@gmail.com', img: '/img/customer/profile/profile-img-test.jpg'},
    ];


    return (
        <>
            <div className={clsx(styles["home"], 'pt-5 pb-5')}>
                <div className={clsx(styles["home-chart"])}>
                    <ul className={clsx(styles["home-chart__list"])}>
                        <li className={clsx(styles["home-chart__item"], 'col-lg-3 col-md-3 col-sm-12')}>
                            <div className={clsx(styles["home-chart__item-parameter"])}>
                                <div className={clsx(styles["home-chart__item-icon"])}>
                                    <i className="fa-solid fa-users-gear"></i>
                                </div>
                                <div className={clsx(styles["home-chart__item-text"])}>
                                    <p className={clsx(styles['home-chart__item-span'])}>Total User</p>
                                    <p className={clsx(styles['home-chart__item-para'])}>30</p>
                                </div>
                            </div>
                        </li>
                        <li className={clsx(styles["home-chart__item"], 'col-lg-3 col-md-3 col-sm-12')}>
                            <div className={clsx(styles["home-chart__item-parameter"])}>
                                <div className={clsx(styles["home-chart__item-icon"], styles["home-chart__item-icon-profit"])}>
                                    <i className="fa-solid fa-chart-simple"></i>
                                </div>
                                <div className={clsx(styles["home-chart__item-text"])}>
                                    <p className={clsx(styles['home-chart__item-span'])}>Total Profit</p>
                                    <p className={clsx(styles['home-chart__item-para'])}>$37,802</p>
                                </div>
                            </div>
                        </li>
                        <li className={clsx(styles["home-chart__item"], 'col-lg-3 col-md-3 col-sm-12')}>
                            <div className={clsx(styles["home-chart__item-parameter"])}>
                                <div className={clsx(styles["home-chart__item-icon"], styles["home-chart__item-icon-order"])}>
                                    <i className="fa-solid fa-cart-flatbed"></i>
                                </div>
                                <div className={clsx(styles["home-chart__item-text"])}>
                                    <p className={clsx(styles['home-chart__item-span'])}>Total Order</p>
                                    <p className={clsx(styles['home-chart__item-para'])}>500</p>
                                </div>
                            </div>
                        </li>
                        <li className={clsx(styles["home-chart__item"], 'col-lg-3 col-md-3 col-sm-12')}>
                            <div className={clsx(styles["home-chart__item-parameter"])}>
                                <div className={clsx(styles["home-chart__item-icon"], styles["home-chart__item-icon-product"])}>
                                    <i className="fa-solid fa-laptop"></i>
                                </div>
                                <div className={clsx(styles["home-chart__item-text"])}>
                                    <p className={clsx(styles['home-chart__item-span'])}>Total Product</p>
                                    <p className={clsx(styles['home-chart__item-para'])}>300</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className={clsx(styles["home-information"])}>
                    <div className={clsx(styles["home-information__recent-order"], 'col-lg-5 col-md-6 col-sm-12')}>
                        <div className={clsx(styles["home-information__recent-order--inner"])}>
                            <div className={clsx(styles["home-information__title"])}>
                                <h5>Recent Order</h5>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <LineChart data={dataRecentOrder}/>
                        </div>
                    </div>

                    <div className={clsx(styles["home-information__best-seller"], 'col-lg-4 col-md-6 col-sm-12')}>
                        <div className={clsx(styles["home-information__best-seller--inner"])}>
                            <div className={clsx(styles["home-information__title"])}>
                                <h5>Best Seller</h5>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <ul className={clsx(styles["home-information__best-seller-list"])}>
                                {dataBestSeller.map((item, index) => (
                                    <li key={index} className={clsx(styles["home-information__best-seller-item"], 'mt-3')}>
                                        <div className={clsx(styles["home-information__best-seller-item__info"])}>
                                            <img src={item.img} alt=""/>
                                            <div className={clsx(styles["home-information__best-seller-item__text"])}>
                                                <p>{item.name}</p>
                                                <span>{item.stock} items</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles["home-information__best-seller-item__sell-out"])}>
                                            <p>Sell out</p>
                                            <span>{item.sell} items</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={clsx(styles["home-information__top-customer"], 'col-lg-3 col-md-4 col-sm-12')}>
                        <div className={clsx(styles["home-information__best-seller--inner"])}>
                            <div className={clsx(styles["home-information__title"])}>
                                <h5>Top Customer</h5>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <ul className={clsx(styles["home-information__best-seller-list"])}>
                                {dataTopCustomer.map((item, index) => (
                                    <li key={index}
                                        className={clsx(styles["home-information__best-seller-item"], 'mt-3')}>
                                        <div className={clsx(styles["home-information__best-seller-item__info"])}>
                                            <img src={item.img} alt=""/>
                                            <div className={clsx(styles["home-information__best-seller-item__text"])}>
                                                <p>{item.name}</p>
                                                <span>{item.email}</span>
                                            </div>
                                        </div>
                                        <div className={clsx(styles["home-information__best-seller-item__sell-out"])}>
                                            <p>Order</p>
                                            <span>{item.order} items</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={clsx(styles["home-information__earning"], 'col-lg-6 col-md-4 col-sm-12')}>
                        <div className={clsx(styles["home-information__earning--inner"])}>
                            <div className={clsx(styles["home-information__earning-text"])}>
                                <h5>Earning</h5>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <BarChart data={dataRevenueAndProfit}/>
                        </div>
                    </div>

                    <div className={clsx(styles["home-information__comment"], 'col-lg-6 col-md-4 col-sm-12')}>
                        <div className={clsx(styles["home-information__comment--inner"])}>
                            <div className={clsx(styles["home-information__comment-text"])}>
                                <h5>New Comments</h5>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <ul className={clsx(styles["home-information__comment-list"])}>
                                <li className={clsx(styles["home-information__comment-item"])}>
                                    <div className={clsx(styles["home-information__comment-item__info"])}>
                                        <div
                                            className={clsx(styles["home-information__comment-item__img"], 'col-lg-1 col-md-1 col-sm-1')}>
                                            <img src="/img/customer/profile/profile-img-test.jpg" alt=""/>
                                        </div>
                                        <div
                                            className={clsx(styles["home-information__comment-item__text"], 'col-lg-11 col-md-11 col-sm-11')}>
                                            <p>Joe Marguire</p>
                                            <div className={clsx(styles["home-information__comment-item__icon"])}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequuntur cupiditate ducimus eveniet excepturi illum impedit, iste neque nisi nobis odio officiis quos ratione, tenetur voluptate voluptatum! Atque, placeat.</span>
                                        </div>
                                    </div>
                                </li>

                                <li className={clsx(styles["home-information__comment-item"])}>
                                    <div className={clsx(styles["home-information__comment-item__info"])}>
                                        <div
                                            className={clsx(styles["home-information__comment-item__img"], 'col-lg-1 col-md-1 col-sm-1')}>
                                            <img src="/img/customer/profile/profile-img-test.jpg" alt=""/>
                                        </div>
                                        <div
                                            className={clsx(styles["home-information__comment-item__text"], 'col-lg-11 col-md-11 col-sm-11')}>
                                            <p>Joe Marguire</p>
                                            <div className={clsx(styles["home-information__comment-item__icon"])}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequuntur cupiditate ducimus eveniet excepturi illum impedit, iste neque nisi nobis odio officiis quos ratione, tenetur voluptate voluptatum! Atque, placeat.</span>
                                        </div>
                                    </div>
                                </li>

                                <li className={clsx(styles["home-information__comment-item"])}>
                                    <div className={clsx(styles["home-information__comment-item__info"])}>
                                        <div
                                            className={clsx(styles["home-information__comment-item__img"], 'col-lg-1 col-md-1 col-sm-1')}>
                                            <img src="/img/customer/profile/profile-img-test.jpg" alt=""/>
                                        </div>
                                        <div
                                            className={clsx(styles["home-information__comment-item__text"], 'col-lg-11 col-md-11 col-sm-11')}>
                                            <p>Joe Marguire</p>
                                            <div className={clsx(styles["home-information__comment-item__icon"])}>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut consequuntur cupiditate ducimus eveniet excepturi illum impedit, iste neque nisi nobis odio officiis quos ratione, tenetur voluptate voluptatum! Atque, placeat.</span>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHomePage;