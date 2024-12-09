import styles from './DashboardHomePage.module.css';
import clsx from "clsx";
import {LineChart, BarChart} from "~/components/elements";
import {useEffect, useState} from "react";
import {FormatUSDCurrency} from '~/utils';
import {Link} from "react-router-dom";
import getLast7Day from './utils/getLast7Day';

function DashboardHomePage() {
    const api_url = process.env.REACT_APP_API_URL;
    // const labelsRecentOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    // const datasetsRecentOrder = [65, 59, 80, 81, 56, 55, 40];

    // const datasetsRevenue = [65, 59, 80, 81, 56, 55, 40];
    // const datasetsProfit = [68, 49, 52, 91, 86, 45, 60];

    const [totalCustomer, setTotalCustomer] = useState(0);
    const [totalProfit, setTotalProfit] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [bestSeller, setBestSeller] = useState([]);
    const [comments, setComments] = useState([]);
    const [newCustomers, setNewCustomers] = useState([]);

    const [chartLabels, setChartLabels] = useState([
        getLast7Day(),
        ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    ]);

    const [labelsRecentOrder, setLabelsRecentOrder] = useState([...chartLabels[1]]);
    const [totalDatasetsRecentOrder, setTotalDatasetsRecentOrder] = useState([]);
    const [datasetsRecentOrder, setDatasetsRecentOrder] = useState([]);

    const [labelsProfitRevenue, setLabelsProfitRevenue] = useState([...chartLabels[1]]);
    const [totalDatasetsRevenue, setTotalDatasetsRevenue] = useState([]);
    const [totalDatasetsProfit, setTotalDatasetsProfit] = useState([]);

    const [datasetsRevenue, setDatasetsRevenue] = useState([]);
    const [datasetsProfit, setDatasetsProfit] = useState([]);

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
        labels: labelsProfitRevenue,
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

    const handleDataOrderChange = (type) => {
        if(type === 'months') {
            setLabelsRecentOrder([...chartLabels[1]]);
            setDatasetsRecentOrder(totalDatasetsRecentOrder[1]);
        } else{
            setLabelsRecentOrder([...chartLabels[0]]);
            setDatasetsRecentOrder(totalDatasetsRecentOrder[0]);
        }
    }

    const handleDataProfitAndRevenueChange = (type) => {
        if(type === 'months') {
            setLabelsProfitRevenue([...chartLabels[1]]);
            setDatasetsRevenue(totalDatasetsRevenue[1]);
            setDatasetsProfit(totalDatasetsProfit[1]);
        } else{
            setLabelsProfitRevenue([...chartLabels[0]]);
            setDatasetsRevenue(totalDatasetsRevenue[0]);
            setDatasetsProfit(totalDatasetsProfit[0]);
        }
    }

    // BE
    useEffect(() => {
        fetch(`${api_url}/dashboard`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                setTotalCustomer(data.totalUser);
                setTotalProfit(data.totalProfit);
                setTotalOrder(data.totalOrder);
                setTotalProduct(data.totalProductVariant);
                setBestSeller(data.bestSellers);
                setComments(data.topComment);
                setTotalDatasetsRecentOrder([[...data.orderByWeeks], [...data.orderByMonths]]);
                setDatasetsRecentOrder(data.orderByMonths);
                setNewCustomers(data.newNCustomer);

                setTotalDatasetsRevenue([[...data.revenueArray7Day], [...data.revenueArrayMonth]]);
                setDatasetsRevenue(data.revenueArrayMonth);

                setTotalDatasetsProfit([[...data.profitArray7Day], [...data.profitArrayMonth]]);
                setDatasetsProfit(data.profitArrayMonth);
            })
            .catch(err => console.log(err));
    }, []);

    // console.log(datasetsRecentOrder);
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
                                    <p className={clsx(styles['home-chart__item-para'])}>{totalCustomer}</p>
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
                                    <p className={clsx(styles['home-chart__item-para'])}> <FormatUSDCurrency price={totalProfit} /> </p>
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
                                    <p className={clsx(styles['home-chart__item-para'])}>{totalOrder}</p>
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
                                    <p className={clsx(styles['home-chart__item-para'])}>{totalProduct}</p>
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
                                <div className="dropdown">
                                    <button type="button"
                                            className={clsx(styles['dropdown-btn'], "btn p-0 hide dropdown-toggle hide-arrow")}
                                            data-bs-toggle="dropdown">
                                        {/*<i className="fa-solid fa-ellipsis-vertical"></i>*/}
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link onClick={() => handleDataOrderChange('months')}
                                              className="dropdown-item">
                                            Months
                                        </Link>
                                        <Link onClick={() => handleDataOrderChange('weeks')}
                                              className="dropdown-item">
                                            Weeks
                                        </Link>
                                    </div>
                                </div>
                                {/*<i className="fa-solid fa-ellipsis"></i>*/}
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
                                {bestSeller.map((item, index) => (
                                    <li key={`best-seller-${index}`}
                                        className={clsx(styles["home-information__best-seller-item"], 'mt-3')}>
                                        <div className={clsx(styles["home-information__best-seller-item__info"])}>
                                            <img src={item?.product_variant?.product_image} alt=""/>
                                            <div className={clsx(styles["home-information__best-seller-item__text"])}>
                                            <p>{item?.product_variant?.product_name}</p>
                                                <span>{item?.product_variant?.variant_quantity} items</span>
                                            </div>
                                        </div>
                                        {/*<div className={clsx(styles["home-information__best-seller-item__sell-out"])}>*/}
                                        {/*    <p>Sell out</p>*/}
                                        {/*    <span>{item.sell} items</span>*/}
                                        {/*</div>*/}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={clsx(styles["home-information__top-customer"], 'col-lg-3 col-md-4 col-sm-12')}>
                        <div className={clsx(styles["home-information__best-seller--inner"])}>
                            <div className={clsx(styles["home-information__title"])}>
                                <h5>New Customer</h5>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                            <ul className={clsx(styles["home-information__best-seller-list"])}>
                                {newCustomers?.map((item, index) => (
                                    <li key={`customer-new-${index}`}
                                        className={clsx(styles["home-information__best-seller-item"], 'mt-3')}>
                                        <div className={clsx(styles["home-information__best-seller-item__info"],
                                            styles['home-information__new-customer-item__info'])}>
                                            <img /*style={{width: 40, height: 40}}*/ src={item?.profile_image} alt=""/>
                                            <div className={clsx(styles["home-information__best-seller-item__text"])}>
                                                <p>{item?.fullName}</p>
                                                <span>{item?.email}</span>
                                            </div>
                                        </div>
                                        {/*<div className={clsx(styles["home-information__best-seller-item__sell-out"])}>*/}
                                        {/*    <p>Order</p>*/}
                                        {/*    <span>{item.order} items</span>*/}
                                        {/*</div>*/}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={clsx(styles["home-information__earning"], 'col-lg-6 col-md-4 col-sm-12')}>
                        <div className={clsx(styles["home-information__earning--inner"])}>
                            <div className={clsx(styles["home-information__earning-text"])}>
                                <h5>Earning</h5>
                                {/*<i className="fa-solid fa-ellipsis"></i>*/}
                                <div className="dropdown">
                                    <button type="button"
                                            className={clsx(styles['dropdown-btn'], "btn p-0 hide dropdown-toggle hide-arrow")}
                                            data-bs-toggle="dropdown">
                                        {/*<i className="fa-solid fa-ellipsis-vertical"></i>*/}
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link onClick={() => handleDataProfitAndRevenueChange('months')}
                                              className="dropdown-item">
                                            Months
                                        </Link>
                                        <Link onClick={() => handleDataProfitAndRevenueChange('weeks')}
                                              className="dropdown-item">
                                            Weeks
                                        </Link>
                                    </div>
                                </div>
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
                                {comments?.map((item, index) => (
                                    <li className={clsx(styles["home-information__comment-item"])}>
                                        <div className={clsx(styles["home-information__comment-item__info"])}>
                                            <div
                                                className={clsx(styles["home-information__comment-item__img"], 'col-lg-1 col-md-1 col-sm-1')}>
                                                <img className='h-100 w-100' src={item?.user_id?.profile_image} alt=""/>
                                            </div>
                                            <div
                                                className={clsx(styles["home-information__comment-item__text"], 'col-lg-11 col-md-11 col-sm-11')}>
                                                <p>{item?.user_id?.fullName}</p>
                                                {/*<div className={clsx(styles["home-information__comment-item__icon"])}>*/}
                                                {/*    <i className="fa-solid fa-star"></i>*/}
                                                {/*    <i className="fa-solid fa-star"></i>*/}
                                                {/*    <i className="fa-solid fa-star"></i>*/}
                                                {/*    <i className="fa-solid fa-star"></i>*/}
                                                {/*    <i className="fa-solid fa-star"></i>*/}
                                                {/*</div>*/}
                                                <span>To "{item?.product_id?.product_name}": {item?.content}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardHomePage;