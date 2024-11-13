import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useLayoutEffect, useState} from "react";
import clsx from "clsx";
import styles from "~/pages/b2b/product/DashboardManageProduct/DashboardManageProductPage.module.css";
import {Link} from "react-router-dom";
import {ConvertDateString, FormatUSDCurrency} from "~/utils";
import {Modal, Pagination} from "~/components/elements";

function DashboardManageOrderPage() {
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const itemsPerPage = 10;
    const rawData = [
        {id: 1, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
        {id: 2, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
        {id: 3, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
                {id: 1, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 2, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 3, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
                {id: 4, product_name: 'IPhone 11', category: 'mobile', discount: '0', quantity: 5, total_price: 500},
            ] },
        {id: 4, customer_name: 'Jake Jason', date_created: new Date('2024-11-13'), total_amount: 700, status: 'Pending', order_details: [
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
    const handleChangeTempData = (data) => {
        const key = Object.keys(data)[0];
        let value = data[key];
        if (key === 'birthday'){
            value = new Date(value);
        }
        setTempData({
            ...tempData,
            [key]: value
        });
    }

    return (
        <>
            <div className="manage-user p-5">
                <div className="manage-user__table">
                    <h3 className={clsx(styles["manage-user__table-title"], 'mb-5')}>
                        <p className='mb-0'>Order Settings/</p>
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage Product</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link to='/dashboard/product'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-user-gear"></i>
                            <p>Manage Product</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageOrder')} to='/dashboard/order'
                              className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
                            <i className="fa-solid fa-gears"></i>
                            <p>Manage Order</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageOrderTracking')} to='/dashboard/order-tracking'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-gears"></i>
                            <p>Order Tracking</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-5'>Order Management</h5>
                            {/*<div className={clsx(styles['user-table__btn'])}>*/}
                            {/*    <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}><i*/}
                            {/*        className="fa-brands fa-product-hunt"></i> Add Product*/}
                            {/*    </button>*/}
                            {/*</div>*/}
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
                                                    <i onClick={() => setTempData(item)} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-eye")}></i>
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
                title='Save change'
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
                                {/*<td>*/}
                                {/*    <p className={clsx(styles["user-table__action"])}>*/}
                                {/*        <i onClick={() => setTempData(item)} data-bs-toggle='modal'*/}
                                {/*           data-bs-target='#edit-modal'*/}
                                {/*           className={clsx(styles['user-table__action-edit'], "fa-solid fa-eye")}></i>*/}
                                {/*    </p>*/}
                                {/*</td>*/}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                {/*<Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>*/}
            </Modal>
        </>
    )
}

export default DashboardManageOrderPage;