import clsx from "clsx";
import styles from './ShippingAddress.module.css';
import {Modal} from "~/components/elements";
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";
import {useShoppingContext} from "~/context/ShoppingContext";
import reducer, {initialState} from "./reducers/reducers";
import {setAddress, getAddresses, addAddress, updateAddress, deleteAddress, onChangeData} from './actions/actions';

function ShippingAddress() {
    const api_url = process.env.REACT_APP_API_URL;
    const {userData} = useShoppingContext();
    const user_id = userData._id;
    const [state, dispatch] = useReducer(reducer, initialState);
    const {address, addresses} = state;
    const [logMessage, setLogMessage] = useState('');

    // BE
    useEffect(() => {
        // if(!user_id) return;
        fetch(`${api_url}/address/user/profile?user_id=${user_id}`, {
            method: 'GET',
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                const addressData = data.data;
                if (data.status) {
                    console.log(addressData);
                    dispatch(getAddresses(addressData));
                }
                // else window.location.href = '/';
            })
            .catch(error => console.log(error));

    }, []);

    const handleUpdateSaveChange = useCallback(() => {
        fetch(`${api_url}/address/user/profile/${address._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...address,
                // is_default: address.is_default === 'true',
            }),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                const msg = data.msg;
                const status = data.status
                if(status) {
                    dispatch(updateAddress({
                        ...address,
                        // is_default: address.is_default === 'true',
                    }));
                }
                dispatch(setAddress({}));
                setLogMessage(msg);

            })
            .catch(err => console.log(err));
    }, [addresses, address]);

    const handleAddAddress = useCallback(() => {
        // console.log({address});
        fetch(`${api_url}/address/user/profile`, {
            method: 'POST',
            body: JSON.stringify({
                ...address,
                user_id,
                is_default: Boolean(address.is_default),
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) dispatch(addAddress(data.data));
                dispatch(setAddress({}));
                setLogMessage(data.msg);
            })
            .catch(err => console.log(err));
    }, [addresses, address])

    const handleDeleteAddress = useCallback(() => {
        fetch(`${api_url}/address/user/profile/${address._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                if (data.status) dispatch(deleteAddress(address));
                setLogMessage(data.msg);
            })
            .catch(err => console.log(err));
    }, [address, addresses]);

    return (
        <>
            <div className="profile-address mb-5">
                <h5 style={{fontWeight: "normal"}}>Shipping Information</h5>
                <button onClick={() => setLogMessage('')} data-bs-toggle='modal' data-bs-target='#add-shipping-address' className={clsx(styles["profile-address__add"])}>
                    <i className="fa-solid fa-plus"></i>
                    <p className={clsx(styles['profile-address__add-text'])}>Add Shipping Address</p>
                </button>

                <ul className={clsx(styles["profile-address__list"])}>
                    {addresses.map((item, index) => (
                        <li key={index} className={clsx(styles["profile-address__item"])}>
                            <div className={clsx(styles["profile-address__item-info"])}>
                                <div
                                    className={clsx(styles["profile-address__item-name"], 'col-lg-12 col-md-12 col-sm-12')}>
                                    <p>{item.fullName}</p>
                                    <span className={clsx('badge rounded-pill bg-danger', (!item.is_default && 'd-none'))}><i
                                        className="fa-regular fa-circle-check"></i> Default address</span>
                                </div>
                                <p className={clsx(styles['profile-address__item-text'], 'col-lg-12 col-md-12 col-sm-12')}>Address: {item.address}</p>
                                <p className={clsx(styles['profile-address__item-text'], 'col-lg-12 col-md-12 col-sm-12')}>Phone
                                    number: {item.phone_number}</p>
                            </div>
                            <div className={clsx(styles["profile-address__item-btn"])}>
                                <span data-bs-toggle='modal' data-bs-target='#update-shipping-address'
                                      onClick={() => {
                                          dispatch(setAddress(item))
                                          setLogMessage('')
                                      }}>Update</span>
                                <button data-bs-toggle='modal' data-bs-target='#delete-shipping-address'
                                        onClick={() => {
                                            dispatch(setAddress(item))
                                            setLogMessage('')
                                        }}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal
                id='add-shipping-address'
                isStatic={true}
                title='Save change'
                labelBtnSave='Save'
                closeClassName='d-none'
                onClickLabelSave={handleAddAddress}
                saveClassName={clsx(styles['profile-address__save-btn'], 'btn')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'], 'mt-0')} htmlFor="name-add">Full
                            name</label>
                        <input onChange={e => dispatch(onChangeData({fullName: e.target.value}))}
                               placeholder='Enter full name' type="text"
                               className={clsx(styles['profile-address__inp-form'], 'form-control')} id='name-add'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])} htmlFor="phone-add">Phone
                            number</label>
                        <input onChange={e => dispatch(onChangeData({phone_number: e.target.value}))}
                               placeholder='Enter phone number' type="text"
                               className={clsx(styles['profile-address__inp-form'], 'form-control')} id='phone-add'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])}
                               htmlFor="address-add">Address</label>
                        <input onChange={e => dispatch(onChangeData({address: e.target.value}))}
                               placeholder='Enter shipping address' type="text"
                               className={clsx(styles['profile-address__inp-form'], 'form-control')} id='address-add'/>
                    </div>
                    <div className="form-group d-flex align-items-center mt-3">
                        <input checked={address.is_default || false}
                               onChange={e => dispatch(onChangeData({is_default: e.target.checked}))}
                               type="checkbox" className='form-check mr-5' id='check-add'/>
                        <label style={{marginTop: 0}} className={clsx(styles['profile-address__label-form'], 'mb-0')}
                               htmlFor="check-add">Set default address</label>
                    </div>
                </div>
                <div className={clsx('alert alert-danger p-2 mt-2 mb-2', (!logMessage && 'd-none'))}>
                    <p className='mb-0 text-center'>{logMessage}</p>
                </div>
            </Modal>

            <Modal
                id='update-shipping-address'
                isStatic={true}
                title='Save change'
                labelBtnSave='Save'
                onClickLabelSave={handleUpdateSaveChange}
                closeClassName='d-none'
                saveClassName={clsx(styles['profile-address__save-btn'], 'btn')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'], 'mt-0')} htmlFor="name-update">Full
                            name</label>
                        <input value={address.fullName || ''}
                               onChange={e => dispatch(onChangeData({fullName: e.target.value}))}
                               placeholder='Enter full name'
                               type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')}
                               id='name-update'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])} htmlFor="phone-update">Phone
                            number</label>
                        <input value={address.phone_number || ''}
                               onChange={e => dispatch(onChangeData({phone_number: e.target.value}))}
                               placeholder='Enter phone number'
                               type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')}
                               id='phone-update'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])}
                               htmlFor="address-update">Address</label>
                        <input value={address.address || ''}
                               onChange={e => dispatch(onChangeData({address: e.target.value}))}
                               placeholder='Enter shipping address'
                               type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')}
                               id='address-update'/>
                    </div>
                    <div className="form-group d-flex align-items-center mt-3">
                        <input onChange={e => dispatch(onChangeData({is_default: e.target.checked}))} type="checkbox"
                               checked={address.is_default || false} className='form-check mr-5' id='check-update'/>
                        <label style={{marginTop: 0}} className={clsx(styles['profile-address__label-form'], 'mb-0')}
                               htmlFor="check-update">Set default address</label>
                    </div>
                </div>
                <div className={clsx('alert alert-danger p-2 mt-2 mb-2', (!logMessage && 'd-none'))}>
                    <p className='mb-0 text-center'>{logMessage}</p>
                </div>
            </Modal>

            <Modal
                id='delete-shipping-address'
                isStatic={true}
                title='Save change'
                labelBtnSave='Remove'
                closeClassName='d-none'
                onClickLabelSave={handleDeleteAddress}
                saveClassName={clsx(styles['profile-address__save-btn'], 'btn')}
            >
                <div className="form-group">
                    <p className='mb-0'>Are you sure to remove '{address.fullName}'?</p>
                </div>
                <div className={clsx('alert alert-danger p-2 mt-2 mb-2', (!logMessage && 'd-none'))}>
                    <p className='mb-0 text-center'>{logMessage}</p>
                </div>
            </Modal>
        </>
    );
}

export default ShippingAddress;