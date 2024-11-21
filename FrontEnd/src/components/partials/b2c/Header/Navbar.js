import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {useEffect, useLayoutEffect, useState} from "react";

import styles from './Header.module.css';
import stylesGrid from './HeaderGrid.module.css';
import {Button, Modal} from '~/components/elements';
import {useShoppingContext} from "~/context/ShoppingContext";
import {Loading} from "~/components/elements";
import $ from "jquery";

function Navbar() {
    let [search, setSearch] = useState('');
    let [isLogin, setIsLogin] = useState(true);
    const [isCategoryClicked, setIsCategoryClicked] = useState(false);
    const [logInformation, setLogInformation] = useState({});
    const [logMessage, setLogMessage] = useState(null);
    const {userData, setUserData} = useShoppingContext();

    let handleIsLogin = (data) => {
       setIsLogin(data);
       setLogMessage(null);
    }
    let handleLogInformation = (data) => {
        const key = Object.keys(data)[0];
        let value = data[key];
        if (key === 'birthday'){
            value = new Date(value);
        }
        setLogInformation({
            ...logInformation,
            [key]: value
        });
    }
    let onclickCategory = () => {
        setIsCategoryClicked(!isCategoryClicked);
    }

    let onClickLoginOrRegister = (route) => {
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/log/${route}`, {
            method: 'POST',
            body: JSON.stringify(logInformation),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                const msg = data.msg;
                const status = data.status;
                // if(error) setLogMessage(error);
                if(route === 'login') setUserData(() => data.userData);
                setLogMessage(msg);
            })
            .catch(error => console.log(error));
    }
    let onClickLogout = () => {
        localStorage.removeItem("userData");
        const api_url = process.env.REACT_APP_API_URL;
        fetch(`${api_url}/log/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                // setLogMessage(data.msg);
                setUserData({});
            })
            .catch(error => console.log(error));
    }

    let onClickForgotPassword = () => {
        $('.spinner-load').removeClass('d-none');
        $('.btn-save').html('Loading...');
        const api_url = process.env.REACT_APP_API_URL;
        console.log(logInformation.email)

        fetch(`${api_url}/log/forgot-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: logInformation.email}),
        })
            .then(response => response.json())
            .then(data => {
                const msg = data.msg;
                setLogMessage(msg);
                $('.spinner-load').addClass('d-none');
                $('.btn-save').html('Send mail');
            })
            .catch(error => console.log(error));
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
                                <p className="header-top__left-info mb-0 ml-15">Shopping Mall of DPQ Co</p>
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
                                {userData.fullName ?
                                    <>
                                        <p className={clsx('mb-0 link-underline header-top__login-btn')}
                                           style={{cursor: "pointer"}}>
                                            <Link style={{fontWeight: "500"}} to='/user/profile'>
                                                {userData.fullName}
                                            </Link>
                                        </p>
                                        <p className='mb-0 ml-5 mr-5'>/</p>
                                        <p data-bs-toggle='modal' data-bs-target='#logout-modal' className={clsx('mb-0 link-underline header-top__login-btn')}
                                           style={{cursor: "pointer"}}>
                                            <p className='mb-0' style={{fontWeight: "500"}}>
                                                Logout
                                            </p>
                                        </p>
                                    </>
                                    :
                                    <p className={clsx('mb-0 link-underline header-top__login-btn')}
                                       data-bs-toggle='modal'
                                       data-bs-target='#login-modal' style={{cursor: "pointer"}}>Login
                                    </p>
                                }
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
                                    <Link className={clsx(styles['header-bottom__navigator-link'], 'link-underline')} to='/'>HOME</Link>
                                </li>
                                <li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>
                                    <Link className={clsx(styles['header-bottom__navigator-link'], 'link-underline')} to='/shop'>SHOP</Link>
                                </li>
                                {userData.role_name === 'Admin' &&
                                <li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>
                                    <Link className={clsx(styles['header-bottom__navigator-link'], 'link-underline')} to='/dashboard'>ADMIN</Link>
                                </li>
                                }
                                {/*<li className={clsx(styles['header-bottom__navigator'], 'mr-50', stylesGrid['header-bottom__navigator'])}>*/}
                                {/*    <Link className={clsx(styles['header-bottom__navigator-link'], 'link-underline')} to='/contact'>LOGOUT</Link>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-md-1 d-flex">
                            <div className={clsx(styles['header-bottom__mobile'], 'col-md-0 col-lg-0')}>
                                <i className={clsx('fa-solid fa-bars', styles['header-bottom__mobile-icon'])}></i>
                            </div>

                            <Link to='/shop/cart' className="header-bottom__icon col-sm-0 position-relative d-flex justify-content-center align-items-center col-lg-4 col-md-4 col-sm-4">
                                <i className={clsx("fa-solid fa-basket-shopping")}
                                   style={{fontSize: 25, cursor: "pointer"}}></i>
                                <div className={clsx("position-absolute", styles['header-bottom__icon--notice'])}>1</div>
                            </Link>
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
                                <div className={clsx(styles['header-search__left-list--inner'], isCategoryClicked ? styles['header-search__left-list--down']: undefined)}>
                                    <div className={clsx(styles['header-search__left-item'])}>Laptop</div>
                                    <div className={clsx(styles['header-search__left-item'])}>Mobile</div>
                                    <div className={clsx(styles['header-search__left-item'])}>Loudspeaker</div>
                                    <div className={clsx(styles['header-search__left-item'])}>Mouse</div>
                                    <div className={clsx(styles['header-search__left-item'])}>Keyboard</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-sm-12 d-flex">
                            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search products..." type="text" className={clsx('col-lg-10 col-md-9 col-sm-9', styles['header-search__middle-inp'])} id=""/>
                            <Button label="SEARCH" className={clsx('btn btn-danger col-lg-2 col-md-3 col-sm-3', styles['header-search__middle-btn'])} />
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-0">
                            <img className={clsx(styles['header-search__right-shipper'])} src="/img/logo/shipper.png"
                                 alt=""/>
                        </div>
                    </div>
                </div>
            </header>
            <Modal
                id='login-modal'
                closeClassName='d-none'
                isStatic={true}
                modalContentClassName={`${styles['login-modal__content']}`}
                modalFooterClassName="d-none"
                modalHeaderClassName="d-none" >
                <div className='modal-form overflow-hidden'>
                    <div className="modal-slide d-flex">
                        {isLogin ?
                            <div className="login-form col-lg-12 col-md-12 col-sm-12">
                                <button onClick={() => setIsLogin(true)}
                                        style={{float: "right", fontSize: 12}} type="button" className="btn-close"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                <h2 className='mb-0 mt-3'>Login</h2>
                                <p className='mb-4'>Do not have an account yet?
                                    <a onClick={() => handleIsLogin(false)} className={clsx(styles['sign-up__btn'])}
                                       style={{textDecoration: "underline", cursor: "pointer"}}> Sign up</a>
                                </p>
                                <div className="form-group mt-3">
                                    <div className="form-group">
                                        <label htmlFor="phone" className="login-modal__email"><p className="mb-0">Phone
                                            number</p>
                                        </label>
                                        <input name='phone' onChange={(e) => handleLogInformation({phone: e.target.value})} type="text" id="phone" placeholder='Enter phone number...'
                                               className={clsx(styles["login-input__phone"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="pwd" className="login-modal__email"><p
                                            className="mb-0">Password</p>
                                        </label>
                                        <input name='password' onChange={(e) => handleLogInformation({password: e.target.value})} type="password" id="pwd" placeholder='Enter password...'
                                               className={clsx(styles["login-input__password"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3 d-flex align-items-center justify-content-between">
                                        <div className="form-group d-flex align-items-center">
                                            <input type="checkbox" name="" id="remember"/>
                                            <label htmlFor="remember" className="login-modal__remember ml-5"><span
                                                style={{fontSize: 12}}>Remember me</span></label>
                                        </div>
                                        <div className="form-group d-flex align-items-center">
                                            <div data-bs-toggle='modal' data-bs-target='#forgot-password-modal' data-bs-dismiss="modal"
                                                  className="login-modal__remember link-underline ml-5"><span
                                                style={{fontSize: 12, cursor: "pointer"}}>Forgot password?</span></div>
                                        </div>
                                    </div>
                                    {logMessage &&
                                    <div className="alert alert-danger p-2 mt-3 mb-0">
                                        <p style={{fontSize: 14}} className='mb-0 text-center'>{logMessage}</p>
                                    </div>
                                    }
                                    <button onClick={() => onClickLoginOrRegister('login')} type="button"
                                            className={clsx(styles['login-modal__btn'], 'btn mt-4')}>Login
                                    </button>
                                    <div className={clsx(styles["login-modal__separate"])}>
                                        <div
                                            className={clsx(styles["login-modal__line"], 'col-lg-4 col-md-4 col-sm-4')}></div>
                                        <p className={clsx(styles["login-modal__line-text"], 'mb-0 text-center col-lg-4 col-md-4 col-sm-4')}>or
                                            you can</p>
                                        <div
                                            className={clsx(styles["login-modal__line"], 'col-lg-4 col-md-4 col-sm-4')}></div>
                                    </div>
                                    <button className={clsx(styles['login-modal__btn-gg'], 'btn')}>
                                        <img className={clsx(styles['login-modal__btn-gg-img'])}
                                             src="/img/icon/google-icon.png" alt=""/>
                                        <p className={clsx(styles['login-modal__btn-gg-text'], 'mb-0')}>Login with
                                            Google</p>
                                    </button>
                                </div>
                            </div>
                            :
                            <div className="register-form col-lg-12 col-md-12 col-sm-12">
                                <button onClick={() => setIsLogin(true)}
                                        style={{float: "right", fontSize: 12}} type="button" className="btn-close"
                                        data-bs-dismiss="modal" aria-label="Close"></button>
                                <h2 className='mb-0 mt-3'>Register</h2>
                                <p className='mb-4'>Have an account yet?
                                    <a onClick={() => handleIsLogin(true)} className={clsx(styles['sign-in__btn'])}
                                       style={{textDecoration: "underline", cursor: "pointer"}}> Sign in</a>
                                </p>
                                <div className="form-group">
                                    <div className="form-group mt-3">
                                        <label htmlFor="fullname" className="login-modal__fullname"><p
                                            className="mb-0">Full name</p></label>
                                        <input name='fullName'
                                            onChange={(e) => handleLogInformation({fullName: e.target.value})} type="text" id="fullname" placeholder='Enter full name...'
                                               className={clsx(styles["login-input__phone"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="phone" className="login-modal__email"><p
                                            className="mb-0">Phone number</p>
                                        </label>
                                        <input name='phone'
                                            onChange={(e) => handleLogInformation({phone: e.target.value})} type="text" id="phone" placeholder='Enter phone number...'
                                               className={clsx(styles["login-input__phone"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="pwd" className="login-modal__email"><p
                                            className="mb-0">Password</p>
                                        </label>
                                        <input name='password'
                                            onChange={(e) => handleLogInformation({password: e.target.value})} type="text" id="pwd" placeholder='Enter password...'
                                               className={clsx(styles["login-input__password"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="dob" className="login-modal__email"><p
                                            className="mb-0">Birthday</p>
                                        </label>
                                        <input name='dob'
                                            onChange={(e) => handleLogInformation({birthday: e.target.value})} type="date" id="dob" placeholder='Enter birthday...'
                                               className={clsx(styles["login-input__password"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="gender" className="login-modal__email"><p
                                            className="mb-0">Gender</p>
                                        </label>
                                        <select name='gender'
                                            onChange={(e) => handleLogInformation({gender: e.target.value})} id="gender"
                                                className={clsx(styles["login-input__password"], 'form-select')}>
                                            <option value="">--Choose gender--</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="email" className="login-modal__email"><p
                                            className="mb-0">Email</p>
                                        </label>
                                        <input name='email'
                                            onChange={(e) => handleLogInformation({email: e.target.value})} type="email" id="email" placeholder='Enter email...'
                                               className={clsx(styles["login-input__password"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3">
                                        <label htmlFor="address" className="login-modal__email"><p
                                            className="mb-0">Address</p>
                                        </label>
                                        <input name='address'
                                            onChange={(e) => handleLogInformation({address: e.target.value})} type="text" id="address" placeholder='Enter address...'
                                               className={clsx(styles["login-input__password"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mt-3 d-flex align-items-center">
                                        <div className="form-group d-flex align-items-center">
                                            <input required type="checkbox" name="" id="remember"/>
                                            <label htmlFor="remember" className="login-modal__remember ml-5">
                                                    <span style={{fontSize: 12}}>I agree the
                                                        <a href='#'
                                                           className="login-modal__remember link-underline ml-5">
                                                            <span style={{fontSize: 12, textDecoration: "underline"}}>Term and Conditions</span></a>
                                                    </span>
                                            </label>
                                        </div>
                                    </div>
                                    {logMessage &&
                                        <div className="alert alert-danger p-2 mt-3 mb-0">
                                            <p style={{fontSize: 14}} className='mb-0 text-center'>{logMessage}</p>
                                        </div>
                                    }
                                    <button onClick={() => onClickLoginOrRegister('register')} type="button"
                                            className={clsx(styles['login-modal__btn'], 'btn mt-3')}>Register
                                    </button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Modal>

            <Modal
                id='logout-modal'
                closeClassName='d-none'
                modalTypeClassName='modal-sm'
                modalBodyClassName='danger-bg__shop'
                modalFooterClassName="d-none"
                modalHeaderClassName="d-none"
            >
                <div className="logout">
                    <div className="text-center">
                        <img width='200' src="/img/general/danger-zone.gif" alt=""/>
                    </div>
                    <p className='mb-0 text-center'>Are you sure to logout?</p>
                    <div className="text-center mt-2">
                        <button data-bs-dismiss="modal" onClick={onClickLogout} className="btn btn-danger"><Link className='text-light' to='/'>Logout</Link></button>
                    </div>
                </div>
            </Modal>

            <Modal
                id='forgot-password-modal'
                closeClassName='d-none'
                isStatic={true}
                modalContentClassName={`${styles['login-modal__content']}`}
                modalFooterClassName="d-none"
                modalHeaderClassName="d-none" >
                <div className="login-form col-lg-12 col-md-12 col-sm-12">
                    <button onClick={() => setIsLogin(true)}
                            style={{float: "right", fontSize: 12}} type="button" className="btn-close"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    <h2 className='mb-0 mt-3'>Forgot password</h2>
                    <div className="form-group mt-3">
                        <div className="form-group">
                            <label htmlFor="email" className="login-modal__email"><p className="mb-0">Email</p>
                            </label>
                            <input name='email' onChange={(e) => handleLogInformation({email: e.target.value})}
                                   type="email" id="email" placeholder='Enter email...'
                                   className={clsx(styles["login-input__phone"], 'form-control')}/>
                        </div>
                        {logMessage &&
                            <div className="alert alert-danger p-2 mt-3 mb-0">
                                <p style={{fontSize: 14}} className='mb-0 text-center'>{logMessage}</p>
                            </div>
                        }
                        <button type="button" onClick={onClickForgotPassword}
                                className={clsx(styles['login-modal__btn'], 'btn mt-4')}>
                            <Loading spinnerClassName='d-none spinner-load' />
                            <span className='btn-save'>Send mail</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </nav>
    );
}

export default Navbar;
