import styles from './CartPage.module.css';
import {Modal, Pagination} from "~/components/elements";

import clsx from "clsx";
import {useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

function CartPage(){
    const itemsPerPage = 4;
    const [itemDeleted, setItemDeleted] = useState({});
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
    const setQuantity = (itemId, newQuantity) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item['id'] === itemId
                    ? { ...item, quantity: Math.max(1, newQuantity) }
                    : item
            )
        );
    };
    const totalBill = items.reduce((total, item) => total + (item['price'] * item['quantity']), 0)

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setCurrentItems(items.slice(0, itemsPerPage));
    }, [items]);
    const handlePageChange = (event) => {
        const newOffset = event.selected * itemsPerPage;
        setCurrentItems(items.slice(newOffset, newOffset + itemsPerPage));
    }

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
            <table className="cart-table table">
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
                                    <p style={{fontWeight: "bold"}} className="mb-0">${item['price']}</p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-quantity"], 'col-lg-1 col-md-1 col-sm-1 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
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
                                    <p style={{fontWeight: "bold"}} className="mb-0">${item['price'] * item['quantity']}</p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-close"], 'col-lg-1 col-md-1 col-sm-1 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p onClick={() => setItemDeleted(item)} data-bs-target="#cart-remove" data-bs-toggle="modal" className="mb-0"><i className={clsx(styles['cart-close__icon'], "fa-solid fa-x")}></i></p>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination pageCount={pageCount} handlePageChange={handlePageChange} />

            <div className="cart-transaction d-flex flex-wrap mt-5">
                <div className={clsx(styles["cart-more"], 'col-lg-6 col-md-6 col-sm-6')}>
                    <div className="cart-more__shop">
                        <button className={clsx(styles["cart-more__shop-btn"], 'btn d-flex align-items-center')}>
                            <i className={clsx(styles["cart-more__shop-icon"], 'fa-solid fa-store d-none')}></i>
                            <Link to='/shop'>CONTINUE SHOPPING</Link>
                        </button>
                    </div>

                    <div className="cart-more__coupon mt-5">
                        <h6 className="mb-3">Discount Coupon</h6>
                        <div className="form-group d-flex align-items-center">
                            <input placeholder='Enter your coupon code' type="text"
                                   value={coupon}
                                   onChange={e => setCoupon(e.target.value)}
                                   className={clsx(styles['cart-more__coupon-inp'])}/>
                            <button onClick={onClickAddCoupon} className={clsx(styles["cart-more__coupon-btn"])}>APPLY COUPON</button>
                        </div>
                    </div>
                </div>

                <div className={clsx(styles['cart-payment'], 'col-lg-6 col-md-6 col-sm-6')}>
                    <div className={clsx(styles["cart-payment__info"])}>
                        <h4 className="mb-0">Cart Total</h4>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Coupon</p>
                            <div className={clsx(styles["cart-payment__coupon-list"])}>
                                {couponsList.map((item, index) => (
                                    <p key={index} className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>{item['name']}</p>
                                ))}
                                {/*<p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>HAPPY*/}
                                {/*    10</p>*/}
                                {/*<p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>HAPPY*/}
                                {/*    20</p>*/}
                                {/*<p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>HAPPY*/}
                                {/*    30</p>*/}
                            </div>
                        </div>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Total</p>
                            <p className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>${totalBill}</p>
                        </div>
                        <div className={clsx(styles["cart-payment__btn"], 'mt-4')}>
                            <button className={clsx(styles['cart-payment__btn--inner'])}>PROCEED TO CHECKOUT</button>
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