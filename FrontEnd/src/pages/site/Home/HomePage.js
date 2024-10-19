import clsx from "clsx";
import {Link} from "react-router-dom";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import mixitup from 'mixitup';

import styles from './HomePage.module.css';
import {useEffect, useRef} from "react";

function HomePage(){

    // owl carousel
    let options = {
        loop: true,
        margin: 25,
        nav: false,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    };

    // mixitup
    let containerRef = useRef(null);
    useEffect(() => {
        if(containerRef.current){
            mixitup(containerRef.current);
        }
    }, []);

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
                <OwlCarousel className={clsx(styles['home-new__list'])}
                             loop={options.loop}
                             margin={options.margin}
                             nav={options.nav}
                             smartSpeed={options.smartSpeed}
                             autoplay={options.autoplay}
                             autoplayTimeout={options.autoplayTimeout}
                             autoplayHoverPause={options.autoplayHoverPause}
                             responsive={options.responsive}>
                    <div className={clsx(styles['home-new__item--inner'])}>
                        <div className={clsx(styles['home-new__item-img--outer'])}>
                            <img className={styles['home-new__item-img']}
                                 src="/img/customer/product/laptop/msi-GF63Thin.png" alt=""/>
                        </div>
                        <div className={clsx(styles['home-new__item-btn'])}>
                            <div className={clsx(styles['home-new__item-btn--inner'])}>
                                <Link className={clsx(styles['home-new__item-link'], 'link-underline')}
                                      to="/">MSI GF63 Thin</Link>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles['home-new__item--inner'])}>
                        <div className={clsx(styles['home-new__item-img--outer'])}>
                            <img className={styles['home-new__item-img']}
                                 src="/img/customer/product/laptop/asus-rog.png" alt=""/>
                        </div>
                        <div className={clsx(styles['home-new__item-btn'])}>
                            <div className={clsx(styles['home-new__item-btn--inner'])}>
                                <Link className={clsx(styles['home-new__item-link'], 'link-underline')}
                                      to="/">ASUS ROG</Link>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles['home-new__item--inner'])}>
                        <div className={clsx(styles['home-new__item-img--outer'])}>
                            <img className={styles['home-new__item-img']}
                                 src="/img/customer/product/laptop/acer-aspire7.png" alt=""/>
                        </div>
                        <div className={clsx(styles['home-new__item-btn'])}>
                            <div className={clsx(styles['home-new__item-btn--inner'])}>
                                <Link className={clsx(styles['home-new__item-link'], 'link-underline')}
                                      to="/">ACER ASPIRE 7</Link>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles['home-new__item--inner'])}>
                        <div className={clsx(styles['home-new__item-img--outer'])}>
                            <img className={styles['home-new__item-img']}
                                 src="/img/customer/product/mouse/mouse-logitechM650.png" alt=""/>
                        </div>
                        <div className={clsx(styles['home-new__item-btn'])}>
                            <div className={clsx(styles['home-new__item-btn--inner'])}>
                                <Link className={clsx(styles['home-new__item-link'], 'link-underline')}
                                      to="/">MOUSE LOGITECH M650</Link>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles['home-new__item--inner'])}>
                        <div className={clsx(styles['home-new__item-img--outer'])}>
                            <img className={styles['home-new__item-img']}
                                 src="/img/customer/product/mobile/samsung-s24Ultra.png" alt=""/>
                        </div>
                        <div className={clsx(styles['home-new__item-btn'])}>
                            <div className={clsx(styles['home-new__item-btn--inner'])}>
                                <Link className={clsx(styles['home-new__item-link'], 'link-underline')}
                                      to="/">SAMSUNG S24 ULTRA</Link>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </section>

            <section className={clsx(styles["home-featured"])}>
                <h2 className={clsx('text-center')}>Typical Product</h2>
                <div className={clsx(styles['home-new__middle'])}></div>
                <ul className={clsx(styles["home-featured__category"])}>
                    <Link data-filter="*" className={clsx(styles["home-featured__category-item"],'link-underline')}>All</Link>
                    <Link data-filter=".laptop" className={clsx(styles["home-featured__category-item"],'link-underline')}>Laptop</Link>
                    <Link data-filter=".mobile" className={clsx(styles["home-featured__category-item"],'link-underline')}>Mobile</Link>
                    <Link data-filter=".sound" className={clsx(styles["home-featured__category-item"],'link-underline')}>Sound</Link>
                    <Link data-filter=".mouse" className={clsx(styles["home-featured__category-item"],'link-underline')}>Mouse</Link>
                    <Link data-filter=".keyboard" className={clsx(styles["home-featured__category-item"],'link-underline')}>Keyboard</Link>
                </ul>
                <ul className={clsx(styles['home-featured__list'], 'd-flex flex-wrap')} ref={containerRef}>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 laptop')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/laptop/lenovo-ideapadSlim3.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Laptop IdeaPad Slim 3</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$300.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 laptop')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/laptop/acer-aspire5.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Laptop AcerAspire 5</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$200.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 mouse')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/mouse/mouse-razer-basiliskV3.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Mouse Razer Basilisk V3</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$300.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 sound')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/sound/sound-maika.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Sound Maika</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$150.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 keyboard')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/keyboard/kb-lenovoK200.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Keyboard Lenovo K200</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$100.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 keyboard')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/keyboard/kb-lenovoK500.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Keyboard Lenovo K500</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$200.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 mobile')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/mobile/iphone11.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Iphone 11</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$150.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['home-featured__item'], 'mix col-lg-3 col-md-4 col-sm-6 mobile')}>
                        <div className={clsx(styles['home-featured__item--inner'])}>
                            <div className={clsx(styles['home-featured__item-img--outer'])}>
                                <img className={clsx(styles['home-featured__item-img'])}
                                     src="/img/customer/product/mobile/xiaomi-note12.png" alt=""/>
                                <ul className={clsx(styles['home-featured__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <Link className="text-dark" to='/'><i className="fa-solid fa-eye"></i></Link>
                                    </li>
                                    <li className={clsx(styles['home-featured__item-list--icon'])}>
                                        <a href='#'><i className="fa-solid fa-cart-shopping"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-featured__item-info text-center mt-3">
                                <p className="mb-0 text-dark">Xiaomi Note 12</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$90.000</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>

            <section className={clsx(styles['home-discount'])}>
                <div className={clsx(styles["home-discount__list"])}>
                    <img src="/img/customer/home/sell-off-1.jpg" className={clsx(styles['home-discount__img'])} alt=""/>
                    <img src="/img/customer/home/sell-off-2.png" className={clsx(styles['home-discount__img'])} alt=""/>
                </div>
            </section>

            <section className="home-top d-flex">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <h2 className="">Top Rated</h2>
                    <div className={clsx(styles['home-new__middle'], 'mb-4')} style={{marginRight: "auto", marginLeft: 0}}></div>
                    <OwlCarousel
                        loop={options.loop}
                        margin={options.margin}
                        nav={options.nav}
                        smartSpeed={options.smartSpeed}
                        autoplay={options.autoplay}
                        autoplayTimeout={options.autoplayTimeout}
                        autoplayHoverPause={options.autoplayHoverPause}
                        responsive={{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }}
                    >
                        <div className="home-top__rated-list">
                            <Link to="/" className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/dell-inspiron14.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dell Inspiron 14</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/dell-inspiron14.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dell Inspiron 14</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/dell-inspiron14.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dell Inspiron 14</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                        </div>
                        <div className="home-top__rated-list">
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/asus-vivobookS16.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus Vivobook S16</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/asus-vivobookS16.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus Vivobook S16</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/laptop/asus-vivobookS16.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus Vivobook S16</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                        </div>

                    </OwlCarousel>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <h2>Top Viewed</h2>
                    <div className={clsx(styles['home-new__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
                    <OwlCarousel
                        loop={options.loop}
                        margin={options.margin}
                        nav={options.nav}
                        smartSpeed={options.smartSpeed}
                        autoplay={options.autoplay}
                        autoplayTimeout={options.autoplayTimeout}
                        autoplayHoverPause={options.autoplayHoverPause}
                        responsive={{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }}
                    >
                        <div className="home-top__rated-list">
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/mobile/iphone11.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">IPhone 11</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/mobile/iphone11.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">IPhone 11</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/mobile/iphone11.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">IPhone 11</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                        </div>
                        <div className="home-top__rated-list">
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/sound/sound-jblPartybox300.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">JBL Party Box 300</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/sound/sound-jblPartybox300.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">JBL Party Box 300</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/sound/sound-jblPartybox300.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">JBL Party Box 300</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                        </div>

                    </OwlCarousel>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <h2>Top Selling</h2>
                    <div className={clsx(styles['home-new__middle'], 'mb-4')}
                         style={{marginRight: "auto", marginLeft: 0}}></div>
                    <OwlCarousel
                        loop={options.loop}
                        margin={options.margin}
                        nav={options.nav}
                        smartSpeed={options.smartSpeed}
                        autoplay={options.autoplay}
                        autoplayTimeout={options.autoplayTimeout}
                        autoplayHoverPause={options.autoplayHoverPause}
                        responsive={{
                            0: {
                                items: 1
                            },
                            600: {
                                items: 1
                            },
                            1000: {
                                items: 1
                            }
                        }}
                    >
                        <div className="home-top__rated-list">
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/keyboard/kb-asusROG-eva.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus ROG Eva Edition</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/keyboard/kb-asusROG-eva.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus ROG Eva Edition</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/keyboard/kb-asusROG-eva.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Asus ROG Eva Edition</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                        </div>
                        <div className="home-top__rated-list">
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/mouse/mouse-dragon-g7.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dragon G7</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/mouse/mouse-dragon-g7.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dragon G7</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                            <Link to='/' className={clsx(styles["home-top__rated-item"], 'd-flex')}>
                                <div
                                    className={clsx(styles["home-top__rated-img--outer"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <img src="/img/customer/product/mouse/mouse-dragon-g7.png" alt=""
                                         className={clsx(styles["home-top__rated-img"])}/>
                                </div>
                                <div className={clsx(styles["home-top__rated-info"], 'col-lg-5 col-md-5 col-sm-5')}>
                                    <p className="text-dark mb-0">Dragon G7</p>
                                    <p className="text-dark" style={{fontWeight: "bold", fontSize: 18}}>$30.000</p>
                                </div>
                            </Link>
                        </div>

                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}

export default HomePage;