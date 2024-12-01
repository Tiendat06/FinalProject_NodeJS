import {PayPalButtons} from '@paypal/react-paypal-js'
import {memo, useState} from "react";
import {toast} from "react-toastify";
import {useShoppingContext} from "~/context/ShoppingContext";
import FetchPlaceOrder from "~/pages/b2c/cart/Checkout/utils/FetchPlaceOrder";

function PayPalCheckoutButton({products, totalBill, shippingAddress, email, coupon_id, userInfo}) {
    // console.log({totalBill, shippingAddress});
    const api_url = process.env.REACT_APP_API_URL;
    const {userData} = useShoppingContext();
    const user_id = userData._id;

    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);
    const amountValue = (totalBill * 1).toFixed(2);

    const handleApprove = async (orderId) => {
    //     call backend function
        if(!error) {
            if(userData?._id){
                await FetchPlaceOrder({
                    user_id,
                    totalBill: Number(totalBill),
                    address_id: shippingAddress._id,
                    payment_method_name: 'PayPal',
                    email,
                    products,
                    coupon_id
                });
            } else{
                fetch(`${api_url}/order/place-order-no-login`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        totalBill: Number(totalBill),
                        userInfo,
                        payment_method_name: 'PayPal',
                        email,
                        products,
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
    //     refresh user account or subscription status

    //     if the response is error => alert
    //      setError()
    }

    if(error) {
        toast.error(error+"");
        console.log(error)
        return;
    }


    return (
        <PayPalButtons
            style={{
                color: "blue",
                layout: 'horizontal',
                height: 40,
                tagline: false,
                shape: 'pill'
            }}
            onClick={(data, actions) => {
            //     Validate on button click
                console.log(email)
                if(email === undefined || email === '') {
                    setError('Please enter email !');
                    return actions.reject();
                }
            }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            reference_id: 'default',
                            amount: {
                                value: amountValue,
                                currency: 'USD',
                            },
                        }
                    ]
                })
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                await handleApprove(data.orderID)
            }}
            onError={(err) => {
                setError(err);
                console.log(err);
            }}
            onCancel={() => {
                toast.warning('Payment cancelled !');
            }}
        />
    )
}

export default memo(PayPalCheckoutButton);