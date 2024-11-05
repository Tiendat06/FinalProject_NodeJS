import clsx from "clsx";
import styles from './ShippingAddress.module.css';
import {Modal} from "~/components/elements";
import {useState} from "react";

function ShippingAddress() {
    const rawData = [
        {id: 1, name: 'Jake Jason', isDefault: true, address: '123 St Stress, New York', phone: '0356779197'},
        {id: 2, name: 'Joe Doe', isDefault: false, address: '456 Greenland Stress, L.A', phone: '0852741963'},
        {id: 3, name: 'Marry Johnson', isDefault: false, address: '789 Norway Stress, Huston', phone: '0369852147'},
    ];

    const [itemSelected, setItemSelected] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [isDefault, setIsDefault] = useState(false);

    const handleOnClickBtn = ({name, phone, address, isDefault}) => {
        setName(name);
        setPhone(phone);
        setAddress(address);
        setIsDefault(isDefault);
    }

    return (
        <>
            <div className="profile-address mb-5">
                <h5 style={{fontWeight: "normal"}}>Shipping Information</h5>
                <button data-bs-toggle='modal' data-bs-target='#add-shipping-address' className={clsx(styles["profile-address__add"])}>
                    <i className="fa-solid fa-plus"></i>
                    <p className={clsx(styles['profile-address__add-text'])}>Add Shipping Address</p>
                </button>

                <ul className={clsx(styles["profile-address__list"])}>
                    {rawData.map((item, index) => (
                        <li key={index} className={clsx(styles["profile-address__item"])}>
                            <div className={clsx(styles["profile-address__item-info"])}>
                                <div
                                    className={clsx(styles["profile-address__item-name"], 'col-lg-12 col-md-12 col-sm-12')}>
                                    <p>{item.name}</p>
                                    <span className={clsx('badge rounded-pill bg-danger', (!item.isDefault && 'd-none'))}><i
                                        className="fa-regular fa-circle-check"></i> Default address</span>
                                </div>
                                <p className={clsx(styles['profile-address__item-text'], 'col-lg-12 col-md-12 col-sm-12')}>Address: {item.address}</p>
                                <p className={clsx(styles['profile-address__item-text'], 'col-lg-12 col-md-12 col-sm-12')}>Phone
                                    number: {item.phone}</p>
                            </div>
                            <div className={clsx(styles["profile-address__item-btn"])}>
                                <span data-bs-toggle='modal' data-bs-target='#update-shipping-address'
                                      onClick={() => handleOnClickBtn(item)}>Update</span>
                                <button data-bs-toggle='modal' data-bs-target='#delete-shipping-address'
                                        onClick={() => handleOnClickBtn(item)}>Remove</button>
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
                saveClassName={clsx(styles['profile-address__save-btn'], 'btn')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'], 'mt-0')} htmlFor="name-add">Full name</label>
                        <input placeholder='Enter full name' type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')} id='name-add'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])} htmlFor="phone-add">Phone number</label>
                        <input placeholder='Enter phone number' type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')} id='phone-add'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])} htmlFor="address-add">Address</label>
                        <input placeholder='Enter shipping address' type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')} id='address-add'/>
                    </div>
                    <div className="form-group d-flex align-items-center mt-3">
                        <input type="checkbox" className='form-check mr-5' id='check-add'/>
                        <label style={{marginTop: 0}} className={clsx(styles['profile-address__label-form'], 'mb-0')} htmlFor="check-add">Set default address</label>
                    </div>
                </div>
            </Modal>

            <Modal
                id='update-shipping-address'
                isStatic={true}
                title='Save change'
                labelBtnSave='Save'
                closeClassName='d-none'
                saveClassName={clsx(styles['profile-address__save-btn'], 'btn')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'], 'mt-0')} htmlFor="name-update">Full name</label>
                        <input value={name}
                               onChange={e => setName(e.target.value)} placeholder='Enter full name'
                               type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')} id='name-update'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])} htmlFor="phone-update">Phone number</label>
                        <input value={phone}
                               onChange={e => setPhone(e.target.value)} placeholder='Enter phone number'
                               type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')} id='phone-update'/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['profile-address__label-form'])} htmlFor="address-update">Address</label>
                        <input value={address}
                               onChange={e => setAddress(e.target.value)} placeholder='Enter shipping address'
                               type="text" className={clsx(styles['profile-address__inp-form'], 'form-control')} id='address-update'/>
                    </div>
                    <div className="form-group d-flex align-items-center mt-3">
                        <input onChange={e => setIsDefault(e.target.checked)} type="checkbox"
                               checked={isDefault} className='form-check mr-5' id='check-update'/>
                        <label style={{marginTop: 0}} className={clsx(styles['profile-address__label-form'], 'mb-0')} htmlFor="check-update">Set default address</label>
                    </div>
                </div>
            </Modal>

            <Modal
                id='delete-shipping-address'
                isStatic={true}
                title='Save change'
                labelBtnSave='Remove'
                closeClassName='d-none'
                saveClassName={clsx(styles['profile-address__save-btn'], 'btn')}
            >
                <div className="form-group">
                    <p className='mb-0'>Are you sure to remove '{address}'?</p>
                </div>
            </Modal>
        </>
    );
}

export default ShippingAddress;