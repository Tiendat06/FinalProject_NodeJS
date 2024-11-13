import styles from './DashboardHeader.module.css';
import clsx from "clsx";

function DashboardHeader() {
    return (
        <>
            {/*<header className={clsx(styles['header'])}>*/}
                <div className={clsx(styles["header-search"], 'form-group col-lg-6 col-md-6 col-sm-6')}>
                    <input type="text" className={clsx(styles['header-search__inp'], 'form-control')} placeholder='Search here...'/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className={clsx(styles["header-info"], 'col-lg-6 col-md-6 col-sm-6')}>
                    <div className={clsx(styles["header-info__img"], '')}>
                        <img src="/img/customer/profile/profile-img-test.jpg" alt=""/>
                    </div>
                    <div className={clsx(styles["header-info__personal"], '')}>
                        <p className={clsx(styles["header-info__personal-name"])}>Jake Jason</p>
                        <p className={clsx(styles["header-info__personal-title"])}>Admin</p>
                    </div>
                </div>
            {/*</header>*/}
        </>
    )
}

export default DashboardHeader;