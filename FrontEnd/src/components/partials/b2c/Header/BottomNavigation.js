import {Link} from "react-router-dom";
import {useShoppingContext} from "~/context/ShoppingContext";
import clsx from "clsx";
import styles from './Header.module.css';

function BottomNavigation() {
    const {userData} = useShoppingContext();

    return (
        <>
            <div className={clsx(styles["bottom-nav"])}>
                <ul style={{paddingLeft: 0}} className={clsx(styles["bottom-nav__list"])}>
                    <li className={clsx(styles["bottom-nav__item"])}>
                        <Link to='/'>
                            <i className={clsx(styles['bottom-nav__item--icon'], "fa-solid fa-house")}></i>
                            <span>HOME</span>
                        </Link>
                    </li>
                    <li className={clsx(styles["bottom-nav__item"])}>
                    <Link to='/shop'>
                            <i className={clsx(styles['bottom-nav__item--icon'], "fa-solid fa-shop")}></i>
                            <span>SHOP</span>
                        </Link>
                    </li>
                    {userData.role_name === 'Admin' &&
                    <li className={clsx(styles["bottom-nav__item"])}>
                        <Link to='/dashboard'>
                            <i className={clsx(styles['bottom-nav__item--icon'], "fa-solid fa-gear")}></i>
                            <span>ADMIN</span>
                        </Link>
                    </li>
                    }
                </ul>
            </div>
        </>
    )
}

export default BottomNavigation;