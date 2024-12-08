import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";
import clsx from "clsx";
import styles from "./DashboardManageOrderPage.module.css";
import {Link} from "react-router-dom";
import {ConvertDateString, FormatUSDCurrency, ConvertTime} from "~/utils";
import {Modal, Pagination} from "~/components/elements";
import reducer, {initState} from "./reducers/reducers";
import details_reducer, {detailsInitState} from "./reducers/details_reducers";
import status_reducers, {statusInitState} from "./reducers/status_reducers";

import {getOrders, setOrder} from './actions/actions';
import {getOrderDetailsData} from "./actions/details_actions";
import {getStatusDetail, updateStatusDetailData} from "./actions/status_actions";
import {toast} from "react-toastify";

function DashboardManageOrderPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();
    const [state, dispatch] = useReducer(reducer, initState);
    const {order, orderList} = state;

    const [detailsState, detailsDispatch] = useReducer(details_reducer, detailsInitState);
    const {orderDetails, orderDetailsList} = detailsState;

    const [statusDetailsState, statusDetailsDispatch] = useReducer(status_reducers, statusInitState);
    const {statusDetails, statusDetailsList} = statusDetailsState;

    const itemsPerPage = 20;
    const [tempOrder, setTempOrder] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [startFilter, setStartFilter] = useState("");
    const [endFilter, setEndFilter] = useState("");

    const filterDataByDate = () => {
        console.log('hi world');

        const filterStart = new Date(startFilter);
        const filterEnd = new Date(endFilter);
        // console.log({filterStart, filterEnd});

        const filteredData = tempOrder?.filter(item => {
            const orderDate = new Date(item?.createdAt);
            // console.log({orderDate})

            return orderDate >= filterStart && orderDate <= filterEnd;
        });
        // console.log(filteredData);
        dispatch(getOrders(filteredData));
    };

    useLayoutEffect(() => {
        setPageCount(Math.ceil(orderList.length / itemsPerPage));
        setCurrentItems(orderList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [orderList, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    // BE
    useEffect(() => {
        fetch(`${api_url}/order`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if(data.status) {
                    setTempOrder(data.data);
                    dispatch(getOrders(data.data));
                }
            })
            .catch(error => console.log(error));
    }, []);

    const getOrderDetails = (item) => {
        dispatch(setOrder(item));
        fetch(`${api_url}/order/details/${item._id}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status) detailsDispatch(getOrderDetailsData(data.data))
            })
            .catch(error => console.log(error));
    }

    const getOrderStatus = (item) => {
        dispatch(setOrder(item))
        fetch(`${api_url}/order/status/${item._id}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                statusDetailsDispatch(getStatusDetail(data.data));
            })
            .catch(error => console.log(error));
    }

    const updateStatusDetails = (item) => {
        fetch(`${api_url}/order/order-status/${item.order_id._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                statusId: item.status_id._id,
                order_status_name: item.order_id.status,
            }),
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                if(data.status) {
                    statusDetailsDispatch(updateStatusDetailData(data.data));
                    setTempOrder(data.newOrderUpdated);
                    dispatch(getOrders(data.newOrderUpdated));
                    // newOrderUpdated
                    toast.success(data.message);
                } else{
                    toast.error(data.message);
                }
            })
            .catch(error => console.log(error));
    }

    // console.log({order, orderDetailsList})

    return (
        <>
            <div className="manage-user p-5">
                <div className="manage-user__table">
                    <h3 className={clsx(styles["manage-user__table-title"], 'mb-5')}>
                        <p className='mb-0'>Order Settings/</p>
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage Order</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link onClick={() => setDashBoardSubLink('manageProduct')} to='/dashboard/product'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-user-gear"></i>
                            <p>Manage Product</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageOrder')} to='/dashboard/order'
                              className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
                            <i className="fa-solid fa-gears"></i>
                            <p>Manage Order</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageCoupon')} to='/dashboard/coupon'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-ticket"></i>
                            <p>Manage Coupon</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageCategory')} to='/dashboard/category'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-list"></i>
                            <p>Manage Category</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>Order Management</h5>
                            <div className={clsx(styles["user-time"])}>
                                <div className={clsx(styles["user-time__date"], '')}>
                                    <div className="form-group mr-15">
                                        <label htmlFor="date-from">From</label>
                                        <input onChange={e => setStartFilter(e.target.value)}
                                               value={startFilter || ConvertDateString(Date.now(), 2)} type="date" id='date-from' className={clsx(styles["user-time__inp"], 'form-control')}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date-to">To</label>
                                        <input onChange={e => setEndFilter(e.target.value)}
                                            value={endFilter || ConvertDateString(Date.now(), 2)} type="date" id='date-to' className={clsx(styles["user-time__inp"], 'form-control')}/>
                                    </div>
                                </div>
                                <div className={clsx(styles["user-time__btn"], 'col-kg-12 col-md-12 col-sm-12')}>
                                    <button onClick={filterDataByDate} className='btn'>Find</button>
                                </div>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                            <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>DATE CREATED</th>
                                        <th>CUSTOMER NAME</th>
                                        <th>CUSTOMER PHONE</th>
                                        <th>CUSTOMER ADDRESS</th>
                                        <th>COUPON</th>
                                        <th>STATUS</th>
                                        <th className='text-center'>ACTIONS</th>
                                    </tr>
                                    </thead>
                                <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={`order-${index}`}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{ConvertDateString(item?.createdAt)}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item?.address_id?.fullName}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item?.address_id?.phone_number}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item?.address_id?.address}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item?.coupon_id?.coupon_name || 'X'}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.status}</p>
                                            </td>

                                            <td>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <div>
                                                        <i onClick={() => getOrderDetails(item)} data-bs-toggle='modal'
                                                           data-bs-target='#edit-modal'
                                                           className={clsx(styles['user-table__action-edit'], "fa-solid fa-eye text-primary")}></i>
                                                    </div>
                                                    <div>
                                                        <i onClick={() => getOrderStatus(item)}
                                                           data-bs-toggle='modal'
                                                           data-bs-target='#tracking-modal'
                                                           className={clsx(styles['user-table__action-edit'], "fa-solid fa-box text-danger")}></i>
                                                    </div>
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
                            <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                id='edit-modal'
                title='Order Details'
                labelBtnSave='Save'
                closeClassName='btn btn-secondary'
                labelBtnClose='Close'
                isStatic={true}
                modalTypeClassName='modal-xl'
                saveClassName='d-none'
            >
                <div className={clsx(styles["table-manage"])}>
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>PRODUCT NAME</th>
                            <th>COLOR</th>
                            <th>RETAIL PRICE</th>
                            <th>QUANTITY</th>
                            <th>TOTAL AMOUNT</th>
                        </tr>
                        </thead>
                        <tbody>
                        {orderDetailsList.map((item, index) => (
                            <tr key={`od-${index}`}>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item?.product_variant_id?.product_name}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item?.product_variant_id?.product_color}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item?.product_variant_id?.retail_price}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item?.quantity}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}><FormatUSDCurrency price={item?.quantity * item?.product_variant_id?.retail_price} /></p>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Modal>

            <Modal
                id='tracking-modal'
                title='Order Tracking'
                labelBtnClose='Close'
                closeClassName='btn btn-outline-secondary'
                isStatic={true}
                modalTypeClassName='modal-xl'
                saveClassName='d-none'
            >
                <div className={clsx(styles["order-tracking__details"])}>
                    {statusDetailsList.map((item, index) => (
                        <div className={clsx(styles["order-tracking__details--outer"], 'col-lg-3 col-md-3 col-sm-3')}>
                            <div className={clsx(styles["order-tracking__details-item"])}>
                                <div
                                    className={clsx(styles["order-tracking__details-line"], item?.is_check && (styles['order-tracking__details-line--pass']))}></div>
                                <div
                                    className={clsx(styles["order-tracking__details-text"], item?.is_check && (styles['order-tracking__details-text--pass']))}>
                                    <p><i className="fa-solid fa-check"></i></p>
                                </div>
                                <div
                                    className={clsx(styles["order-tracking__details-line"], item?.is_check && (styles['order-tracking__details-line--pass']))}></div>
                            </div>
                            <div className={clsx(styles["order-tracking__details-info"], 'mt-3')}>
                                <h6 className='mb-0 text-center'>{item?.status_id?.status}</h6>
                                {item?.createdAt &&
                                <p className='mb-0 text-center'>{ConvertTime(item?.createdAt)}</p>
                                }
                                <div className={clsx(styles['order-tracking__details-btn'], 'mt-3')}>
                                    {!item?.is_check &&
                                    <button onClick={() => updateStatusDetails(item)}>Confirm</button>
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    )
}

export default DashboardManageOrderPage;