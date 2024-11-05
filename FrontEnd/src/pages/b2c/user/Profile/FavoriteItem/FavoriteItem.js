import {Pagination} from "~/components/elements";
import styles from "./FavoriteItem.module.css";
import {FormatUSDCurrency} from "~/utils";

import clsx from "clsx";
import {Link} from "react-router-dom";
import {useCallback, useLayoutEffect, useState} from "react";

function FavoriteItem() {
    const itemsPerPage = 6;
    const rawData = [
        { id: 1, name: "Laptop IdeaPad Slim 3", img: "/img/customer/product/laptop/lenovo-ideapadSlim3.png", price: 300, type: 'laptop' },
        { id: 2, name: "IPhone 11", img: "/img/customer/product/mobile/iphone11.png", price: 300, type: 'mobile' },
        { id: 3, name: "Loudspeaker Mini Xiaomi", img: "/img/customer/product/sound/sound-mini-siaomi.png", price: 300, type: 'sound' },
        { id: 4, name: "Laptop Microsoft Surface", img: "/img/customer/product/laptop/microsoft-surface.png", price: 400, type: 'laptop' },
        { id: 5, name: "Laptop Vivobook 15", img: "/img/customer/product/laptop/asus-vivobook15.png", price: 300, type: 'laptop' },
        { id: 6, name: "Laptop HP Pavilion 15", img: "/img/customer/product/laptop/hp-pavilion15.png", price: 300, type: 'laptop' },
        { id: 7, name: "Mouse G56D", img: "/img/customer/product/mouse/mouse-G56D.png", price: 300, type: 'mouse' },
        { id: 8, name: "Samsung S23 Ultra", img: "/img/customer/product/mobile/samsung-S23Ultra.png", price: 300, type: 'mobile' },
        { id: 9, name: "Lenovo K310", img: "/img/customer/product/keyboard/kb-lenovoK310.png", price: 300, type: 'keyboard' },
        { id: 10, name: "Logitech M650", img: "/img/customer/product/mouse/mouse-logitechM650.png", price: 200, type: 'mouse' },
    ];

    const [data, setData] = useState(rawData);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    useLayoutEffect(() => {
        setPageCount(Math.ceil(data.length / itemsPerPage));
        setCurrentItems(data.slice(0, itemsPerPage));
    }, [data]);
    const handlePageChange = useCallback((event) => {
        const newOffset = event.selected * itemsPerPage;
        setCurrentItems(data.slice(newOffset, newOffset + itemsPerPage));
    }, [])

    return (
        <>
            <h5 style={{fontWeight: "normal"}}>Favorite Item</h5>
            <ul className={clsx(styles['profile-favorite-list--inner'], 'd-flex flex-wrap p-0')}>
                {currentItems.map((item) => (
                    <li key={item.id}
                        className={clsx(styles['profile-favorite-list__item'], `mix col-lg-4 col-md-6 col-sm-6 ${item.type}`)}>
                        <div className={clsx(styles['profile-favorite-list__item--inner'])}>
                            <div className={clsx(styles['profile-favorite-list__item-img--outer'])}>
                                <img className={clsx(styles['profile-favorite-list__item-img'])}
                                     src={`${item.img}`} alt=""/>
                                <ul className={clsx(styles['profile-favorite-list__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['profile-favorite-list__item-list--icon'])}>
                                        <Link className="text-dark" to={`/shop/details/${item.id}`}>
                                            <i className="fa-solid fa-eye"></i>
                                        </Link>
                                    </li>
                                    <li className={clsx(styles['profile-favorite-list__item-list--icon'])}>
                                        <Link to='/' className='text-dark'>
                                            <i className="fa-solid fa-cart-shopping"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="profile-favorite-list__item-info text-center mt-3">
                                <p className="mb-0 text-dark">{item.name}</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}><FormatUSDCurrency
                                    price={item.price}/></p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>

        </>
    )
}

export default FavoriteItem;