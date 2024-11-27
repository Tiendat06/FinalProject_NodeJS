import styles from './ShopPage.module.css';
import {Pagination, NiceSelect} from '~/components/elements';
import {FormatUSDCurrency} from '~/utils'

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import {useShoppingContext} from "~/context/ShoppingContext";

function ShopPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {productData, setProductData} = useShoppingContext();

    const itemsPerPage = 9;
    const filterOptions = [
        { value: '_id', label: 'Default' },
        { value: 'product_price', label: 'Price' },
        { value: 'product_name', label: 'Name' },
    ];

    const [data, setData] = useState(productData);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [priceRange, setPriceRange] = useState(10);
    const [isAscending, setIsAscending] = useState(true);
    const [filteredData, setFilteredData] = useState(data);
    const [itemType, setItemType] = useState("all");

    useEffect(() => {
        if(data && data.length > 0) {
            let filtered = data.filter(item => (item['product_price'] >= priceRange));
            console.log({filtered});
            if(itemType !== 'all'){
                filtered = filtered.filter(item => item['category_id']['category_name'] === itemType);
            }
            setFilteredData(filtered);
            setPageCount(Math.ceil(filtered.length / itemsPerPage));
            setCurrentItems(filtered.slice(0, itemsPerPage));
        }
    }, [priceRange, data, itemType]);

    const handlePageChange = useCallback((event) => {
        const newOffset = event.selected * itemsPerPage;
        setCurrentItems(filteredData.slice(newOffset, newOffset + itemsPerPage));
    }, [filteredData]);

    const [selectedOption, setSelectedOption] = useState('_id');
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

    useEffect(() => {
        setData(productData);
    }, [productData]);

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
                    setData(data.data);
                    setFilteredData(data.data);
                    setPageCount(Math.ceil(data.data.length / itemsPerPage));
                    setCurrentItems(data.data.slice(0, itemsPerPage));
                }
                else window.location.href = '/';
            })
            .catch(error => console.log(error));
    }, [itemsPerPage])

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
                    <div className={clsx(styles['shop-filter__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
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
                            title={item.product_description}
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
