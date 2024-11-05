import styles from './ManageVoucher.module.css';
import {useCallback, useLayoutEffect, useState} from "react";
import {Pagination} from "~/components/elements";
import clsx from "clsx";

function ManageVoucher() {
    const itemsPerPage = 8;
    const rawData = [
        {id: 1, name: 'Discount 20$', description: 'Order from 150$', img: '/img/logo/logo.png', expireDate: '24-02-2024'},
        {id: 2, name: 'Discount 30$', description: 'Order from 150$', img: '/img/logo/logo.png', expireDate: '24-02-2024'},
        {id: 3, name: 'Discount 40$', description: 'Order from 150$', img: '/img/logo/logo.png', expireDate: '24-02-2024'},
        {id: 4, name: 'Discount 50$', description: 'Order from 150$', img: '/img/logo/logo.png', expireDate: '24-02-2024'},
        {id: 5, name: 'Discount 60$', description: 'Order from 150$', img: '/img/logo/logo.png', expireDate: '24-02-2024'},
        {id: 6, name: 'Discount 70$', description: 'Order from 150$', img: '/img/logo/logo.png', expireDate: '24-02-2024'},
    ];

    const [items, setItems] = useState(rawData);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);
    useLayoutEffect(() => {
        setPageCount(Math.ceil(items.length / itemsPerPage));
        setCurrentItems(items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [items, currentPage]);

    return (
        <>
            <div className="profile-voucher">
                <h5 style={{fontWeight: "normal"}}>Coupon Information</h5>
                <ul className={clsx(styles["profile-voucher__list"])}>
                    {currentItems.map((item, index) => (
                        <li key={index} className={clsx(styles["profile-voucher__item"], 'col-lg-6 col-md-6 col-sm-12')}>
                            <div className={clsx(styles["profile-voucher__item-img"], 'col-lg-3 col-md-3 col-sm-3')}>
                                <img className={clsx(styles['profile-voucher__item-img--inner'])} src={item.img} alt=""/>
                            </div>
                            <div className={clsx(styles["profile-voucher__item-info"], 'col-lg-9 col-md-9 col-sm-9')}>
                                <div
                                    className={clsx(styles["profile-voucher__item-details"], ' col-lg-12 col-md-12 col-sm-12')}>
                                    <div className={clsx(styles["profile-voucher__item-details__text"])}>
                                        <p style={{fontSize: 16, fontWeight: "bold"}} className='mb-0'>{item.name}</p>
                                        <p className='mb-0'>{item.description}</p>
                                    </div>
                                    <img
                                        src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%20%20%20%20%3Cdefs%3E%20%20%20%20%20%20%20%20%3Cpath%20id%3D%224gg7gqe5ua%22%20d%3D%22M8.333%200C3.738%200%200%203.738%200%208.333c0%204.595%203.738%208.334%208.333%208.334%204.595%200%208.334-3.739%208.334-8.334S12.928%200%208.333%200zm0%201.026c4.03%200%207.308%203.278%207.308%207.307%200%204.03-3.278%207.308-7.308%207.308-4.03%200-7.307-3.278-7.307-7.308%200-4.03%203.278-7.307%207.307-7.307zm.096%206.241c-.283%200-.512.23-.512.513v4.359c0%20.283.23.513.512.513.284%200%20.513-.23.513-.513V7.78c0-.283-.23-.513-.513-.513zm.037-3.114c-.474%200-.858.384-.858.858%200%20.473.384.857.858.857s.858-.384.858-.857c0-.474-.384-.858-.858-.858z%22%2F%3E%20%20%20%20%3C%2Fdefs%3E%20%20%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cg%20transform%3D%22translate%28-2808%20-4528%29%20translate%282708%2080%29%20translate%2852%204304%29%20translate%2848%20144%29%20translate%281.667%201.667%29%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cuse%20fill%3D%22%23D10024%22%20xlink%3Ahref%3D%22%234gg7gqe5ua%22%2F%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%20%20%20%20%3C%2Fg%3E%20%20%20%20%3C%2Fg%3E%3C%2Fsvg%3E"
                                        alt=""/>

                                    {/*<i className="fa-solid fa-circle-info"></i>*/}
                                </div>
                                <p className='mb-0 col-lg-12 col-md-12 col-sm-12'>Expire date: {item.expireDate}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>

            </div>
        </>
    )
}

export default ManageVoucher;