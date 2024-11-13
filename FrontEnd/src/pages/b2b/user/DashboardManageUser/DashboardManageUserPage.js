import styles from './DashboardManageUserPage.module.css';
import clsx from "clsx";
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {Link} from "react-router-dom";

import {Modal, Pagination} from "~/components/elements";
import {useDashboardContext} from "~/context/DashboardContext";
import {ConvertDateString} from '~/utils';

function DashboardManageUserPage() {

    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const itemsPerPage = 10;
    const rawData = [
        {id: 1, name: 'Jake Jason', email: 'jakejason@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 2, name: 'Mary Johnson', email: 'mary@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 3, name: 'Bobby Larry', email: 'bobby@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 4, name: 'Donny Wean', email: 'donny@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 5, name: 'Min Curley', email: 'mincurley@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 6, name: 'Max Wine', email: 'maxwine@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 7, name: 'Kate Perry', email: 'kate1958@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 8, name: 'Harry Dan', email: 'harry647@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 9, name: 'Lincoln Josh', email: 'lincolnjosh@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 10, name: 'Abraham Howl', email: 'abraham@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 11, name: 'Hakim Ziyech', email: 'hakimz@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 12, name: 'Bundle Sa', email: 'bundlesa@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
        {id: 13, name: 'Charlie Kane', email: 'charliekane@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: new Date('2024-11-13'), gender: 'Male'},
    ]
    const [userData, setUserData] = useState(rawData);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useLayoutEffect(() => {
        setPageCount(Math.ceil(userData.length / itemsPerPage));
        setCurrentItems(userData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [userData, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    const [tempData, setTempData] = useState({});
    const handleChangeTempData = (data) => {
        const key = Object.keys(data)[0];
        let value = data[key];
        if (key === 'birthday'){
            value = new Date(value);
        }
        setTempData({
            ...tempData,
            [key]: value
        });
    }

    return (
        <>
            <div className="manage-user p-5">
                <div className="manage-user__table">
                    <h3 className={clsx(styles["manage-user__table-title"], 'mb-5')}>
                        <p className='mb-0'>Account Settings/</p>
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage User</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link to='/dashboard/user' className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
                            <i className="fa-solid fa-user-gear"></i>
                            <p>Manage User</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageAccount')} to='/dashboard/account' className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-gears"></i>
                            <p>Manage Account</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>User Management</h5>
                            <div className={clsx(styles['user-table__btn'])}>
                                <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}><i className="fa-solid fa-user-plus"></i> Add User
                                </button>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>PHONE</th>
                                        <th>ADDRESS</th>
                                        <th>BIRTHDAY</th>
                                        <th>GENDER</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.id}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.name}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.email}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.phone}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.address}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{ConvertDateString(item.birthday)}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.gender}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <i onClick={() => setTempData(item)} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                                    <i onClick={() => setTempData(item)} data-bs-toggle='modal'
                                                       data-bs-target='#delete-modal'
                                                       className={clsx(styles['user-table__action-trash'], "fa-solid fa-trash")}></i>
                                                </p>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                id='edit-modal'
                title='Save change'
                labelBtnSave='Save'
                closeClassName='d-none'
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-success')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">FULL
                            NAME</label>
                        <input onChange={e => handleChangeTempData({name: e.target.value})}
                               type="text"
                               id='name-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.name}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="email-edit">EMAIL</label>
                        <input onChange={e => handleChangeTempData({email: e.target.value})}
                               type="email"
                               id='email-edit'
                               placeholder='Enter email'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.email}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="phone-edit">PHONE NUMBER</label>
                        <input onChange={e => handleChangeTempData({phone: e.target.value})}
                               type="text"
                               id='phone-edit'
                               placeholder='Enter phone number'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.phone}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="address-edit">ADDRESS</label>
                        <input onChange={e => handleChangeTempData({address: e.target.value})}
                               type="text"
                               id='address-edit'
                               placeholder='Enter address'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.address}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="dob-edit">BIRTHDAY</label>
                        <input onChange={e => handleChangeTempData({birthday: e.target.value})}
                               type="date"
                               id='dob-edit'
                               placeholder='Enter birthday'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={ConvertDateString(tempData.birthday, 2)}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="gender-edit">GENDER</label>
                        <select onChange={e => handleChangeTempData({gender: e.target.value})}
                                name="" id="gender-edit"
                                value={tempData.gender}
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </Modal>

            <Modal
                id='add-modal'
                title='Add User'
                labelBtnSave='Save'
                closeClassName='d-none'
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-success')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-add">FULL
                            NAME</label>
                        <input onChange={e => handleChangeTempData({name: e.target.value})}
                               type="text"
                               id='name-add'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="email-add">EMAIL</label>
                        <input onChange={e => handleChangeTempData({email: e.target.value})}
                               type="email"
                               id='email-add'
                               placeholder='Enter email'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="phone-add">PHONE NUMBER</label>
                        <input onChange={e => handleChangeTempData({phone: e.target.value})}
                               type="text"
                               id='phone-add'
                               placeholder='Enter phone number'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="address-add">ADDRESS</label>
                        <input onChange={e => handleChangeTempData({address: e.target.value})}
                               type="text"
                               id='address-add'
                               placeholder='Enter address'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="dob-add">BIRTHDAY</label>
                        <input onChange={e => handleChangeTempData({birthday: e.target.value})}
                               type="date"
                               id='dob-add'
                               placeholder='Enter birthday'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="gender-add">GENDER</label>
                        <select onChange={e => handleChangeTempData({gender: e.target.value})}
                                name="" id="gender-add"
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </Modal>

            <Modal
            id='delete-modal'
            title='Delete user'
            labelBtnSave='Delete'
            closeClassName='d-none'
            isStatic={true}
            saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger')}
            >
                <p className='mb-0'>Are you sure to delete {tempData.name}?</p>
            </Modal>
        </>
    )
}

export default DashboardManageUserPage;