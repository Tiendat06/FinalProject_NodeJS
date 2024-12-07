import styles from './ProfilePage.module.css';
import styleGrid from './ProfilePageGrid.module.css'
import MyAccount from "./MyAccount/MyAccount";
import ManageOrder from "./ManageOrder/ManageOrder";
import ShippingAddress from "./ShippingAddress/ShippingAddress";
import FavoriteItem from "./FavoriteItem/FavoriteItem";
import ManageVoucher from "./ManageVoucher/ManageVoucher";

import clsx from "clsx";
import {useEffect, useState} from "react";
import {useShoppingContext} from "~/context/ShoppingContext";

function ProfilePage() {
    const [pageContent, setPageContent] = useState(() => sessionStorage.getItem('pageContentProfile') || 'myAccount');
    const [isCategoryClicked, setIsCategoryClicked] = useState(false);
    const {userData, setUserData} = useShoppingContext();

    useEffect(() => {
        sessionStorage.setItem('pageContentProfile', pageContent);
    }, [pageContent]);

    let onclickCategory = () => {
        setIsCategoryClicked(!isCategoryClicked);
    }

    return (
        <>
            <div className="profile d-flex flex-wrap">
                <div className={clsx(styleGrid['profile-info'], "col-lg-2 col-md-12 col-sm-12")}>
                    <div onClick={onclickCategory} className={clsx(styles["profile-resume"], styleGrid['profile-resume'], 'col-lg-12 col-md-12 col-sm-12')}>
                        {/*<div className={clsx(styles["profile-resume__img"], 'col-lg-3 col-md-3 col-sm-3 mr-15')}>*/}
                        {/*    <img className={clsx(styles['profile-resume__img-item'])}*/}
                        {/*         src="/img/customer/profile/profile-img-test.jpg" alt="" srcSet=""/>*/}
                        {/*</div>*/}
                        <div className={clsx(styles["profile-resume__name"], 'col-lg-8 col-md-8 col-sm-8')}>
                            <p className={clsx(styles["profile-resume__name-text"], 'mb-0')}>{userData.fullName}</p>
                            <p className={clsx(styles["profile-resume__name-phone"], 'mb-0')}>{userData.phone}</p>
                        </div>
                    </div>
                    <ul className={clsx(styles["profile-category"], 'col-lg-12 col-md-12 col-sm-12', (isCategoryClicked && (styles['profile-resume--click'])))}>
                        <li onClick={() => setPageContent('myAccount')} className={clsx(styles["profile-item"], (pageContent === 'myAccount' && styles['profile-item--click']))}>
                            <div className={clsx(styles["profile-item__icon"], 'col-lg-3 col-md-3 col-sm-3')}>
                                <i className={clsx(styles['profile-item__icon-item'], "fa-solid fa-user")}></i>
                            </div>
                            <p className={clsx(styles["profile-item__para"], 'col-lg-9 col-md-9 col-sm-9')}>My Account</p>
                        </li>
                        <li onClick={() => setPageContent('manageOrder')} className={clsx(styles["profile-item"], (pageContent === 'manageOrder' && styles['profile-item--click']))}>
                            <div className={clsx(styles["profile-item__icon"], 'col-lg-3 col-md-3 col-sm-3')}>
                                <i className={clsx(styles['profile-item__icon-item'], "fa-solid fa-box")}></i>
                            </div>
                            <p className={clsx(styles["profile-item__para"], 'col-lg-9 col-md-9 col-sm-9')}>Manage
                                Order</p>
                        </li>
                        <li onClick={() => setPageContent('shippingAddress')} className={clsx(styles["profile-item"], (pageContent === 'shippingAddress' && styles['profile-item--click']))}>
                            <div className={clsx(styles["profile-item__icon"], 'col-lg-3 col-md-3 col-sm-3')}>
                                <i className={clsx(styles['profile-item__icon-item'], "fa-solid fa-location-dot")}></i>
                            </div>
                            <p className={clsx(styles["profile-item__para"], 'col-lg-9 col-md-9 col-sm-9')}>Shipping
                                Address</p>
                        </li>
                        {/*<li onClick={() => setPageContent('myComment')} className={clsx(styles["profile-item"], (pageContent === 'myComment' && styles['profile-item--click']))}>*/}
                        {/*    <div className={clsx(styles["profile-item__icon"], 'col-lg-3 col-md-3 col-sm-3')}>*/}
                        {/*        <i className={clsx(styles['profile-item__icon-item'], "fa-regular fa-star-half-stroke")}></i>*/}
                        {/*    </div>*/}
                        {/*    <p className={clsx(styles["profile-item__para"], 'col-lg-9 col-md-9 col-sm-9')}>My*/}
                        {/*        Comment</p>*/}
                        {/*</li>*/}
                        <li onClick={() => setPageContent('favoriteItem')} className={clsx(styles["profile-item"], (pageContent === 'favoriteItem' && styles['profile-item--click']))}>
                            <div className={clsx(styles["profile-item__icon"], 'col-lg-3 col-md-3 col-sm-3')}>
                                <i className={clsx(styles['profile-item__icon-item'], "fa-solid fa-heart")}></i>
                            </div>
                            <p className={clsx(styles["profile-item__para"], 'col-lg-9 col-md-9 col-sm-9')}>Favorite
                                Item</p>
                        </li>
                        <li onClick={() => setPageContent('voucher')} className={clsx(styles["profile-item"], (pageContent === 'voucher' && styles['profile-item--click']))}>
                            <div className={clsx(styles["profile-item__icon"], 'col-lg-3 col-md-3 col-sm-3')}>
                                <i className={clsx(styles['profile-item__icon-item'], "fa-solid fa-ticket")}></i>
                            </div>
                            <p className={clsx(styles["profile-item__para"], 'col-lg-9 col-md-9 col-sm-9')}>Coupon</p>
                        </li>
                    </ul>
                </div>

                <div className="col-lg-10 col-md-12 col-sm-12">
                    <div className={clsx(styles['profile-content'], styleGrid['profile-content'])}>
                        {pageContent === 'myAccount' && <MyAccount />}
                        {pageContent === 'manageOrder' && <ManageOrder />}
                        {pageContent === 'shippingAddress' && <ShippingAddress />}
                        {pageContent === 'favoriteItem' && <FavoriteItem />}
                        {pageContent === 'voucher' && <ManageVoucher />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;