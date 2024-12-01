import styles from './CartPage.module.css';
import stylesGrid from './CartPageGrid.module.css';
import {Modal, Pagination} from "~/components/elements";
import {FormatUSDCurrency} from "~/utils";
import {useShoppingContext} from "~/context/ShoppingContext";
import reducers, {initState} from "./reducers/reducers";
import {getCart, setQuantity, setCart, deleteCart, setCartList} from "./actions/actions";

import clsx from "clsx";
import {useCallback, useEffect, useMemo, useState, useLayoutEffect, useReducer} from "react";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

function CartPage(){
    const api_url = process.env.REACT_APP_API_URL;
    const {userData, setUserData} = useShoppingContext();
    const user_id = userData._id;

    const [state, dispatch] = useReducer(reducers, initState);
    const {cart, cartList} = state;

    const standardShip = 6;
    const expressShip = 10;
    const itemsPerPage = 4;
    // const [items, setItems] = useState(cartList);

    const [currentPage, setCurrentPage] = useState(0);
    // const [itemDeleted, setItemDeleted] = useState({});
    // const [shippingFees, setShippingFees] = useState(6);
    // const [taxFees, setTaxFees] = useState(0.1);
    const {shippingFees, setShippingFees} = useShoppingContext();
    const {taxFees, setTaxFees} = useShoppingContext();
    const [coupon, setCoupon] = useState('');
    const [couponCode, setCouponCode] = useState(/*JSON.parse(localStorage.getItem('couponCode')) ||*/ {});

    const totalBill = useMemo(() => {
        const itemsTotal = cartList.reduce((total, item) => total + (item.product_variant_id.retail_price * item.quantity), 0);
        const shippingTotal = itemsTotal + shippingFees;
        const taxTotal = shippingTotal * taxFees;
        const result = itemsTotal + shippingFees + taxTotal;
        return result - ((couponCode?.discount || 0) * result / 100);
    }, [cartList, shippingFees, taxFees, couponCode]);

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useLayoutEffect(() => {
        // setPageCount(Math.ceil(items.length / itemsPerPage));
        // setCurrentItems(items.slice(0, itemsPerPage));
        setPageCount(Math.ceil(cartList.length / itemsPerPage));
        setCurrentItems(cartList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [cartList, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    const onClickAddCoupon = () => {
        fetch(`${api_url}/cart/add-coupon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({code: coupon, user_id}),
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    setCouponCode(data.data);
                    // localStorage.setItem('couponCode', JSON.stringify(data.data));
                    toast.success(data.msg);
                } else{
                    toast.error(data.msg);
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        if(userData?._id){
            fetch(`${api_url}/cart?user_id=${user_id}`, {
                method: 'GET',
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data.data);
                    if(data.status) {
                        dispatch(getCart(data.data));
                        // setItems(data.data);
                    }
                })
                .catch(err => console.log(err));
        } else{
            let cartItems = JSON.parse(localStorage.getItem('carts'));
            if (!cartItems) {
                localStorage.setItem('carts', JSON.stringify([]));
                cartItems = JSON.parse(localStorage.getItem('carts'));
            }
            dispatch(getCart(cartItems));
        }

    }, [userData]);

    // BE
    const updateProductQuantity = (_id, quantity) => {
        // dispatch(setQuantity({_id: item._id, quantity: item.quantity - 1}));
        if(userData?._id){
            fetch(`${api_url}/cart/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quantity
                }),
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    if(data.status) dispatch(setQuantity({_id, quantity}))
                })
                .catch(err => console.log(err));
        } else{
            const cartItems = JSON.parse(localStorage.getItem('carts'));
            let newCart = cartItems.map(item =>
                item._id === _id
                ? { ...item, quantity: Math.max(1, quantity) }
                : item);
            localStorage.setItem('carts', JSON.stringify(newCart));
            dispatch(setQuantity({_id, quantity}))
        }
    }

    const handleRemoveProductFromCart = useCallback(() => {
        if(userData?._id) {
            fetch(`${api_url}/cart/${cart._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    if(data.status) {
                        dispatch(deleteCart(cart));
                        toast.success(data.msg);
                    }
                })
                .catch(err => console.log(err));
        } else{
            const cartItems = JSON.parse(localStorage.getItem('carts'));
            let newCart = cartItems.filter(item => item._id !== cart._id);
            localStorage.setItem('carts', JSON.stringify(newCart));
            dispatch(deleteCart(cart))
            toast.success('Remove product from cart successfully !');
        }
    }, [cart]);

    const proceedToCheckout = () => {
        if(userData?._id){
            fetch(`${api_url}/cart/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_id,
                    coupon_id: couponCode._id || null,
                    tax: taxFees * 100,
                    shippingFee: shippingFees,
                    products: cartList
                }),
                credentials: "include"
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    if(data.status) {
                        dispatch(setCartList(''));
                        toast.success(data.msg);
                        setTimeout(() => {
                            window.location.href = '/shop/checkout';
                        }, 3000)
                    } else toast.error(data.msg);

                    // /shop/checkout
                })
                .catch(err => console.log(err));
        } else{
            const cartItems = JSON.parse(localStorage.getItem('carts'));
            const updatedData = cartItems.map(item => ({
                ...item,
                order_id: 1
            }))
            const checkOutData = {
                dataOrder: {
                    address_id: null,
                    coupon_id: null,
                    createdAt: null,
                    deleted: false,
                    shippingFee: shippingFees,
                    status: '',
                    tax: taxFees * 100,
                    updatedAt: null,
                    _id: 1
                },
                dataOrderDetails: updatedData,
            }
            localStorage.setItem('checkOut', JSON.stringify(checkOutData));
            toast.success('Proceed to order !');
            setTimeout(() => {
                window.location.href = '/shop/checkout';
            }, 3000)
            // console.log(checkOutData);
        }
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
                                         src={`${item.product_variant_id.product_image}`} alt="" srcSet=""/>
                                    <p className={clsx(styles["cart-product__name"], 'mb-0')}>{item.product_variant_id.product_name}</p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-price"], 'col-lg-2 col-md-2 col-sm-2 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p style={{fontWeight: "bold"}} className="mb-0"><FormatUSDCurrency
                                        price={item.product_variant_id.retail_price}/></p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-quantity"], 'col-lg-1 col-md-1 col-sm-1 text-center pb-4 pt-4')}>
                                <div
                                    className={clsx(stylesGrid['cart-quantity--inner'], "d-flex align-items-center justify-content-center h-100")}>
                                    <div
                                        className="form-group col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-between">
                                        <div className={clsx(styles["cart-quantity__group"])}>
                                            <i onClick={() => updateProductQuantity(item._id, item.quantity - 1)}
                                               className={clsx("fa-solid fa-minus disabled-highlight", styles['cart-quantity__minus'])}></i>
                                            <input
                                                value={item.quantity}
                                                min="1"
                                                onChange={e => updateProductQuantity(
                                                    item._id, Math.max(1, Number(e.target.value))
                                                )}
                                                type="number"
                                                id="quan-details"
                                                className={clsx(styles["cart-quantity__inp"], 'form-control')}
                                            />
                                            <i onClick={() => updateProductQuantity(item._id, item.quantity + 1)}
                                               className={clsx("fa-solid fa-plus disabled-highlight", styles['cart-quantity__plus'])}></i>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-total"], 'col-lg-2 col-md-2 col-sm-2 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p style={{fontWeight: "bold"}} className="mb-0"><FormatUSDCurrency
                                        price={item.product_variant_id.retail_price * item['quantity']}/></p>
                                </div>
                            </td>
                            <td className={clsx(styles["cart-close"], 'col-lg-1 col-md-1 col-sm-1 text-center pb-4 pt-4')}>
                                <div className="d-flex align-items-center justify-content-center h-100">
                                    <p onClick={() => dispatch(setCart(item))} data-bs-target="#cart-remove"
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
                                localStorage.setItem('shippingFees', standardShip.toString());
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
                                localStorage.setItem('shippingFees', expressShip.toString());
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

                    {userData?._id &&
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
                    }
                </div>

                <div
                    className={clsx(styles['cart-payment'], stylesGrid['cart-payment'], 'col-lg-6 col-md-12 col-sm-12')}>
                    <div className={clsx(styles["cart-payment__info"])}>
                        <h4 className="mb-0">Cart Total</h4>
                        <div className={clsx(styles["cart-payment__coupon"], 'mt-4')}>
                            <p className={clsx(styles['cart-payment__para'])}>Coupon</p>
                            <div className={clsx(styles["cart-payment__coupon-list"])}>
                                {/*{couponsList.map((item, index) => (*/}
                                    <p
                                       className={clsx(styles['cart-payment__para'], styles['cart-payment__item'])}>{couponCode?.code} (-{couponCode?.discount}%)</p>
                                {/*))}*/}
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
                            <button onClick={proceedToCheckout} className={clsx(styles['cart-payment__btn--inner'])}><Link to=''>PROCEED
                                TO CHECKOUT</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                id="cart-remove"
                isStatic={true}
                title="Save change"
                labelBtnClose="Delete"
                onClickLabelClose={handleRemoveProductFromCart}
                closeClassName="btn btn-danger"
                saveClassName="d-none"
            >
                <p className="mb-0 text-dark">Are you sure to delete '{cart.product_variant_id?.product_name}'?</p>
            </Modal>
        </>
    )
}

export default CartPage;