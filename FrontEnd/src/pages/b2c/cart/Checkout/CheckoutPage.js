import styles from './CheckoutPage.module.css';
import {FormatUSDCurrency} from "~/utils";

import clsx from "clsx";
import {useMemo, useState} from "react";
import {Link} from "react-router-dom";

function CheckoutPage() {
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
    const [shippingFees, setShippingFees] = useState(Number(sessionStorage.getItem('shippingFees')));
    const [taxFees, setTaxFees] = useState(0.1);

    const totalBill = useMemo(() => {
        const itemsTotal = items.reduce((total, item) => total + (item['price'] * item['quantity']), 0);
        const taxTotal = itemsTotal * taxFees;
        return itemsTotal + taxTotal + shippingFees;
    }, []);
    const [paymentMethod, setPaymentMethod] = useState('cash');

    return (
        <>
            <div className="col-lg-6 col-md-5 col-sm-12">
                <h4>SHIPPING ADDRESS</h4>
                <form className={clsx(styles['checkout-info__form'], "form-group")}>
                    <input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="First Name"
                           type="text"/>
                    <input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Last Name"
                           type="text"/>
                    <input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Email"
                           type="email"/>
                    <input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Address"
                           type="text"/>
                    <input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="City"
                           type="text"/>
                    <input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Telephone"
                           type="text"/>
                    <textarea name="" className={clsx(styles['checkout-info__inp'], 'form-control mb-3')}
                              cols="30" rows="5" placeholder="Other Notes"></textarea>
                    <Link to='/shop/cart' type='button' className={clsx(styles['checkout-info__btn-back'])}>GO BACK</Link>
                </form>
            </div>
            <div className="col-lg-6 col-md-7 col-sm-12">
                <div className={clsx(styles["checkout-order"])}>
                    <h4 className="text-center">YOUR ORDER</h4>
                    <div className={clsx(styles["checkout-order__title"])}>
                        <p className="text-dark">Product</p>
                        <p className="text-dark">Total</p>
                    </div>
                    <div className={clsx(styles["checkout-order__product"])}>
                        <ul className={clsx(styles["checkout-order__list"], 'p-0')}>
                            {items.map((item, index) => (
                                <li key={index} className={clsx(styles["checkout-order__item"])}>
                                    <p>{item.quantity}x {item.name}</p>
                                    <p><FormatUSDCurrency price={item.quantity * item.price}/></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={clsx(styles["checkout-order__ship"])}>
                        <p>Tax</p>
                        <p style={{fontWeight: "bold"}}>{taxFees * 100}%</p>
                    </div>
                    <div className={clsx(styles["checkout-order__ship"])}>
                        <p>Shipping</p>
                        <p style={{fontWeight: "bold"}}>{shippingFees !== 0 ? <FormatUSDCurrency price={shippingFees} /> : 'FREE'}</p>
                    </div>
                    <div className={clsx(styles["checkout-order__ship"])}>
                        <p className="text-dark" style={{fontWeight: "bold"}}>TOTAL</p>
                        <p className={clsx(styles['checkout-order__totalBill-text'])}><FormatUSDCurrency
                            price={totalBill}/></p>
                    </div>
                    <div className={clsx(styles["checkout-order__payment-method"])}>
                        <div
                            className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-3 col-md-3 col-sm-12")}>
                            <input type="radio"
                                   className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}
                                   name="btnradio" value="Paypal" id="paypal"
                                   autoComplete="off"/>
                            <label onClick={() => setPaymentMethod('paypal')}
                                   className={clsx(styles['checkout-order__label'], paymentMethod === 'paypal' && styles['checkout-order__label-focus'])}
                                   htmlFor="paypal"> <img className={clsx(styles['checkout-order__img'])}
                                                          src="/img/icon/paypal.png" alt=""/> Paypal</label>
                        </div>

                        <div
                            className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-3 col-md-3 col-sm-12")}>
                            <input type="radio"
                                   className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}
                                   name="btnradio" value="Momo" id="momo"
                                   autoComplete="off"/>
                            <label onClick={() => setPaymentMethod('momo')}
                                   className={clsx(styles['checkout-order__label'], paymentMethod === 'momo' && styles['checkout-order__label-focus'])}
                                   htmlFor="momo"><img className={clsx(styles['checkout-order__img'])}
                                                       src="/img/icon/momo.png" alt=""/>Momo</label>
                        </div>

                        <div
                            className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-3 col-md-3 col-sm-12")}>
                            <input type="radio"
                                   className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}
                                   name="btnradio" value="ZaloPay" id="zalopay"
                                   autoComplete="off"/>
                            <label onClick={() => setPaymentMethod('zalopay')}
                                   className={clsx(styles['checkout-order__label'], paymentMethod === 'zalopay' && styles['checkout-order__label-focus'])}
                                   htmlFor="zalopay"><img className={clsx(styles['checkout-order__img'])}
                                                          src="/img/icon/zalopay.png" alt=""/>ZaloPay</label>
                        </div>

                        <div
                            className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-3 col-md-3 col-sm-12")}>
                            <input type="radio"
                                   className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}
                                   name="btnradio" value="Cash" id="cash"
                                   autoComplete="off"/>
                            <label onClick={() => setPaymentMethod('cash')}
                                   className={clsx(styles['checkout-order__label'], paymentMethod === 'cash' && styles['checkout-order__label-focus'])}
                                   htmlFor="cash"><img className={clsx(styles['checkout-order__img'])}
                                                       src="/img/icon/cash.png" alt=""/> COD</label>
                        </div>
                    </div>
                    <div className={clsx(styles["checkout-order__payment-btn"], 'mt-4')}>
                        <button className={clsx(styles['checkout-order__payment-btn__text'], 'btn w-100')}>
                            <span>PLACE ORDER</span>
                            <i className="fa-solid fa-truck-fast"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;