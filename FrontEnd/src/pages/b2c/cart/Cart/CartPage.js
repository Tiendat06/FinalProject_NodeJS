import styles from './CartPage.module.css';
import stylesGrid from './CartPageGrid.module.css';
import {Modal, Pagination} from "~/components/elements";
import {FormatUSDCurrency} from "~/utils";

import clsx from "clsx";
import {useCallback, useEffect, useMemo, useState, useLayoutEffect} from "react";
import {Link} from "react-router-dom";

function CartPage(){
    const standardShip = 6;
    const expressShip = 10;
    const itemsPerPage = 4;
    const [items, setItems] = useState([
        { id: 1, name: "Laptop IdeaPad Slim 3", img: "/img/customer/product/laptop/lenovo-ideapadSlim3.png", price: 300, type: 'laptop', quantity: 3 },
        { id: 2, name: "IPhone 11", img: "/img/customer/product/mobile/iphone11.png", price: 300, type: 'mobile', quantity: 5 },
        { id: 3, name: "Loudspeaker Mini Xiaomi", img: "/img/customer/product/sound/sound-mini-siaomi.png", price: 300, type: 'sound', quantity: 4 },
        { id: 4, name: "Laptop Microsoft Surface", img: "/img/customer/product/laptop/microsoft-surface.png", price: 400, type: 'laptop', quantity: 2 },
        { id: 5, name: "Laptop Vivobook 15", img: "/img/customer/product/laptop/asus-vivobook15.png", price: 300, type: 'laptop', quantity: 2 },
        { id: 6, name: "Laptop HP Pavilion 15", img: "/img/customer/product/laptop/hp-pavilion15.png", price: 300, type: 'laptop', quantity: 2 },
        { id: 7, name: "Mouse G56D", img: "/img/customer/product/mouse/mouse-G56D.png", price: 300, type: 'mouse', quantity: 2 },
        { id: 8, name: "Samsung S23 Ultra", img: "/img/customer/product/mobile/samsung-S23Ultra.png", price: 300, type: 'mobile', quantity: 2 },
        { id: 9, name: "Lenovo K310", img: "/img/customer/product/keyboard/kb-lenovoK310.png", price: 300, type: 'keyboard', quantity: 2 },
        { id: 10, name: "Logitech M650", img: "/img/customer/product/mouse/mouse-logitechM650.png", price: 200, type: 'mouse', quantity: 2 },
    ]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemDeleted, setItemDeleted] = useState({});
    const [shippingFees, setShippingFees] = useState(Number(sessionStorage.getItem('shippingFees')) || 6);
    const [taxFees, setTaxFees] = useState(0.1);
    const setQuantity = (itemId, newQuantity) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item['id'] === itemId
                    ? { ...item, quantity: Math.max(1, newQuantity) }
                    : item
            )
        );
    };

    const totalBill = useMemo(() => {
        const itemsTotal = items.reduce((total, item) => total + (item['price'] * item['quantity']), 0);
        const taxTotal = itemsTotal * taxFees;
        return itemsTotal + taxTotal + shippingFees;
    }, [items, shippingFees, taxFees])

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useLayoutEffect(() => {
        // setPageCount(Math.ceil(items.length / itemsPerPage));
        // setCurrentItems(items.slice(0, itemsPerPage));
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setCurrentItems(items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [items, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    const [coupon, setCoupon] = useState('')
    const [couponsList, setCouponsList] = useState([
        {id: '1', name: 'HAPPY10', discount: 0.25},
        {id: '2', name: 'HAPPY20', discount: 0.5},
        {id: '3', name: 'HAPPY30', discount: 0.7},
    ]);
    const onClickAddCoupon = () => {
        console.log(coupon);
        setCoupon('');
    }

    return (
        <>
            <div className={clsx(styles['cart'])}>
                <table className={clsx(styles['cart-table'], "table")}>
                    <thead>
                    <tr>
                        <th className={clsx(styles['cart-title'])}>Product</th>
                        <th className={clsx(styles['cart-title'], 'text-center')}>Price</th>
                        <th className={clsx(styles['cart-title'], 'text-center')}>Quantity</th>
                        <th className={clsx(styles['cart-title'], 'text-center')}>Total</th>
                    </tr>
                    </thead>

                    <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index} className={clsx(styles['cart-item'])}>
                            <td className={clsx(styles["cart-product"], 'col-lg-6 col-md-6 col-sm-6 pb-4 pt-4')}>
                                <div className="d-flex align-items-center">
                                    <img className={clsx(styles["cart-product__img"])}
                                         src={`${item['img']}`} alt="" srcSet=""/>
                                    <p className={clsx(styles["cart-product__name"], 'mb-0')}>{item['name']}</p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-price"], 'col-lg-2 col-md-2 col-sm-2 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p style={{fontWeight: "bold"}} className="mb-0"><FormatUSDCurrency
                                        price={item['price']}/></p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-quantity"], 'col-lg-1 col-md-1 col-sm-1 text-center pb-4 pt-4')}>
                                <div
                                    className={clsx(stylesGrid['cart-quantity--inner'], "d-flex align-items-center justify-content-center h-100")}>
                                    <div
                                        className="form-group col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-between">
                                        <div className={clsx(styles["cart-quantity__group"])}>
                                            <i onClick={() => setQuantity(item['id'], item['quantity'] - 1)}
                                               className={clsx("fa-solid fa-minus disabled-highlight", styles['cart-quantity__minus'])}></i>
                                            <input
                                                value={item['quantity']}
                                                min="1"
                                                onChange={e => setQuantity(item['id'], Math.max(1, Number(e.target.value)))}
                                                type="number"
                                                id="quan-details"
                                                className={clsx(styles["cart-quantity__inp"], 'form-control')}
                                            />
                                            <i onClick={() => setQuantity(item['id'], item['quantity'] + 1)}
                                               className={clsx("fa-solid fa-plus disabled-highlight", styles['cart-quantity__plus'])}></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-total"], 'col-lg-2 col-md-2 col-sm-2 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p style={{fontWeight: "bold"}} className="mb-0"><FormatUSDCurrency
                                        price={item['price'] * item['quantity']}/></p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-close"], 'col-lg-1 col-md-1 col-sm-1 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p onClick={() => setItemDeleted(item)} data-bs-target="#cart-remove"
                                       data-bs-toggle="modal" className="mb-0"><i
                                        className={clsx(styles['cart-close__icon'], "fa-solid fa-x")}></i></p>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>

            <div className="cart-transaction d-flex flex-wrap mt-5">
                <div className={clsx(styles["cart-more"], 'col-lg-6 col-md-12 col-sm-12')}>
                    <div className="cart-more__shop">
                        <button className={clsx(styles["cart-more__shop-btn"], 'btn d-flex align-items-center')}>
                            <i className={clsx(styles["cart-more__shop-icon"], 'fa-solid fa-store d-none')}></i>
                            <Link to='/shop'>CONTINUE SHOPPING</Link>
                        </button>
                    </div>

                    <div className="cart-more__delivery mt-5">
                        <h6 className="mb-3">Delivery Options</h6>
                        <div className={clsx(styles["cart-more__delivery-options"])}>
                            <div onClick={() => {
                                setShippingFees(standardShip);
                                sessionStorage.setItem('shippingFees', standardShip.toString());
                            }}
                                 className={clsx(styles["cart-more__delivery-options__items"], stylesGrid['cart-more__delivery-options__items'],
                                     (shippingFees === standardShip && styles['cart-more__delivery-options__items--choose']))}>

                                <div className={clsx(styles["cart-more__delivery-options__text"])}>
                                    <p>Standard</p>
                                    <p>-</p>
                                    <p>5 days</p>
                                </div>
                                <div className={clsx(styles["cart-more__delivery-options__price"])}>
                                    <p><FormatUSDCurrency price={standardShip}/></p>
                                </div>
                            </div>
                            <div onClick={() => {
                                setShippingFees(expressShip);
                                sessionStorage.setItem('shippingFees', expressShip.toString());
                            }}
                                 className={clsx(styles["cart-more__delivery-options__items"], stylesGrid['cart-more__delivery-options__items'],
                                     (shippingFees === expressShip && styles['cart-more__delivery-options__items--choose']))}>
                                <div className={clsx(styles["cart-more__delivery-options__text"])}>
                                    <p>Express</p>
                                    <p>-</p>
                                    <p>2 days</p>
                                </div>
                                <div className={clsx(styles["cart-more__delivery-options__price"])}>
                                    <p><FormatUSDCurrency price={expressShip}/></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-more__coupon mt-5">
                        <h6 className="mb-3">Discount Coupon</h6>
                        <div className="form-group d-flex align-items-center">
                            <input placeholder='Enter your coupon code' type="text"
                                   value={coupon}
                                   onChange={e => setCoupon(e.target.value)}
                                   className={clsx(styles['cart-more__coupon-inp'])}/>
                            <button onClick={onClickAddCoupon}
                                    className={clsx(styles["cart-more__coupon-btn"], stylesGrid['cart-more__coupon-btn'])}>APPLY
                                COUPON
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={clsx(styles['cart-payment'], stylesGrid['cart-payment'], 'col-lg-6 col-md-12 col-sm-12')}>
                    <div className={clsx(styles["cart-payment__info"])}>
                        <h4 className="mb-0">Cart Total</h4>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Coupon</p>
                            <div className={clsx(styles["cart-payment__coupon-list"])}>
                                {couponsList.map((item, index) => (
                                    <p key={index}
                                       className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>{item['name']}</p>
                                ))}
                            </div>
                        </div>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Tax</p>
                            <p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>{(taxFees * 100).toFixed(0)}%</p>
                        </div>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Shipping</p>
                            <p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>{shippingFees !== 0 ?
                                <FormatUSDCurrency price={shippingFees}/> : 'FREE'}</p>
                        </div>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Total</p>
                            <p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>
                                <FormatUSDCurrency price={totalBill}/></p>
                        </div>
                        <div className={clsx(styles["cart-payment__btn"], 'mt-4')}>
                            <button className={clsx(styles['cart-payment__btn--inner'])}><Link to='/shop/checkout'>PROCEED
                                TO CHECKOUT</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                id="cart-remove"
                isStatic={true}
                title="Save change"
                labelBtnClose="Close"
                closeClassName="btn btn-secondary"
                labelBtnSave="Delete"
                saveClassName="btn btn-danger"
            >
                <p className="mb-0 text-dark">Are you sure to delete '{itemDeleted['name']}'?</p>
            </Modal>
        </>
    )
}

export default CartPage;