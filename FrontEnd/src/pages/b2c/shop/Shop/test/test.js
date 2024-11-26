import styles from './ShopPage.module.css';
import {Pagination, NiceSelect} from '~/components/elements';
import {FormatUSDCurrency} from '~/utils'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';

function ShopPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const itemsPerPage = 9;
    let options = {
        loop: true,
        margin: 25,
        nav: true,
        navText: ["<span class='nav-icon'><i class='fas fa-chevron-left'></i></span>",
            "<span class='nav-icon'><i class='fas fa-chevron-right'></i></span>"],
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: {items: 1},
            600: {items: 1},
            1000: {items: 1}
        }
    };
    const filterOptions = [
        { value: 'id', label: 'Default' },
        { value: 'price', label: 'Price' },
        { value: 'name', label: 'Name' },
    ];

    // Example for pagination
    const rawData = [
        { _id: 1, product_name: "Laptop IdeaPad Slim 3", product_img: "/img/customer/product/laptop/lenovo-ideapadSlim3.png", product_price: 300, category_id: {category_name: 'Laptop'} },
        { _id: 2, product_name: "IPhone 11", product_img: "/img/customer/product/mobile/iphone11.png", product_price: 300, category_id: {category_name: 'Smartphone'} },
        { _id: 3, product_name: "Loudspeaker Mini Xiaomi", product_img: "/img/customer/product/sound/sound-mini-siaomi.png", product_price: 300, category_id: {category_name: 'Headphone'} },
        { _id: 4, product_name: "Laptop Microsoft Surface", product_img: "/img/customer/product/laptop/microsoft-surface.png", product_price: 400, category_id: {category_name: 'Laptop'} },
        { _id: 5, product_name: "Laptop Vivobook 15", product_img: "/img/customer/product/laptop/asus-vivobook15.png", product_price: 300, category_id: {category_name: 'Laptop'} },
        { _id: 6, product_name: "Laptop HP Pavilion 15", product_img: "/img/customer/product/laptop/hp-pavilion15.png", product_price: 300, category_id: {category_name: 'Laptop'} },
        { _id: 8, product_name: "Samsung S23 Ultra", product_img: "/img/customer/product/mobile/samsung-S23Ultra.png", product_price: 300, category_id: {category_name: 'Smartphone'} },
    ];

    const [data, setData] = useState(rawData);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [priceRange, setPriceRange] = useState(10);
    const [isAscending, setIsAscending] = useState(true);
    const [filteredData, setFilteredData] = useState(rawData);
    const [itemType, setItemType] = useState("all");

    useLayoutEffect(() => {
        let filtered = data.filter(item => (item['product_price'] >= priceRange));
        if(itemType !== 'all'){
            filtered = filtered.filter(item => item['category_id']['category_name'] === itemType);
        }
        setFilteredData(filtered);
        setPageCount(Math.ceil(filtered.length / itemsPerPage));
        setCurrentItems(filtered.slice(0, itemsPerPage));
    }, [priceRange, data, itemType]);

    const handlePageChange = useCallback((event) => {
        const newOffset = event.selected * itemsPerPage;
        setCurrentItems(filteredData.slice(newOffset, newOffset + itemsPerPage));
    }, []);

    const [selectedOption, setSelectedOption] = useState('id');
    useEffect(() => {
        const sortedDataSelect = [...data].sort((a, b) => {
            if (typeof a[selectedOption] === 'string') {
                return isAscending
                    ? a[selectedOption].localeCompare(b[selectedOption])
                    : b[selectedOption].localeCompare(a[selectedOption]);
            } else {
                return isAscending
                    ? a[selectedOption] - b[selectedOption]
                    : b[selectedOption] - a[selectedOption];
            }
        });
        setData(sortedDataSelect);
    }, [selectedOption, isAscending]);

    // BE
    useEffect(() => {
        fetch(`${api_url}/product`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    console.log(data.data);
                    setData(data.data);
                }
                else window.location.href = '/';
            })
            .catch(error => console.log(error));
    }, [])
    // console.log(filteredData);

    return (
        <>
            <div className="shop-filter col-lg-3 col-md-4 col-sm-12">
                <div className="shop-filter__department">
                    <h4 className='mb-4'>Department</h4>
                    <ul className="shop-filter__department-list p-0">
                        <li data-filter="*" className={clsx("shop-filter__department-item d-flex")}>
                            <div
                                onClick={() => setItemType('all')}
                                className={clsx(styles['shop-filter__department-item__para'], 'link-underline', `${itemType === 'all' && styles['link-department']}`)}>All</div>
                        </li>
                        <li data-filter=".laptop" className="shop-filter__department-item d-flex">
                            <div
                                onClick={() => setItemType('Laptop')}
                                className={clsx(styles['shop-filter__department-item__para'], 'link-underline', `${itemType === 'Laptop' && styles['link-department']}`)}>Laptop</div>
                        </li>
                        <li data-filter=".mobile" className="shop-filter__department-item d-flex">
                            <div
                                onClick={() => setItemType('Smartphone')}
                                className={clsx(styles['shop-filter__department-item__para'], 'link-underline', `${itemType === 'Smartphone' && styles['link-department']}`)}>Mobile</div>
                        </li>
                        <li data-filter=".sound" className="shop-filter__department-item d-flex">
                            <div
                                onClick={() => setItemType('Headphone')}
                                className={clsx(styles['shop-filter__department-item__para'], 'link-underline', `${itemType === 'Headphone' && styles['link-department']}`)}>Headphone</div>
                        </li>
                    </ul>
                </div>

                <div className="shop-filter__price mt-4">
                    <h4>Price</h4>
                    <input onChange={e => setPriceRange(Number(e.target.value))}
                           value={priceRange} type="range" step='1' min='10' max='1000'
                           className={clsx(styles["form-range"], 'form-range')} id="customRange1"/>
                    <p className={clsx(styles['shop-filter__price-text'])}><FormatUSDCurrency price={priceRange} /> - <FormatUSDCurrency price={1000} /></p>
                </div>

                <div className="shop-filter__latest mt-4">
                    <h4 className="">Latest Product</h4>
                    <div className={clsx(styles['shop-filter__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
                    <OwlCarousel
                        {...options}>
                        <div className="shop-filter__rated-list">
                            <Link to="/" className={clsx(styles["shop-filter__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["shop-filter__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/dell-inspiron14.png" alt=""
                                         className={clsx(styles["shop-filter__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["shop-filter__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dell Inspiron 14</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}><FormatUSDCurrency price={300} /></p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["shop-filter__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["shop-filter__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/dell-inspiron14.png" alt=""
                                         className={clsx(styles["shop-filter__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["shop-filter__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dell Inspiron 14</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}><FormatUSDCurrency price={300} /></p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["shop-filter__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["shop-filter__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/dell-inspiron14.png" alt=""
                                         className={clsx(styles["shop-filter__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["shop-filter__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dell Inspiron 14</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}><FormatUSDCurrency price={300} /></p>
                                </div>
                            </Link>
                        </div>
                        <div className="shop-filter__rated-list">
                            <Link to='/' className={clsx(styles["shop-filter__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["shop-filter__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/asus-vivobookS16.png" alt=""
                                         className={clsx(styles["shop-filter__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["shop-filter__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus Vivobook S16</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}><FormatUSDCurrency price={300} /></p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["shop-filter__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["shop-filter__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/asus-vivobookS16.png" alt=""
                                         className={clsx(styles["shop-filter__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["shop-filter__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus Vivobook S16</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}><FormatUSDCurrency price={300} /></p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["shop-filter__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["shop-filter__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/asus-vivobookS16.png" alt=""
                                         className={clsx(styles["shop-filter__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["shop-filter__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus Vivobook S16</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}><FormatUSDCurrency price={300} /></p>
                                </div>
                            </Link>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="shop-list col-lg-9 col-md-8 col-sm-12">
                <div className={clsx(styles["shop-filter"], 'mb-3')}>
                    <p className={clsx(styles['shop-filter__para'])}>Sort By:</p>
                    <NiceSelect options={filterOptions} onChange={useCallback((value) => setSelectedOption(value),[])}/>
                    <div onClick={() => setIsAscending(!isAscending)}>
                        {isAscending &&
                            <i className={clsx(styles['shop-filter__icon'], "fa-solid fa-arrow-up-wide-short")}></i>
                        }
                        {!isAscending &&
                            <i className={clsx(styles['shop-filter__icon'], "fa-solid fa-arrow-down-wide-short")}></i>
                        }
                    </div>
                </div>
                <ul className={clsx(styles['shop-list--inner'], 'd-flex flex-wrap p-0')}>
                    {currentItems.map((item, index) => (
                        <li key={item._id}
                            className={clsx(styles['shop-list__item'], `mix col-lg-4 col-md-6 col-sm-6 ${item.category_id.category_name}`)}>
                            <div className={clsx(styles['shop-list__item--inner'])}>
                                <div className={clsx(styles['shop-list__item-img--outer'])}>
                                    <img className={clsx(styles['shop-list__item-img'])}
                                         src={`${item.product_img}`} alt=""/>
                                    <ul className={clsx(styles['shop-list__item-list'], 'd-flex w-100 p-0')}>
                                        <li className={clsx(styles['shop-list__item-list--icon'])}>
                                            <Link className="text-dark" to={`/shop/details/${item._id}`}>
                                                <i className="fa-solid fa-eye"></i>
                                            </Link>
                                        </li>
                                        <li className={clsx(styles['shop-list__item-list--icon'])}>
                                            <Link className="text-dark" to='/'>
                                                <i className="fa-solid fa-heart"></i>
                                            </Link>
                                        </li>
                                        <li className={clsx(styles['shop-list__item-list--icon'])}>
                                            <Link to='/' className='text-dark'>
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-list__item-info text-center mt-3">
                                    <p className="mb-0 text-dark">{item.product_name}</p>
                                    <p className="text-dark" style={{fontWeight: "bold"}}><FormatUSDCurrency
                                        price={item.product_price}/></p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
            </div>
        </>
    )
}

export default ShopPage;
