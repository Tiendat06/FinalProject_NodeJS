import styles from './CheckoutPage.module.css';
import {FormatUSDCurrency} from "~/utils";

import clsx from "clsx";
import {useEffect, useMemo, useState} from "react";
import {Link} from "react-router-dom";
import {useShoppingContext} from "~/context/ShoppingContext";

import {PayPalCheckoutButton} from '~/components/elements';
import {toast} from "react-toastify";
import FetchPlaceOrder from "./utils/FetchPlaceOrder";

function CheckoutPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {userData} = useShoppingContext();
    const user_id = userData._id;

    const [items, setItems] = useState([]);
    const [orderInfo, setOrderInfo] = useState({});
    const [addressInfo, setAddressInfo] = useState([]);
    const [addressChoose, setAddressChoose] = useState(0);
    const [userInfo, setUserInfo] = useState({
        _id: "",
        fullName: "",
        phone_number: "",
        address: ""
    });
    const [emailInfo, setEmailInfo] = useState('')

    const totalBill = useMemo(() => {
        const itemsTotal = items.reduce((total, item) => total + (item.product_variant_id?.retail_price * item?.quantity), 0);
        const shippingTotal = itemsTotal + orderInfo?.shippingFee;
        const taxTotal = shippingTotal * orderInfo?.tax / 100;
        const result = itemsTotal + orderInfo?.shippingFee + taxTotal;
        return result - ((orderInfo?.coupon_id?.discount || 0) * result / 100);
    }, [items, orderInfo]);
    const [paymentMethod, setPaymentMethod] = useState('cash');

    const handleChangeShippingAddress = (index, item) => {
        setAddressChoose(index);
        setAddressInfo(addressInfo);
        setUserInfo({
            ...userInfo,
            _id: item._id,
            fullName: item.fullName,
            address: item.address,
            phone_number: item.phone_number,
        })
    }

    // BE
    useEffect(() => {
        if(userData?._id) {
            fetch(`${api_url}/order/user?user_id=${user_id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    if(data.status) {
                        console.log(data);
                        setAddressInfo(data.dataShippingAddress);
                        setOrderInfo(data.dataOrder);
                        setItems(data.dataOrderDetails);
                        setUserInfo({
                            ...userInfo,
                            _id: data.dataShippingAddress[0]._id,
                            fullName: data.dataShippingAddress[0].fullName,
                            phone_number: data.dataShippingAddress[0].phone_number,
                            address: data.dataShippingAddress[0].address
                        })
                    }
                    else window.location.href = '/';
                })
                .catch(error => console.log(error));
        } else{
            const checkOutData = JSON.parse(localStorage.getItem('checkOut'));
            if (!checkOutData) window.location.href = '/';
            setOrderInfo(checkOutData.dataOrder);
            setItems(checkOutData.dataOrderDetails);
        }

    }, []);

    const handleCashPayment = async () => {
        if(userData?._id) {
            if(emailInfo === undefined || emailInfo === '') {
                toast.error('Please enter email !');
                return;
            }

            await FetchPlaceOrder({
                user_id,
                totalBill: Number(totalBill),
                address_id: addressInfo[addressChoose]._id,
                payment_method_name: 'Cash',
                email: emailInfo,
                products: items,
                coupon_id: orderInfo?.coupon_id?._id
            });
        } else{
            // const checkOutData = JSON.parse(localStorage.getItem('checkOut'));
            fetch(`${api_url}/order/place-order-no-login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    totalBill: Number(totalBill),
                    userInfo,
                    payment_method_name: 'Cash',
                    email: emailInfo,
                    products: items,
                    tax: 10,
                    shippingFee: localStorage.getItem('shippingFees'),
                    cartList: JSON.parse(localStorage.getItem('carts'))
                }),
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    localStorage.removeItem('carts');
                    localStorage.removeItem('checkOut');
                    // console.log(data);
                    toast.success('Thanks for you payment !');
                    setTimeout(() => {
                        window.location.href = '/'
                    }, 3000);
                })
                .catch(error => console.log(error));
        }
    }

    const handleZaloPayPayment = () => {
        fetch(`${api_url}/order/place-order-zalopay`, {
            method: 'POST',
            body: JSON.stringify({
                items: [],
                description: "oke",
                amount: 100
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                window.location.href = data.order_url;
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="col-lg-6 col-md-5 col-sm-12">
                <h4>SHIPPING ADDRESS</h4>
                <form className={clsx(styles['checkout-info__form'], "form-group")}>
                    <input value={userInfo.fullName}
                           onChange={e => setUserInfo({...userInfo, fullName: e.target.value})}
                           className={clsx(styles['checkout-info__inp'], 'form-control mb-3')}
                           placeholder="Full Name"
                           type="text"/>
                        {/*<input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Last Name"*/}
                        {/*       type="text"/>*/}
                    <input value={emailInfo}
                           onChange={e => setEmailInfo(e.target.value)}
                           className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Email"
                           type="email"/>
                    <input value={userInfo.address}
                           onChange={e => setUserInfo({...userInfo, address: e.target.value})}
                           className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="Address"
                           type="text"/>
                        {/*<input className={clsx(styles['checkout-info__inp'], 'form-control mb-3')} placeholder="City"*/}
                        {/*       type="text"/>*/}
                    <input value={userInfo.phone_number}
                           onChange={e => setUserInfo({...userInfo, phone_number: e.target.value})}
                           className={clsx(styles['checkout-info__inp'], 'form-control mb-3')}
                           placeholder="Telephone"
                           type="text"/>
                        {/*<textarea name="" className={clsx(styles['checkout-info__inp'], 'form-control mb-3')}*/}
                        {/*          cols="30" rows="5" placeholder="Other Notes"></textarea>*/}

                    <ul className={clsx(styles["shipping-address__list"], 'mb-3')}>
                        {addressInfo.map((item, index) => (
                            <li onClick={() => handleChangeShippingAddress(index, item)} key={item._id}
                                className={clsx(styles["shipping-address__item"],
                                    'col-lg-6 col-md-6 col-sm-6')}>
                                <div className={clsx(styles["shipping-address__item--inner"],
                                    ((addressChoose === index) && styles['shipping-address__item--inner--click']))}>
                                    {/*<p>{index}</p>*/}
                                    <span>Full name: {item.fullName}</span>
                                    <span>Address: {item.address}</span>
                                    <span>Phone number: {item.phone_number}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/*<Link to='/shop/cart' type='button' className={clsx(styles['checkout-info__btn-back'])}>CANCEL*/}
                    {/*    ORDER</Link>*/}
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
                                <li key={item._id} className={clsx(styles["checkout-order__item"])}>
                                    <p>{item.quantity}x {item.product_variant_id?.product_name}</p>
                                    <p><FormatUSDCurrency
                                        price={item.quantity * item.product_variant_id?.retail_price}/>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {userData?._id &&
                        <div className={clsx(styles["checkout-order__ship"])}>
                            <p>Coupon</p>
                            <p style={{fontWeight: "bold"}}>{orderInfo?.coupon_id?.code || ''} (-{orderInfo?.coupon_id?.discount}%)</p>
                        </div>
                    }
                    <div className={clsx(styles["checkout-order__ship"])}>
                            <p>Tax</p>
                            <p style={{fontWeight: "bold"}}>{orderInfo?.tax}%</p>
                        </div>
                    <div className={clsx(styles["checkout-order__ship"])}>
                            <p>Shipping</p>
                            <p style={{fontWeight: "bold"}}>{orderInfo?.shippingFee !== 0 ?
                                <FormatUSDCurrency price={orderInfo?.shippingFee}/> : 'FREE'}</p>
                        </div>
                    <div className={clsx(styles["checkout-order__ship"])}>
                            <p className="text-dark" style={{fontWeight: "bold"}}>TOTAL</p>
                            <p className={clsx(styles['checkout-order__totalBill-text'])}><FormatUSDCurrency
                                price={totalBill}/></p>
                        </div>
                    <div className={clsx(styles["checkout-order__payment-method"], 'd-block')}>
                            <div
                                className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-12 col-md-12 col-sm-12")}>
                                <input type="radio"
                                       className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}
                                       name="btnradio" value="Paypal" id="paypal"
                                       autoComplete="off"/>
                                <label onClick={() => setPaymentMethod('paypal')}
                                       style={{letterSpacing: 2}}
                                       className={clsx(styles['checkout-order__label'], paymentMethod === 'paypal' && styles['checkout-order__label-focus'])}
                                       htmlFor="paypal"> <img className={clsx(styles['checkout-order__img'])}
                                                              src="/img/icon/paypal.png" alt=""/> Paypal</label>
                            </div>

                            {/*<div*/}
                            {/*    className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-3 col-md-3 col-sm-12")}>*/}
                            {/*    <input type="radio"*/}
                            {/*           className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}*/}
                            {/*           name="btnradio" value="Momo" id="momo"*/}
                            {/*           autoComplete="off"/>*/}
                            {/*    <label onClick={() => setPaymentMethod('momo')}*/}
                            {/*           className={clsx(styles['checkout-order__label'], paymentMethod === 'momo' && styles['checkout-order__label-focus'])}*/}
                            {/*           htmlFor="momo"><img className={clsx(styles['checkout-order__img'])}*/}
                            {/*                               src="/img/icon/momo.png" alt=""/>Momo</label>*/}
                            {/*</div>*/}

                            {/*<div*/}
                            {/*    className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-3 col-md-3 col-sm-12")}>*/}
                            {/*    <input type="radio"*/}
                            {/*           className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}*/}
                            {/*           name="btnradio" value="ZaloPay" id="zalopay"*/}
                            {/*           autoComplete="off"/>*/}
                            {/*    <label onClick={() => setPaymentMethod('zalopay')}*/}
                            {/*           className={clsx(styles['checkout-order__label'], paymentMethod === 'zalopay' && styles['checkout-order__label-focus'])}*/}
                            {/*           htmlFor="zalopay"><img className={clsx(styles['checkout-order__img'])}*/}
                            {/*                                  src="/img/icon/zalopay.png" alt=""/>ZaloPay</label>*/}
                            {/*</div>*/}

                            <div
                                className={clsx(styles['checkout-order__payment-method__form'], "form-group col-lg-12 col-md-12 col-sm-12")}>
                                <input type="radio"
                                       className={clsx(styles['checkout-order__payment-method__inp'], "btn-check")}
                                       name="btnradio" value="Cash" id="cash"
                                       autoComplete="off"/>
                                <label onClick={() => setPaymentMethod('cash')}
                                       style={{letterSpacing: 2}}
                                       className={clsx(styles['checkout-order__label'], paymentMethod === 'cash' && styles['checkout-order__label-focus'])}
                                       htmlFor="cash"><img className={clsx(styles['checkout-order__img'])}
                                                           src="/img/icon/cash.png" alt=""/> COD</label>
                            </div>
                        </div>
                    <div className={clsx(styles["checkout-order__payment-btn"], 'mt-4')}>

                        {paymentMethod === 'paypal' &&
                            <PayPalCheckoutButton
                                coupon_id={orderInfo?.coupon_id?._id}
                                email={emailInfo}
                                shippingAddress={addressInfo[addressChoose]}
                                products={items}
                                totalBill={totalBill}
                                userInfo={userInfo}
                            />
                        }
                        {paymentMethod === 'zalopay' &&
                            <button onClick={handleZaloPayPayment} className={clsx(styles['checkout-order__payment-btn__text'], 'btn w-100')}>
                                <span>ZALOPAY ORDER</span>
                                <i className="fa-solid fa-truck-fast"></i>
                            </button>
                        }
                        {paymentMethod === 'cash' &&
                            <button onClick={handleCashPayment} className={clsx(styles['checkout-order__payment-btn__text'], 'btn w-100')}>
                                <span>PLACE ORDER</span>
                                <i className="fa-solid fa-truck-fast"></i>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutPage;