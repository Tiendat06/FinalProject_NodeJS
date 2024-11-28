import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useLayoutEffect, useState} from "react";
import clsx from "clsx";
import styles from "./DashboardManageOrderPage.module.css";
import {Link} from "react-router-dom";
import {ConvertDateString, FormatUSDCurrency} from "~/utils";
import {Modal, Pagination} from "~/components/elements";

function DashboardManageOrderPage() {
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const itemsPerPage = 20;
    const rawData = [
        {id: 1, order_status: 1, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
        {id: 2, order_status: 1, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
        {id: 3, order_status: 2, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
        {id: 4, order_status: 3, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
    ];
    const [userData, setUserData] = useState(rawData);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useLayoutEffect(() => {
        setPageCount(Math.ceil(userData.length / itemsPerPage));
        setCurrentItems(userData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [userData, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    const [tempData, setTempData] = useState({});
    const handleOrderStatus = (data) => {
        setOrderStatus(data.order_status);
    }

    const [orderStatus, setOrderStatus] = useState(1)

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
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>Order Management</h5>
                            <div className={clsx(styles["user-time"])}>
                                <div className={clsx(styles["user-time__date"], '')}>
                                    <div className="form-group mr-15">
                                        <label htmlFor="date-from">From</label>
                                        <input value={ConvertDateString(Date.now(), 2)} type="date" id='date-from' className={clsx(styles["user-time__inp"], 'form-control')}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="date-to">To</label>
                                        <input value={ConvertDateString(Date.now(), 2)} type="date" id='date-to' className={clsx(styles["user-time__inp"], 'form-control')}/>
                                    </div>
                                </div>
                                <div className={clsx(styles["user-time__btn"], 'col-kg-12 col-md-12 col-sm-12')}>
                                    <button className='btn'>Find</button>
                                </div>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                            <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>DATE CREATED</th>
                                        <th>CUSTOMER NAME</th>
                                        <th>STATUS</th>
                                        <th>TOTAL AMOUNT</th>
                                        <th className='text-center'>ACTIONS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.id}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{ConvertDateString(item.date_created)}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.customer_name}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.status}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}><FormatUSDCurrency price={item.total_amount} /></p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <div>
                                                        <i onClick={() => setTempData(item)} data-bs-toggle='modal'
                                                           data-bs-target='#edit-modal'
                                                           className={clsx(styles['user-table__action-edit'], "fa-solid fa-eye text-primary")}></i>
                                                    </div>

                                                    <div>
                                                        <i onClick={() => handleOrderStatus(item)} data-bs-toggle='modal'
                                                           data-bs-target='#tracking-modal' className={clsx(styles['user-table__action-edit'], "fa-solid fa-box text-danger")}></i>
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
                closeClassName='d-none'
                isStatic={true}
                modalTypeClassName='modal-xl'
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className={clsx(styles["table-manage"])}>
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>PRODUCT NAME</th>
                            <th>CATEGORY</th>
                            <th>QUANTITY</th>
                            <th>DISCOUNT</th>
                            <th>TOTAL AMOUNT</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tempData.order_details?.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item.id}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item.product_name}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item.category}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item.quantity}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}>{item.discount}</p>
                                </td>
                                <td>
                                    <p className={clsx(styles['user-table__text'])}><FormatUSDCurrency price={item.total_price} /></p>
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
                    <div className={clsx(styles["order-tracking__details--outer"], 'col-lg-3 col-md-3 col-sm-3')}>
                        <div className={clsx(styles["order-tracking__details-item"])}>
                            <div
                                className={clsx(styles["order-tracking__details-line"], styles['order-tracking__details-line--pass'])}></div>
                            <div
                                className={clsx(styles["order-tracking__details-text"], styles['order-tracking__details-text--pass'])}>
                                <p><i className="fa-solid fa-check"></i></p>
                            </div>
                            <div
                                className={clsx(styles["order-tracking__details-line"], styles['order-tracking__details-line--pass'])}></div>
                        </div>
                        <div className={clsx(styles["order-tracking__details-info"], 'mt-3')}>
                            <h6 className='mb-0 text-center'>Pending</h6>
                            <p className='mb-0 text-center'>05:03</p>
                            <div className={clsx(styles['order-tracking__details-btn'], '')}>
                                {/*<button>Confirm</button>*/}
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles["order-tracking__details--outer"], 'col-lg-3 col-md-3 col-sm-3')}>
                        <div className={clsx(styles["order-tracking__details-item"])}>
                            <div
                                className={clsx(styles["order-tracking__details-line"], orderStatus >= 2 && (styles['order-tracking__details-line--pass']))}></div>
                            <div
                                className={clsx(styles["order-tracking__details-text"], orderStatus >= 2 && (styles['order-tracking__details-text--pass']))}>
                                <p><i className="fa-solid fa-check"></i></p>
                            </div>
                            <div
                                className={clsx(styles["order-tracking__details-line"], orderStatus >= 2 && (styles['order-tracking__details-line--pass']))}></div>
                        </div>
                        <div className={clsx(styles["order-tracking__details-info"], 'mt-3')}>
                            <h6 className='mb-0 text-center'>Confirmed</h6>
                            <p className='mb-0 text-center'>--:--</p>
                            <div className={clsx(styles['order-tracking__details-btn'], '')}>
                                <button
                                    onClick={(orderStatus === 1) ? (() => setOrderStatus(2)) : undefined}>Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles["order-tracking__details--outer"], 'col-lg-3 col-md-3 col-sm-3')}>
                        <div className={clsx(styles["order-tracking__details-item"])}>
                            <div
                                className={clsx(styles["order-tracking__details-line"], orderStatus >= 3 && (styles['order-tracking__details-line--pass']))}></div>
                            <div
                                className={clsx(styles["order-tracking__details-text"], orderStatus >= 3 && (styles['order-tracking__details-text--pass']))}>
                                <p><i className="fa-solid fa-check"></i></p>
                            </div>
                            <div
                                className={clsx(styles["order-tracking__details-line"], orderStatus >= 3 && (styles['order-tracking__details-line--pass']))}></div>
                        </div>
                        <div className={clsx(styles["order-tracking__details-info"], 'mt-3')}>
                            <h6 className='mb-0 text-center'>Shipping</h6>
                            <p className='mb-0 text-center'>--:--</p>
                            <div className={clsx(styles['order-tracking__details-btn'], '')}>
                                <button
                                    onClick={(orderStatus === 2) ? (() => setOrderStatus(3)) : undefined}>Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles["order-tracking__details--outer"], 'col-lg-3 col-md-3 col-sm-3')}>
                        <div className={clsx(styles["order-tracking__details-item"])}>
                            <div
                                className={clsx(styles["order-tracking__details-line"], orderStatus >= 4 && (styles['order-tracking__details-line--pass']))}></div>
                            <div
                                className={clsx(styles["order-tracking__details-text"], orderStatus >= 4 && (styles['order-tracking__details-text--pass']))}>
                                <p><i className="fa-solid fa-check"></i></p>
                            </div>
                            <div
                                className={clsx(styles["order-tracking__details-line"], orderStatus >= 4 && (styles['order-tracking__details-line--pass']))}></div>
                        </div>
                        <div className={clsx(styles["order-tracking__details-info"], 'mt-3')}>
                            <h6 className='mb-0 text-center'>Delivered</h6>
                            <p className='mb-0 text-center'>--:--</p>
                            <div className={clsx(styles['order-tracking__details-btn'], '')}>
                                <button
                                    onClick={(orderStatus === 3) ? (() => setOrderStatus(4)) : undefined}>Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default DashboardManageOrderPage;