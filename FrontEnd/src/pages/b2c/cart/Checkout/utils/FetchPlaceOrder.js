import {toast} from "react-toastify";

function FetchPlaceOrder({user_id, totalBill, address_id, payment_method_name, email, products, coupon_id}){
    const api_url = process.env.REACT_APP_API_URL;

    fetch(`${api_url}/order/place-order`, {
        method: "POST",
        body: JSON.stringify({
            user_id,
            totalBill: totalBill,
            address_id: address_id,
            payment_method_name: payment_method_name,
            email: email,
            products: products,
            coupon_id: coupon_id
        }),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })
        .then(response => response.json())
        .then(data => {
            if(data.status) {
                toast.success('Thanks for you payment !');
                setTimeout(() => {
                    window.location.href = '/'
                }, 3000);
            } else {
                toast.error(data.msg);
            }
        })
        .catch(error => {
            toast.error(error);
            console.log(error);
        });
}

export default FetchPlaceOrder;