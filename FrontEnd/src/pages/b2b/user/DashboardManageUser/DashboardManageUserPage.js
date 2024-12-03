import styles from './DashboardManageUserPage.module.css';
import clsx from "clsx";
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";
import {Link} from "react-router-dom";

import {Modal, Pagination} from "~/components/elements";
import {useDashboardContext} from "~/context/DashboardContext";
import {ConvertDateString} from '~/utils';
import {toast} from "react-toastify";

import reducer, {initState} from './reducers/reducer';
import {getUsers, setUser, onChangeData, updateUserData, removeUser} from './actions/actions';

function DashboardManageUserPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();
    const [state, dispatch] = useReducer(reducer, initState);
    const {user, userList} = state;

    const itemsPerPage = 10;
    // const [userData, setUserData] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useLayoutEffect(() => {
        setPageCount(Math.ceil(userList.length / itemsPerPage));
        setCurrentItems(userList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [userList, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    // BE
    useEffect(() => {
        fetch(`${api_url}/user`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status) dispatch(getUsers(data.data));
            })
            .catch(err => console.log(err));
    }, []);

    const updateUser = useCallback(() => {
        // console.log(user);
        fetch(`${api_url}/user/profile/${user._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user.fullName,
                email: user.email,
                birthday: user.birthday,
                phoneNumber: user.phone,
                gender: user.gender,
                point: user.point,
            }),
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if(data.status) {
                    dispatch(updateUserData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [user])

    const deleteUser = useCallback(() => {
        fetch(`${api_url}/user/${user._id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                if(data.status){
                    dispatch(removeUser(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [user])

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
                            <h5 className='mb-4'>User Management</h5>
                            {/*<div className={clsx(styles['user-table__btn'])}>*/}
                            {/*    <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}><i className="fa-solid fa-user-plus"></i> Add User*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div className={clsx(styles["table-manage"])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>EMAIL</th>
                                        <th>PHONE</th>
                                        <th>POINT</th>
                                        <th>BIRTHDAY</th>
                                        <th>GENDER</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={`user-${index}`}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.fullName}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.email}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.phone}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.point}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{ConvertDateString(item.birthday)}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.gender}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <i onClick={() => dispatch(setUser(item))} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                                    <i onClick={() => dispatch(setUser(item))} data-bs-toggle='modal'
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
                onClickLabelSave={updateUser}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">FULL
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({fullName: e.target.value}))}
                               type="text"
                               id='name-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={user.fullName}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="email-edit">EMAIL</label>
                        <input onChange={e => dispatch(onChangeData({email: e.target.value}))}
                               type="email"
                               id='email-edit'
                               placeholder='Enter email'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={user.email}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="phone-edit">PHONE NUMBER</label>
                        <input onChange={e => dispatch(onChangeData({phone: e.target.value}))}
                               type="text"
                               id='phone-edit'
                               placeholder='Enter phone number'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={user.phone}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="address-edit">POINT</label>
                        <input onChange={e => dispatch(onChangeData({point: e.target.value}))}
                               type="number"
                               id='address-edit'
                               placeholder='Enter address'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={user.point}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="dob-edit">BIRTHDAY</label>
                        <input onChange={e => dispatch(onChangeData({birthday: e.target.value}))}
                               type="date"
                               id='dob-edit'
                               placeholder='Enter birthday'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={ConvertDateString(user.birthday, 2)}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="gender-edit">GENDER</label>
                        <select onChange={e => dispatch(onChangeData({gender: e.target.value}))}
                                name="" id="gender-edit"
                                value={user.gender}
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
                        <input onChange={e => dispatch(onChangeData({fullName: e.target.value}))}
                               type="text"
                               id='name-add'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="email-add">EMAIL</label>
                        <input onChange={e => dispatch(onChangeData({email: e.target.value}))}
                               type="email"
                               id='email-add'
                               placeholder='Enter email'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="phone-add">PHONE NUMBER</label>
                        <input onChange={e => dispatch(onChangeData({phone: e.target.value}))}
                               type="text"
                               id='phone-add'
                               placeholder='Enter phone number'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="address-add">POINT</label>
                        <input onChange={e => dispatch(onChangeData({point: e.target.value}))}
                               type="text"
                               id='address-add'
                               placeholder='Enter point'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="dob-add">BIRTHDAY</label>
                        <input onChange={e => dispatch(onChangeData({birthday: e.target.value}))}
                               type="date"
                               id='dob-add'
                               placeholder='Enter birthday'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="gender-add">GENDER</label>
                        <select onChange={e => dispatch(onChangeData({gender: e.target.value}))}
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
            onClickLabelSave={deleteUser}
            isStatic={true}
            saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger')}
            >
                <p className='mb-0'>Are you sure to delete {user.fullName}?</p>
            </Modal>
        </>
    )
}

export default DashboardManageUserPage;