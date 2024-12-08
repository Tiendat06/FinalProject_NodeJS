import styles from './DashboardSidebar.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDashboardContext} from "~/context/DashboardContext";

function DashboardSidebar() {
    const [dashboardLinkItems, setDashboardLinkItems] = useState('dashboard');
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const handleDashboardLinkItem = (linkItem) => {
        setDashboardLinkItems(linkItem);
    }

    const handleDashboardLink = () => {
        setDashboardLinkItems('dashboard');
        setDashBoardSubLink(null);
    }

    return (
        <>
            <div className={clsx(styles["sidebar-header"])}>
                <div className={clsx(styles["sidebar-header__logo"])}>
                    <img src="/img/logo/logo.png" alt="" srcSet=""/>
                </div>
                <i className="fa-solid fa-angles-left"></i>
            </div>
            <div className={clsx(styles["sidebar-content"])}>
                <div className={clsx(styles["sidebar-content__main"])}>
                    <p>MAIN HOME</p>
                    <Link onClick={handleDashboardLink} to='/dashboard' className={clsx(styles['sidebar-content__main-link'],
                        (dashboardLinkItems === 'dashboard' && styles['sidebar-content__main-link--choose']))}>
                        <i className="fa-solid fa-border-all"></i>
                        <span className='col-md-0'>Dashboard</span>
                    </Link>
                </div>
                <div className={clsx(styles["sidebar-content__all"], styles["sidebar-content__main"], 'mt-3')}>
                    <p>PAGES</p>
                    <ul className={clsx(styles["sidebar-content__all-list"])}>
                        <li className={clsx(styles["sidebar-content__all-item"], 'mb-1')}>
                            <div onClick={() => handleDashboardLinkItem('accountSettings')}
                                 className={clsx(styles['sidebar-content__main-link'],
                                     (dashboardLinkItems === 'accountSettings' && styles['sidebar-content__main-link--choose']))}>
                                <i className="fa-solid fa-users"></i>
                                <span className='col-md-0'>Account Settings</span>
                            </div>
                            <ul style={{maxHeight: (dashboardLinkItems === 'accountSettings' ? 500: 0)}}
                                className={clsx(styles["sidebar-content__all-item__list"])}>
                                <li onClick={() => setDashBoardSubLink('manageAccount')}
                                    className={clsx(styles["sidebar-content__all-item__list-item"], 'mt-0')}>
                                    <Link
                                        className={clsx(dashBoardSubLink === 'manageAccount' && styles["sidebar-content__all-item__list-item--choose"])}
                                        to='/dashboard/account'>
                                        <i className="fa-solid fa-gears"></i>
                                        <span>Manage Account</span>
                                    </Link>
                                </li>
                                <li onClick={() => setDashBoardSubLink('manageUser')}
                                    className={clsx(styles["sidebar-content__all-item__list-item"])}>
                                    <Link
                                        className={clsx(dashBoardSubLink === 'manageUser' && styles["sidebar-content__all-item__list-item--choose"])}
                                        to='/dashboard/user'>
                                        <i className="fa-solid fa-user-gear"></i>
                                        <span>Manage User</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={clsx(styles["sidebar-content__all-item"], 'mb-1')}>
                            <div onClick={() => handleDashboardLinkItem('orderSettings')}
                                 className={clsx(styles['sidebar-content__main-link'],
                                     (dashboardLinkItems === 'orderSettings' && styles['sidebar-content__main-link--choose']))}>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span className='col-md-0'>Order Settings</span>
                            </div>
                            <ul style={{maxHeight: (dashboardLinkItems === 'orderSettings' ? 500 : 0)}}
                                className={clsx(styles["sidebar-content__all-item__list"])}>
                                <li onClick={() => setDashBoardSubLink('manageProduct')}
                                    className={clsx(styles["sidebar-content__all-item__list-item"], 'mt-0')}>
                                    <Link
                                        className={clsx(dashBoardSubLink === 'manageProduct' && styles["sidebar-content__all-item__list-item--choose"])}
                                        to='/dashboard/product'>
                                        <i className="fa-solid fa-shop"></i>
                                        <span>Manage Product</span>
                                    </Link>
                                </li>
                                <li onClick={() => setDashBoardSubLink('manageOrder')}
                                    className={clsx(styles["sidebar-content__all-item__list-item"])}>
                                    <Link
                                        className={clsx(dashBoardSubLink === 'manageOrder' && styles["sidebar-content__all-item__list-item--choose"])}
                                        to='/dashboard/order'>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <span>Manage Order</span>
                                    </Link>
                                </li>
                                <li onClick={() => setDashBoardSubLink('manageCoupon')}
                                    className={clsx(styles["sidebar-content__all-item__list-item"])}>
                                    <Link
                                        className={clsx(dashBoardSubLink === 'manageCoupon' && styles["sidebar-content__all-item__list-item--choose"])}
                                        to='/dashboard/coupon'>
                                        <i className="fa-solid fa-ticket"></i>
                                        <span>Manage Coupon</span>
                                    </Link>
                                </li>
                                <li onClick={() => setDashBoardSubLink('manageCategory')}
                                    className={clsx(styles["sidebar-content__all-item__list-item"])}>
                                    <Link
                                        className={clsx(dashBoardSubLink === 'manageCategory' && styles["sidebar-content__all-item__list-item--choose"])}
                                        to='/dashboard/category'>
                                        <i className="fa-solid fa-list"></i>
                                        <span>Manage Category</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className={clsx(styles["sidebar-content__all-item"], 'mb-1')}>
                            <div onClick={() => handleDashboardLinkItem('authentications')}
                                 className={clsx(styles['sidebar-content__main-link'],
                                     (dashboardLinkItems === 'authentications' && styles['sidebar-content__main-link--choose']))}>
                                {/*<i className="fa-solid fa-lock"></i>*/}
                                <i className="fa-solid fa-store"></i>
                                <span className='col-md-0'>Shopping</span>
                            </div>
                            <ul style={{maxHeight: (dashboardLinkItems === 'authentications' ? 500 : 0)}}
                                className={clsx(styles["sidebar-content__all-item__list"])}>
                                <li className={clsx(styles["sidebar-content__all-item__list-item"], 'mt-0')}>
                                    <Link
                                        to='/'>
                                        <i className="fa-solid fa-backward"></i>
                                        <span>Go back shopping page</span>
                                    </Link>
                                </li>
                                {/*<li className={clsx(styles["sidebar-content__all-item__list-item"])}>*/}
                                {/*    <Link*/}
                                {/*        to='/logout'>*/}
                                {/*        <i className="fa-solid fa-door-open"></i>*/}
                                {/*        <span>Logout</span>*/}
                                {/*    </Link>*/}
                                {/*</li>*/}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default DashboardSidebar;