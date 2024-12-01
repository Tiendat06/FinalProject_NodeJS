import clsx from "clsx";
import {Link} from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import mixitup from 'mixitup';
import {useEffect, useRef, useState} from "react";
import 'react-bootstrap'

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SlickCarousel from "~/components/elements/SlickCarousel/SlickCarousel";
import SmallSlickCarousel from "~/components/elements/SlickCarousel/SmallSlickCarousel";

import styles from './HomePage.module.css';
import {FormatUSDCurrency} from '~/utils'
import {toast} from "react-toastify";
import {useShoppingContext} from "~/context/ShoppingContext";

function HomePage(){
    const api_url = process.env.REACT_APP_API_URL;
    const [dataList, setDataList] = useState({
        top5Products: [],
        top8Products: [],
        top3Products: []
    });
    const {userData} = useShoppingContext();
    const user_id = userData._id;

    // mixitup
    let containerRef = useRef(null);
    useEffect(() => {
        if(containerRef.current){
            mixitup(containerRef.current);
        }
    }, []);

    useEffect(() => {
        fetch(`${api_url}/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const top5Products = data.top5Products;
                const top8Products = data.top8Products;
                const top3Products = data.top3Products;
                setDataList({...dataList, top5Products, top8Products, top3Products});
            })
            .catch(error => console.log(error));
    }, []);

    // toast
    const handleAddWishList = (item) => {
        fetch(`${api_url}/product/add-wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id: item._id,
                user_id,
            }),
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) toast.success(data.msg);
                else toast.error(data.msg);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <section className={clsx(styles["home-banner"])}>
                <div id="carouselExampleIndicators" className="carousel h-100 slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner h-100">
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                        <img src="/img/customer/home/laptop-1-slider.png"
                                 className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                            <img src="/img/customer/home/laptop-2-slider.jpg"
                                 className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                            <img src="/img/customer/home/laptop-3-slider.jpg"
                                 className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                            <img src="/img/customer/home/laptop-4-slider.jpg"
                                 className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className={clsx(styles["home-new"], 'carousel-wrapper mb-70')}>
                <h2 className={clsx('text-center')}>New Product</h2>
                <div className={clsx(styles['home-new__middle'])}></div>
                <SlickCarousel>
                    {dataList.top5Products.map((item, index) => (
                        <div key={item._id} className={clsx(styles['home-new__item--inner'])}>
                            <div className={clsx(styles['home-new__item-img--outer'])}>
                                <img className={styles['home-new__item-img']} src={item.product_img} alt={item.product_name} />
                            </div>
                            <div className={clsx(styles['home-new__item-btn'])}>
                                <div className={clsx(styles['home-new__item-btn--inner'])}>
                                    <Link className={clsx(styles['home-new__item-link'], 'link-underline')} to={`/shop/details/${item._id}`}>{item.product_name}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </SlickCarousel>
            </section>

            <section className={clsx(styles["home-featured"])}>
                <h2 className={clsx('text-center')}>Typical Product</h2>
                <div className={clsx(styles['home-new__middle'])}></div>
                <ul className={clsx(styles["home-featured__category"], 'flex-wrap')}>
                    <Link data-filter="*" className={clsx(styles["home-featured__category-item"],'link-underline')}>All</Link>
                    <Link data-filter=".Laptop" className={clsx(styles["home-featured__category-item"],'link-underline')}>Laptop</Link>
                    <Link data-filter=".Smartphone" className={clsx(styles["home-featured__category-item"],'link-underline')}>Mobile</Link>
                    <Link data-filter=".Headphone" className={clsx(styles["home-featured__category-item"],'link-underline')}>Headphone</Link>
                </ul>
                <ul className={clsx(styles['home-featured__list'], 'd-flex flex-wrap')} ref={containerRef}>
                        {dataList.top8Products.map((item, index) => (
                            <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6', `${(item.category_id.category_name)}`)}>
                                <div key={index} className={clsx(styles['home-featured__item--inner'])}>
                                    <div className={clsx(styles['home-featured__item-img--outer'])}>
                                        <img className={clsx(styles['home-featured__item-img'])}
                                             src={item.product_img} alt=""/>
                                        <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                            <li className={clsx(styles['home-featured__item-list--icon'])}>
                                                <Link className="text-dark" to={`/shop/details/${item._id}`}><i
                                                    className="fa-solid fa-eye"></i></Link>
                                            </li>
                                            <li className={clsx(styles['home-featured__item-list--icon'])}>
                                                <Link onClick={() => handleAddWishList(item)} className="text-dark"><i
                                                    className="fa-solid fa-heart"></i></Link>
                                            </li>
                                            {/*<li className={clsx(styles['home-featured__item-list--icon'])}>*/}
                                            {/*    <Link to='/' className='text-dark'><i*/}
                                            {/*        className="fa-solid fa-cart-shopping"></i></Link>*/}
                                            {/*</li>*/}
                                        </ul>
                                    </div>
                                    <div className="home-featured__item-info text-center mt-3">
                                        <p className="mb-0 text-dark">{item.product_name}</p>
                                        <p className="text-dark" style={{fontWeight: "bold"}}><FormatUSDCurrency
                                            price={item.product_price}/></p>
                                    </div>
                                </div>
                            </li>
                        ))}

                </ul>
            </section>

            <section className={clsx(styles['home-discount'])}>
                <div className={clsx(styles["home-discount__list"], 'flex-wrap')}>
                    <img src="/img/customer/home/sell-off-1.jpg"
                         className={clsx(styles['home-discount__img'], 'p-2 col-lg-6 col-md-6 col-sm-12')} alt=""/>
                    <img src="/img/customer/home/sell-off-2.png"
                         className={clsx(styles['home-discount__img'], 'p-2 col-lg-6 col-md-6 col-sm-12')} alt=""/>
                </div>
            </section>

            <section className="home-top d-flex flex-wrap">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h2 className="">Top Rated</h2>
                    <div className={clsx(styles['home-new__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
                    <SmallSlickCarousel>
                        {dataList.top3Products.map((item, index) => (
                            <Link key={`top-rate-${index}`} to={`/shop/details/${item._id}`} className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5 d-flex justify-content-center')}>
                                    <img src={item.product_img} alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p style={{textAlign: "left"}} className="text-dark mb-0">{item.product_name}</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18, textAlign: "left"}}>
                                        <FormatUSDCurrency price={item.product_price}/></p>
                                </div>
                            </Link>
                        ))}
                    </SmallSlickCarousel>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h2>Top Viewed</h2>
                    <div className={clsx(styles['home-new__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
                    <SmallSlickCarousel>
                        {dataList.top3Products.map((item, index) => (
                            <Link key={`top-view-${index}`} to={`/shop/details/${item._id}`} className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5 d-flex justify-content-center')}>
                                    <img src={item.product_img} alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p style={{textAlign: "left"}} className="text-dark mb-0">{item.product_name}</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18, textAlign: "left"}}>
                                        <FormatUSDCurrency price={item.product_price}/></p>
                                </div>
                            </Link>
                        ))}
                    </SmallSlickCarousel>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <h2>Top Selling</h2>
                    <div className={clsx(styles['home-new__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
                    <SmallSlickCarousel>
                        {dataList.top3Products.map((item, index) => (
                            <Link key={`top-sell-${index}`} to={`/shop/details/${item._id}`} className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5 d-flex justify-content-center')}>
                                    <img src={item.product_img} alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p style={{textAlign: "left"}} className="text-dark mb-0">{item.product_name}</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18, textAlign: "left"}}>
                                        <FormatUSDCurrency price={item.product_price}/></p>
                                </div>
                            </Link>
                        ))}
                    </SmallSlickCarousel>
                </div>
            </section>

        </>
    );
}

export default HomePage;