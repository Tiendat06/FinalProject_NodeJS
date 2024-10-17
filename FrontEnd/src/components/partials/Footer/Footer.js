import styles from './Footer.module.css';
import clsx from 'clsx';
import {Link} from "react-router-dom";

function Footer(){
    return (
        <footer className={clsx(styles['footer'])}>
            <footer className={clsx("d-flex flex-wrap", styles['footer-top'])}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6">
                            <h4>Contact Us</h4>
                            <p className={clsx(styles["footer-top__st-contact"])}>Address: 19 Tan Phong, Nguyen Huu Tho,
                                District 7</p>
                            <p className={clsx(styles["footer-top__st-contact"])}>Phone: <a
                                href="tel:+84356779197">0356779197</a></p>
                            <p className={clsx(styles["footer-top__st-contact"], 'mb-0')}>Email: <a
                                href="mailto:tadat290903@gmail.com">tadat290903@gmail.com</a></p>
                        </div>
                        <div className="col-lg-2 col-md-0 col-sm-0">
                            <h5>Useful Links</h5>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">About us</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">About Our Shop</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Privacy Policy</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Our Services</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Our Sitemap</Link>
                        </div>
                        <div className="col-lg-2 col-md-0 col-sm-0">
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Who We Are</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Delivery Information</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Privacy Policy</Link>
                            <Link className="d-block mb-15" style={{color: "#787878", fontWeight: "normal"}} to="/about">Innovation</Link>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 d-flex flex-wrap justify-content-end align-items-center">
                            <img className={clsx(styles['footer-top__th-img'])} src="/img/logo/logo.png" alt=""/>
                            <div className={clsx(styles["footer-top__th-list"], 'col-lg-12 col-sm-12 col-md-12')}>
                                <div className={clsx(styles["footer-top__th-icon"])}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </div>
                                <div className={clsx(styles["footer-top__th-icon"])}>
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                                <div className={clsx(styles["footer-top__th-icon"])}>
                                    <i className="fa-brands fa-x-twitter"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>

            <footer className="footer-bottom text-center p-4 bg-light">
                <p className="mb-0">Copyright &copy; 2024 All rights reserved</p>
            </footer>
        </footer>
    )
}

export default Footer;