import styles from './ManageOrder.module.css';
import styleGrid from './ManageOrderGrid.module.css';
import clsx from "clsx";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {FormatUSDCurrency} from "~/utils";
import {Pagination} from "~/components/elements";
import {Link} from "react-router-dom";

function ManageOrder() {
    const itemsPerPage = 4;
    const rawData = [
        { id: 1, name: "Laptop IdeaPad Slim 3", status: 'Confirmed' , img: "/img/customer/product/laptop/lenovo-ideapadSlim3.png", price: 300, type: 'laptop', quantity: 3 },
        { id: 2, name: "IPhone 11", status: 'Pending' , img: "/img/customer/product/mobile/iphone11.png", price: 300, type: 'mobile', quantity: 5 },
        { id: 3, name: "Loudspeaker Mini Xiaomi", status: 'Confirmed' , img: "/img/customer/product/sound/sound-mini-siaomi.png", price: 300, type: 'sound', quantity: 4 },
        { id: 4, name: "Laptop Microsoft Surface", status: 'Pending' , img: "/img/customer/product/laptop/microsoft-surface.png", price: 400, type: 'laptop', quantity: 2 },
        { id: 5, name: "Laptop Vivobook 15", status: 'Shipping' , img: "/img/customer/product/laptop/asus-vivobook15.png", price: 300, type: 'laptop', quantity: 2 },
        { id: 6, name: "Laptop HP Pavilion 15", status: 'Delivered' , img: "/img/customer/product/laptop/hp-pavilion15.png", price: 300, type: 'laptop', quantity: 2 },
        { id: 7, name: "Mouse G56D", status: 'Shipping' , img: "/img/customer/product/mouse/mouse-G56D.png", price: 300, type: 'mouse', quantity: 2 },
        { id: 8, name: "Samsung S23 Ultra", status: 'Cancel' , img: "/img/customer/product/mobile/samsung-S23Ultra.png", price: 300, type: 'mobile', quantity: 2 },
        { id: 9, name: "Lenovo K310", status: 'Delivered' , img: "/img/customer/product/keyboard/kb-lenovoK310.png", price: 300, type: 'keyboard', quantity: 2 },
        { id: 10, name: "Logitech M650", status: 'Cancel' , img: "/img/customer/product/mouse/mouse-logitechM650.png", price: 200, type: 'mouse', quantity: 2 },
    ];
    const [items, setItems] = useState(rawData);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [filteredData, setFilteredData] = useState(items);

    const [orderType, setOrderType] = useState('all');
    const [searchInput, setSearchInput] = useState('');

    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);
    useLayoutEffect(() => {
        let filtered = items;
        if(orderType !== 'all'){
            filtered = items.filter(item => (item.status === orderType));
            console.log({filtered, orderType});
        }
        setFilteredData(filtered);
        setPageCount(Math.ceil(filtered.length / itemsPerPage));
        setCurrentItems(filtered.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [items, currentPage, orderType]);

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
                            {currentItems.map((item, index) => (
                                <li key={index} className={clsx(styles["profile-order__item"])}>
                                    <p className={clsx(styles['profile-order__status'], 'col-lg-12 col-md-12 col-sm-12 mb-1')}>{item.status}</p>
                                    <div
                                        className={clsx(styles["profile-order__item-order"], 'col-lg-12 col-md-12 col-sm-12 mt-3 mb-3 d-flex flex-wrap')}>
                                        <div
                                            className={clsx(styles["profile-order__item-info"], 'col-lg-9 col-md-9 col-sm-9')}>
                                            <div
                                                className={clsx(styles["profile-order__item-product"], 'position-relative')}>
                                                <img className={clsx(styles['profile-order__item-img'])}
                                                     src={item.img} alt=""/>
                                                <span>x{item.quantity}</span>
                                            </div>
                                            <p className={clsx(styles["profile-order__item-text"])}>{item.name}</p>
                                        </div>
                                        <p className={clsx(styles["profile-order__item-price"], 'col-lg-3 col-md-3 col-sm-3 mb-0')}>
                                            <FormatUSDCurrency price={item.price}/>
                                        </p>
                                    </div>
                                    <div
                                        className={clsx(styles['profile-order__total'], "col-lg-12 col-md-12 col-sm-12 mt-2 pt-2")}>
                                        <p className={clsx(styles['profile-order__total-text'], 'mb-1')}>Total: <FormatUSDCurrency
                                            price={item.price * item.quantity}/></p>
                                        <div className={clsx(styles["profile-order__total-btn"])}>
                                            <button
                                                className={clsx(styles['profile-order__total-btn--reorder'], 'mr-15')}><Link to='#'>Re-Order</Link>
                                            </button>
                                            <button className={clsx(styles['profile-order__total-btn--view'])}><Link to={`/shop/details/${item.id}`}>View Details</Link>
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
        </>
    )
}

export default ManageOrder;