import styles from './ManageOrder.module.css';
import styleGrid from './ManageOrderGrid.module.css';
import clsx from "clsx";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {FormatUSDCurrency, FormatECommerceDate} from "~/utils";
import {Modal, Pagination} from "~/components/elements";
import {Link} from "react-router-dom";
import {useShoppingContext} from "~/context/ShoppingContext";

function ManageOrder() {
    const itemsPerPage = 4;
    const api_url = process.env.REACT_APP_API_URL;
    const {userData} = useShoppingContext();
    const user_id = userData._id;

    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [filteredData, setFilteredData] = useState(items);

    const [orderType, setOrderType] = useState('all');
    const [searchInput, setSearchInput] = useState('');

    const [currentOrderDetails, setCurrentOrderDetails] = useState([]);

    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);
    useLayoutEffect(() => {
        let filtered = items;
        if(orderType !== 'all'){
            filtered = items.filter(item => (item.status === orderType));
            // console.log({filtered, orderType});
        }
        setFilteredData(filtered);
        setPageCount(Math.ceil(filtered?.length / itemsPerPage));
        setCurrentItems(filtered?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [items, currentPage, orderType]);

    // BE
    useEffect(() => {
        fetch(`${api_url}/order/history?user_id=${user_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if(data.status) setItems(data.data);
            })
            .catch(err => console.log(err));
    }, []);

    const handleViewsOrderDetails = (item) => {
        fetch(`${api_url}/order/details/${item._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) setCurrentOrderDetails(data.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <>
            <div className="profile-order">
                <h5 style={{fontWeight: "normal"}}>Order Information</h5>
                <div className={clsx(styles["profile-order__content"])}>
                    <ul className={clsx(styles["profile-order__type-list"])}>
                        <li onClick={() => setOrderType('all')} className={clsx(styles["profile-order__type-item"], 'col-lg-2 col-md-2 col-sm-12', (orderType === 'all' && styles['profile-order__type-item--click']))}>All</li>
                        <li onClick={() => setOrderType('Pending')} className={clsx(styles["profile-order__type-item"], 'col-lg-2 col-md-2 col-sm-12', (orderType === 'Pending' && styles['profile-order__type-item--click']))}>Pending</li>
                        <li onClick={() => setOrderType('Confirmed')} className={clsx(styles["profile-order__type-item"], 'col-lg-2 col-md-2 col-sm-12', (orderType === 'Confirmed' && styles['profile-order__type-item--click']))}>Confirmed</li>
                        <li onClick={() => setOrderType('Shipping')} className={clsx(styles["profile-order__type-item"], 'col-lg-2 col-md-2 col-sm-12', (orderType === 'Shipping' && styles['profile-order__type-item--click']))}>Shipping</li>
                        <li onClick={() => setOrderType('Delivered')} className={clsx(styles["profile-order__type-item"], 'col-lg-2 col-md-2 col-sm-12', (orderType === 'Delivered' && styles['profile-order__type-item--click']))}>Delivered</li>
                        <li onClick={() => setOrderType('Cancel')} className={clsx(styles["profile-order__type-item"], 'col-lg-2 col-md-2 col-sm-12', (orderType === 'Cancel' && styles['profile-order__type-item--click']))}>Cancel</li>
                    </ul>

                    <div className={clsx(styles["profile-order__type-search"], 'd-flex position-relative')}>
                        <i className="fa-solid fa-magnifying-glass position-absolute"></i>
                        <input value={searchInput} onChange={e => setSearchInput(e.target.value)} type="text" placeholder='Search by product name'
                               className={clsx(styles['profile-order__type-inp'], 'form-control w-100')}/>
                        <div className={clsx(styles["profile-order__type-search__btn"])}>Search order</div>
                    </div>

                    <div className={clsx(styles["profile-order__details"])}>
                        <ul className={clsx(styles["profile-order__list"])}>
                            {currentItems?.map((item, index) => (
                                <li key={index} className={clsx(styles["profile-order__item"])}>
                                    <p className={clsx(styles['profile-order__status'], 'col-lg-12 col-md-12 col-sm-12 mb-1')}>{item.status}</p>
                                    <div
                                        className={clsx(styles["profile-order__item-order"], 'col-lg-12 col-md-12 col-sm-12 mt-3 mb-3 d-flex flex-wrap')}>
                                        <div
                                            className={clsx(styles["profile-order__item-info"], 'col-lg-9 col-md-9 col-sm-9')}>
                                            <div
                                                className={clsx(styles["profile-order__item-product"], 'position-relative')}>
                                                <img className={clsx(styles['profile-order__item-img'])}
                                                     src="/img/logo/logo.png" alt=""/>
                                                {/*<span>x{item.quantity}</span>*/}
                                            </div>
                                            <p className={clsx(styles["profile-order__item-text"])}>{(item._id).substring(0, 5).toUpperCase()}-{((item._id).substring((item._id).length - 5)).toUpperCase()}</p>
                                        </div>
                                        <p className={clsx(styles["profile-order__item-price"], 'col-lg-3 col-md-3 col-sm-3 mb-0')}>
                                            {/*<FormatUSDCurrency price={item.price}/>*/}
                                            {FormatECommerceDate(item.createdAt)}
                                        </p>
                                    </div>
                                    <div
                                        className={clsx(styles['profile-order__total'], "col-lg-12 col-md-12 col-sm-12 mt-2 pt-2")}>
                                        {/*<p className={clsx(styles['profile-order__total-text'], 'mb-1')}>Total: <FormatUSDCurrency*/}
                                        {/*    price={item.price * item.quantity}/></p>*/}
                                        <div className={clsx(styles["profile-order__total-btn"])}>
                                            {/*<button*/}
                                            {/*    className={clsx(styles['profile-order__total-btn--reorder'], 'mr-15')}><Link to='#'>Re-Order</Link>*/}
                                            {/*</button>*/}
                                            <button onClick={() => handleViewsOrderDetails(item)} data-bs-toggle='modal' data-bs-target='#order-details-modal' className={clsx(styles['profile-order__total-btn--view'])}><Link>View Details</Link>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
                    </div>
                </div>
            </div>

            <Modal
                id='order-details-modal'
                closeClassName='btn btn-secondary'
                labelBtnClose='Close'
                saveClassName='d-none'
                isStatic={true}
                modalTypeClassName='modal-xl'
                modalContentClassName={`${styles['order-details__content']}`}
                // modalFooterClassName="d-none"
                modalHeaderClassName="d-none"
            >
                <table className="table table-hover table-bordered mt-3">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th className='text-center'>NAME</th>
                        <th className='text-center'>COLOR</th>
                        <th className='text-center'>QUANTITY</th>
                        <th className='text-center'>RETAIL PRICE</th>
                        <th className='text-center'>TOTAL</th>
                    </tr>
                    </thead>
                    <tbody>
                        {currentOrderDetails?.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <p style={{fontSize: 14}} className='mb-0'>{index + 1}</p>
                                </td>
                                <td>
                                    <div style={{cursor: "pointer"}} className="d-flex flex-wrap">
                                        <img width="20" style={{objectFit: "contain"}} src={item.product_variant_id.product_image} alt=""/>
                                        <p style={{fontSize: 14}} className='text-center mb-0 ml-15'>{item.product_variant_id.product_name}</p>
                                    </div>
                                </td>
                                <td>
                                    <p style={{fontSize: 14}} className='text-center mb-0'>{item.product_variant_id.product_color}</p>
                                </td>
                                <td>
                                    <p style={{fontSize: 14}} className='text-center mb-0'>x {item.quantity}</p>
                                </td>
                                <td>
                                    <p style={{fontSize: 14}} className='text-center mb-0'>
                                        <FormatUSDCurrency price={item.product_variant_id.retail_price} />
                                    </p>
                                </td>
                                <td>
                                    <p style={{fontSize: 14}} className='text-center mb-0'>
                                        <FormatUSDCurrency price={item.quantity * item.product_variant_id.retail_price} />
                                    </p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal>
        </>
    )
}

export default ManageOrder;