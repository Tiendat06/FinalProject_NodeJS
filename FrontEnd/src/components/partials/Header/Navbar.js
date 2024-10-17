import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {useState} from "react";
import styles from './Header.module.css';
import stylesGrid from './HeaderGrid.module.css';
import Button from '../../elements/Button';

function Navbar() {

    let [search, setSearch] = useState('');

    let onclickCategory = () => {
        let listCategory = document.querySelector(`.${styles['header-search__left-list--inner']}`)
        if(listCategory.classList.contains(`${styles['header-search__left-list--down']}`)){
            listCategory.classList.remove(`${styles['header-search__left-list--down']}`);
        } else{
            listCategory.classList.add(`${styles['header-search__left-list--down']}`);
        }
    }

    return (
        <nav className="">
            <header className={clsx('navbar navbar-expand-lg navbar-light bg-light', styles['header-top'])}>
                <div className="container">
                    <div className="row w-100">
                        <div className="header-top__left d-flex col-lg-6 col-sm-6 col-md-6">
                            <div className="header-top__left-email d-flex align-items-center">
                                <i className={clsx("fa-solid fa-envelope", styles['header-top__left-email--icon'])}></i>
                                <a href="mailto:tadat290903@gmail.com"
                                   className={clsx('ml-5 mr-15', styles['header-top__left-email--mail'])}>tadat290903@gmail.com</a>
                            </div>
                            <div className={clsx(styles["header-top__middle"])}></div>

                            <div className="header-top__left-para d-flex align-items-center col-md-0 col-sm-0">
                                {/*<i className="fa-solid fa-truck"></i>*/}
                                <p className="header-top__left-info mb-0 ml-15">Shopping Mall of D&P Co</p>
                            </div>
                        </div>
                        <div
                            className="header-top__right d-flex align-items-center justify-content-end col-lg-6 col-sm-6 col-md-6">
                            <div className={clsx("d-flex", styles['header-top__right-icon'])}>
                                <i className={clsx("fa-brands fa-facebook mr-15 col-sm-0", styles['header-top__left-email--icon'])}></i>
                                <i className={clsx("fa-brands fa-instagram col-sm-0", styles['header-top__left-email--icon'])}></i>
                            </div>
                            <div className={clsx(styles["header-top__middle"])}></div>
                            <div className={clsx("d-flex align-items-center", styles['header-top__right-account'])}>
                                <i className={clsx("fa-solid fa-user mr-15", styles['header-top__left-email--icon'])}></i>
                                <p className={clsx('mb-0')} style={{cursor: "pointer"}}>Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className={clsx(styles['header-bottom'])}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center header-bottom__row">
                        <div className="col-lg-2 col-sm-6 col-md-2">
                            <Link to='/'>
                                <img className={clsx(styles['header-bottom__img'])} src="/img/logo/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="col-lg-6 col-sm-0 col-md-9">
                            <ul className={clsx('d-flex col-sm-0', styles['header-bottom__list'])}>
                                <li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>
                                    <Link className={clsx(styles['header-bottom__navigator-link'])} to='/'>HOME</Link>
                                </li>
                                <li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>
                                    <Link className={clsx(styles['header-bottom__navigator-link'])} to='/shop'>SHOP</Link>
                                </li>
                                <li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>
                                    <Link className={clsx(styles['header-bottom__navigator-link'])} to='/about'>ABOUT</Link>
                                </li>
                                <li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>
                                    <Link className={clsx(styles['header-bottom__navigator-link'])} to='/contact'>CONTACT</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-1 d-flex">
                            <div className={clsx(styles['header-bottom__mobile'], 'col-md-0 col-lg-0')}>
                                <i className={clsx('fa-solid fa-bars', styles['header-bottom__mobile-icon'])}></i>
                            </div>

                            <div className="header-bottom__icon col-sm-0 position-relative d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4">
                                <i className={clsx("fa-solid fa-basket-shopping")}
                                   style={{fontSize: 25, cursor: "pointer"}}></i>
                                <div className={clsx("position-absolute", styles['header-bottom__icon--notice'])}>1</div>
                            </div>
                            <div className="header-bottom__contact col-sm-0 d-flex col-lg-8 col-md-0 col-sm-8">
                                <div className={clsx(styles['header-bottom__phone'], 'mr-15')}>
                                    <i className={clsx('fa-solid fa-phone', styles['header-bottom__phone--icon'])}></i>
                                </div>
                                <div className="header-bottom__text">
                                    <a className={clsx(styles['header-bottom__link-phone'])} href="tel:+84356779197">0356779197</a>
                                    <p className={clsx('mb-0')}>support 24/7 time</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
            <header className="header-search">
                <div className="container">
                    <div className="row flex-wrap-reverse align-items-center">
                        <div className={clsx("col-lg-2 col-md-3 col-sm-12 position-relative", stylesGrid['header-search__category'])}>
                            <div onClick={onclickCategory} className={clsx(styles['header-search__left-title'], 'text-center')}>
                                <p className={clsx('mb-0 text-light d-flex justify-content-around align-items-center w-100')}>
                                    <i className="fa-solid fa-bars"></i>
                                    <span style={{marginLeft: 10, marginRight: 10, fontWeight: "bold", letterSpacing: 1}}>Category</span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </p>
                            </div>
                            <div style={{zIndex: 3}} className={clsx("position-absolute header-search__left-list", styles['header-search__left-list'])}>
                                <div className={clsx(styles['header-search__left-list--inner'])}>
                                    <div className={clsx(styles['header-search__left-item'])}>Laptop</div>
                                    <div className={clsx(styles['header-search__left-item'])}>Mobile</div>
                                    <div className={clsx(styles['header-search__left-item'])}>Headphone</div>
                                    <div className={clsx(styles['header-search__left-item'])}>RAM</div>
                                    <div className={clsx(styles['header-search__left-item'])}>ROM</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-12 d-flex">
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." type="text" className={clsx('col-lg-10 col-md-9 col-sm-9', styles['header-search__middle-inp'])} id=""/>
                            <Button label="SEARCH" className={clsx('btn btn-success col-lg-2 col-md-3 col-sm-3', styles['header-search__middle-btn'])} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-0">
                            <img className={clsx(styles['header-search__right-shipper'])} src="/img/logo/shipper.png"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    );
}

export default Navbar;
