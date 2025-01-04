import styles from './MyAccount.module.css';
import styleGrid from './MyAccountGrid.module.css';
import clsx from "clsx";
import {useState, useReducer, useEffect, useCallback} from "react";
import reducer, {initState} from "./reducers/reducer";
import {setDay} from './actions/actions';
import {Loading, Modal} from "~/components/elements";
import {useShoppingContext} from "~/context/ShoppingContext";
import $ from 'jquery';
import {toast} from 'react-toastify';

function MyAccount() {
    const {userData, setUserData} = useShoppingContext();
    const api_url = process.env.REACT_APP_API_URL;

    const user_id = userData._id;
    const date = new Date(userData.birthday);
    const [state, dispatch] = useReducer(reducer, initState);
    const { days } = state;

    const [day, setDays] = useState(Number(date.getUTCDate()));
    const [month, setMonth] = useState(Number(date.getUTCMonth() + 1));
    const [year, setYear] = useState(Number(date.getUTCFullYear()));

    const [profile, setProfile] = useState({
        name: userData.fullName,
        email: userData.email,
        phoneNumber: userData.phone,
        gender: userData.gender,
        profile_image: userData.profile_image,
        img_file: ''
    });
    // const [logMessage, setLogMessage] = useState('');

    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const [hidePassword, setHidePassword] = useState({
        currentPwd: true,
        newPwd: true,
        confirmPwd: true
    });

    const togglePasswordVisibility = (field) => {
        setHidePassword((prev) => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const handleMonthChange = (e) => {
        const newMonth = Number(e.target.value);
        setMonth(newMonth);
        dispatch(setDay(newMonth, year));
        console.log('re-render month');
    };

    const handleYearChange = (e) => {
        const newYear = Number(e.target.value);
        setYear(newYear);
        dispatch(setDay(month, newYear));
        console.log('re-render year');
    };

    const handleProfile = (data) => {
        const key = Object.keys(data)[0];
        let value = data[key];
        setProfile({
            ...profile,
            [key]: value,
        })
    }

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(profile.profile_image);
        }
    }, [profile]);

    const handleProfileImg = (e) => {
        const img = e.target.files[0];
        console.log(img)
        setProfile({
            ...profile,
            profile_image: URL.createObjectURL(img),
            img_file: img,
        })
    }

    // BE
    const saveChangeUpdateProfile = () => {
        $('.spinner-border').removeClass('d-none');
        $('.btn-save').html('Loading...');

        const birthday = new Date(Date.UTC(year, month - 1, day));
        const formData = new FormData();
        formData.append('name', profile.name);
        formData.append('email', profile.email);
        formData.append('phoneNumber', profile.phoneNumber);
        formData.append('gender', profile.gender);
        formData.append('birthday', birthday);
        formData.append('img_file', profile.img_file);

        fetch(`${api_url}/user/profile/${user_id}`, {
            method: 'PUT',
            body: formData,
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status === true){
                    const userLocalData = JSON.parse(localStorage.getItem("userData"));
                    const newUserLocalData = {
                        ...userLocalData,
                        birthday,
                        fullName: profile.name,
                        email: profile.email,
                        gender: profile.gender,
                        phone: profile.phoneNumber,
                        profile_image: data.profile_image,
                    }
                    setUserData(() => newUserLocalData);
                    toast.success(data.msg);
                } else{
                    toast.error(data.msg);
                }
                $('.spinner-border').addClass('d-none');
                $('.btn-save').html('Save Change');

            })
            .catch(err => console.error(err))
    }

    const handleChangePassword = useCallback(() => {
        if(password.newPassword !== password.confirmPassword) {
            // setLogMessage('Confirm password is not correct !');
            toast.error('Confirm password is not correct !');
            return;
        }
        fetch(`${api_url}/user/profile/change-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...password,
                user_id
            }),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                // setLogMessage(data.msg);
                if(data.status) toast.success(data.msg);
                else toast.error(data.msg);
            })
            .catch(err => console.error(err))
    }, [password]);

    return (
        <div className="profile-account">
            <h5 style={{fontWeight: "normal"}}>Account Information</h5>
            <div className={clsx(styles["profile-account__content"])}>
                <div className={clsx(styles["profile-account__personal"], 'col-lg-6 col-md-6 col-sm-12')}>
                    <p>Personal Information</p>
                    <div className={clsx(styles["profile-account__personal-main"], styleGrid['profile-account__personal-main'])}>
                        <div
                            className={clsx(styles["profile-account__personal-img"], 'col-lg-3 col-md-3 col-sm-3 mb-3')}>
                            <label htmlFor="profile-img" className='h-100 w-100'>
                                <img className={clsx(styles['profile-account__personal-img--inner'])}
                                     src={profile.profile_image} alt="User Profile" srcSet=""/>
                            </label>
                            <input onChange={handleProfileImg} id='profile-img' hidden type="file"/>
                        </div>
                        <div
                            className={clsx(styles["profile-account__personal-info"], 'col-lg-9 col-md-9 col-sm-9 w-100')}>
                        <div className={clsx(styles['profile-account__personal-group'], "form-group")}>
                                <label className={clsx(styles['profile-account__personal-label'])} htmlFor="fullname">Full name</label>
                                <input value={profile.name} onChange={e => handleProfile({name: e.target.value})} type="text" name="" id="fullname"
                                       className={clsx(styles['profile-account__name-inp'])}
                                       placeholder='Enter full name'/>
                            </div>
                            <div className={clsx(styles['profile-account__personal-group'], "form-group")}>
                                <label className={clsx(styles['profile-account__personal-label'])} htmlFor="phonenumber">Phone number</label>
                                <input value={profile.phoneNumber} onChange={e => handleProfile({phoneNumber: e.target.value})} type="text" name="" id="phonenumber"
                                       className={clsx(styles['profile-account__name-inp'])}
                                       placeholder='Enter phone number'/>
                            </div>
                            <div className={clsx(styles['profile-account__personal-group'], "form-group")}>
                                <label className={clsx(styles['profile-account__personal-label'])} htmlFor="email">Email</label>
                                <input value={profile.email} onChange={e => handleProfile({email: e.target.value})} type="text" name="" id="email"
                                       className={clsx(styles['profile-account__name-inp'])}
                                       placeholder='Enter email'/>
                            </div>
                        </div>
                    </div>
                    <div className={clsx(styles["profile-account__personal-more"])}>
                        <div className={clsx(styles["profile-account__personal-more__dob"], 'w-100 d-flex justify-content-between flex-wrap')}>
                            <label className={clsx(styles['profile-account__personal-more__label'], 'col-lg-3 col-md-3 col-sm-12')} htmlFor="">Date of
                                Birth</label>
                            <div className={clsx(styleGrid['profile-account__personal-more__date'], "col-lg-9 col-md-9 col-sm-12 d-flex justify-content-end")}>
                                <select value={day}  onChange={e => setDays(Number(e.target.value))}
                                        className={clsx(styles['profile-account__personal-select'])} name="" id="">
                                    {days.map((item, index) => (
                                        <option key={index} value={item}>{item}</option>
                                    ))}
                                </select>
                                <select value={month} onChange={handleMonthChange}
                                        className={clsx(styles['profile-account__personal-select'])} name="" id="">
                                    {(() => {
                                        const options = [];
                                        for (let i = 1; i <= 12; i++) {
                                            options.push(<option key={i} value={i}>{i}</option>);
                                        }
                                        return options;
                                    })()}
                                </select>
                                <select value={year} onChange={handleYearChange}
                                        className={clsx(styles['profile-account__personal-select'])} name="" id="">
                                    {(() => {
                                        const options = [];
                                        for (let i = Number((new Date()).getFullYear()) - 100; i <= Number((new Date()).getFullYear()); i++) {
                                            options.push(<option key={i} value={i}>{i}</option>);
                                        }
                                        return options;
                                    })()}
                                </select>
                            </div>

                        </div>
                        <div
                            className={clsx(styles["profile-account__personal-more__gender"], 'd-flex w-100 mt-5 align-items-center justify-content-between')}>
                            <label htmlFor=""
                                   className={clsx(styles["profile-account__personal-more__label"], styleGrid['profile-account__personal-more__label'], ' col-lg-3 col-md-3 col-sm-12')}>Gender</label>
                            <div
                                className={clsx(styles['profile-account__personal-more__form'], "form-group col-lg-9 col-md-9 col-sm-12 d-flex justify-content-end")}>
                                <p style={{fontSize: 14}}
                                   className={clsx(styles["profile-account__personal-more__label-gender"], 'w-50 mb-0 justify-content-end d-flex align-items-center')}>
                                    <span onClick={() => handleProfile({gender: 'Male'})}
                                          className={clsx(profile.gender === 'Male' && clsx(styles['profile-account__personal-more__label-span']))}>Male</span>
                                </p>
                                <p style={{fontSize: 14}}
                                   className={clsx(styles["profile-account__personal-more__label-gender"], 'w-50 mb-0 justify-content-end d-flex align-items-center')}>
                                    <span onClick={() => handleProfile({gender: 'Female'})}
                                          className={clsx(profile.gender === 'Female' && (styles['profile-account__personal-more__label-span']))}>Female</span>
                                </p>
                            </div>
                        </div>
                        <div className="alert alert-primary mt-4 p-2 d-none w-100">
                            <p style={{fontSize: 14}} className='mb-0 text-center alert-text'></p>
                        </div>
                        <div className={clsx(styles["profile-account__personal-btn"], 'mt-4')}>
                            <button onClick={saveChangeUpdateProfile}
                                    className={clsx(styles["profile-account__personal-btn__item"])}>
                                <Loading spinnerClassName='d-none spinner-load' />
                                <span className='btn-save'>Save Change</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-0 d-flex justify-content-center">
                    <div className={clsx(styles["profile-account__middle"])}></div>
                </div>
                <div className={clsx(styles["profile-account__other"], styleGrid['profile-account__other'], 'col-lg-5 col-md-5 col-sm-12')}>
                    <div className={clsx(styles["profile-account__security"])}>
                        <p className={clsx(styles['profile-account__security-para'], 'mb-0')}>Security</p>
                        <div className={clsx(styles["profile-account__security-info"], 'mt-3')}>
                            <div
                                className={clsx(styles["profile-account__security-title"], 'col-lg-6 col-md-6 col-sm-6')}>
                                <i className="fa-solid fa-lock"></i>
                                <span>Change password</span>
                            </div>
                            <div
                                className={clsx(styles["profile-account__security-btn"], 'col-lg-6 col-md-6 col-sm-6')}>
                                <button data-bs-toggle='modal' data-bs-target='#change-password'
                                    className={clsx(styles['profile-account__security-btn__item'])}>Update
                                </button>
                            </div>
                        </div>
                        <div className={clsx(styles["profile-account__security-info"], 'mt-5')}>
                            <div
                                className={clsx(styles["profile-account__security-title"], 'col-lg-6 col-md-6 col-sm-6')}>
                                <i className="fa-regular fa-trash-can"></i>
                                <span>Remove this account?</span>
                            </div>
                            <div
                                className={clsx(styles["profile-account__security-btn"], 'col-lg-6 col-md-6 col-sm-6')}>
                                <button data-bs-toggle='modal' data-bs-target='#remove-account'
                                    className={clsx(styles['profile-account__security-btn__item'])}>Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                id='change-password'
                title='Change password'
                onClickLabelSave={handleChangePassword}
                isStatic={true}
                labelBtnSave='Save'
                saveClassName={clsx(styles['profile-account__pwd-save'], 'btn')}
                closeClassName='d-none'
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['profile-account__pwd-label'])} htmlFor="current-pwd">Current
                            password</label>
                        <div className="position-relative">
                            <input value={password.currentPassword}
                                   onChange={e => setPassword({...password, currentPassword: e.target.value})}
                                   placeholder='Enter current password'
                                   type={hidePassword.currentPwd ? "password" : "text"}
                                   id='current-pwd'
                                   className={clsx(styles['profile-account__pwd-inp'], 'form-control')}/>
                            <i
                                onClick={() => togglePasswordVisibility("currentPwd")}
                                className={clsx(styles['profile-account__pwd-icon'], 'fa-regular', (hidePassword.currentPwd ? "fa-eye" : "fa-eye-slash"))}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label className={clsx(styles['profile-account__pwd-label'])} htmlFor="new-pwd">New
                            password</label>
                        <div className="position-relative">
                            <input value={password.newPassword}
                                   onChange={e => setPassword({...password, newPassword: e.target.value})}
                                   placeholder='Enter new password'
                                   type={hidePassword.newPwd ? "password" : "text"}
                                   id='new-pwd'
                                   className={clsx(styles['profile-account__pwd-inp'], 'form-control')}/>
                            <i
                                onClick={() => togglePasswordVisibility("newPwd")}
                                className={clsx(styles['profile-account__pwd-icon'], 'fa-regular', (hidePassword.newPwd ? "fa-eye" : "fa-eye-slash"))}
                            ></i>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <label className={clsx(styles['profile-account__pwd-label'])} htmlFor="confirm-pwd">Confirm
                            password</label>
                        <div className="position-relative">
                            <input value={password.confirmPassword}
                                   onChange={e => setPassword({...password, confirmPassword: e.target.value})}
                                   placeholder='Re-enter new password'
                                   type={hidePassword.confirmPwd ? "password" : "text"}
                                   id='confirm-pwd'
                                   className={clsx(styles['profile-account__pwd-inp'], 'form-control')}/>
                            <i
                                onClick={() => togglePasswordVisibility("confirmPwd")}
                                className={clsx(styles['profile-account__pwd-icon'], 'fa-regular', (hidePassword.confirmPwd ? "fa-eye" : "fa-eye-slash"))}
                            ></i>
                        </div>
                    </div>
                </div>
                {/*<div className={clsx('alert alert-danger p-2 mt-2 mb-2', (!logMessage && 'd-none'))}>*/}
                {/*    <p className='mb-0 text-center'>{logMessage}</p>*/}
                {/*</div>*/}
            </Modal>

            <Modal
                id='remove-account'
                title='Remove account'
                isStatic={true}
                labelBtnSave='Remove'
                saveClassName={clsx(styles['profile-account__pwd-save'], 'btn')}
                closeClassName='d-none'
            >
                <p className='mb-0'>Are you sure to remove this account?</p>
            </Modal>
        </div>
    )
}

export default MyAccount;