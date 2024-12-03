import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";
import clsx from "clsx";
import styles from "./DashboardManageAccountPage.module.css";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";

import reducer, {initState} from './reducers/reducers';
import {getAccounts, updateAccountBanning} from './actions/actions'
import {toast} from "react-toastify";

function DashboardManageAccountPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const [state, dispatch] = useReducer(reducer, initState);
    const {account, accountList} = state;

    const itemsPerPage = 10;
    const sortedData = accountList.sort((a, b) => {
        if (a.role_id < b.role_id) return -1;
        if (a.role_id > b.role_id) return 1;
        return 0;
    });
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(sortedData.length / itemsPerPage));
        setCurrentItems(sortedData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [sortedData, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    // BE
    useEffect(() => {
        fetch(`${api_url}/account`, {
            method: 'GET',
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) dispatch(getAccounts(data.data));
            })
            .catch(error => console.log(error));
    }, []);

    const handleAccountActions = (item, is_ban) => {
        // console.log(is_ban)
        fetch(`${api_url}/account/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                is_ban
            }),
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(updateAccountBanning(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <div className="manage-user p-5">
                <div className="manage-user__table">
                    <h3 className={clsx(styles["manage-user__table-title"], 'mb-5')}>
                        <p className='mb-0'>Account Settings/</p>
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage Account</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link onClick={() => setDashBoardSubLink('manageUser')}
                              to='/dashboard/user'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-user-gear"></i>
                            <p>Manage User</p>
                        </Link>
                        <Link to='/dashboard/account'
                              className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
                            <i className="fa-solid fa-gears"></i>
                            <p>Manage Account</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-5'>Account Management</h5>
                            <div className={clsx(styles['table-manage'])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th style={{width: 50}}>#</th>
                                        <th>NAME</th>
                                        <th style={{width: 170}} className='text-center'>ADMIN</th>
                                        <th style={{width: 170}} className='text-center'>CUSTOMER</th>
                                        <th style={{width: 170}} className='text-center'>LOCK</th>
                                        <th style={{width: 170}} className='text-center'>SETTINGS</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={`account-${index}`}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item?.user_id?.fullName}</p>
                                            </td>
                                            <td>
                                                {item?.role_id?.role_name === 'Admin' &&
                                                    <p className={clsx(styles['user-table__text'], 'text-center')}>
                                                <span
                                                    className={clsx(styles['user-table__text-span'], 'badge badge-center rounded-pill')}>
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                    </p>
                                                }
                                            </td>
                                            <td>
                                                {item?.role_id?.role_name === 'Customer' &&
                                                    <p className={clsx(styles['user-table__text'], 'text-center')}>
                                                <span
                                                    className={clsx(styles['user-table__text-span'], 'badge badge-center rounded-pill')}>
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                    </p>
                                                }
                                            </td>
                                            <td>
                                                {item?.is_ban === true &&
                                                    <p className={clsx(styles['user-table__text'], 'text-center')}>
                                                <span
                                                    className={clsx(styles['user-table__text-span'], 'badge badge-center bg-danger rounded-pill')}>
                                                    {/*<i className="fa-solid fa-check"></i>*/}
                                                    <i className="fa-solid fa-lock"></i>
                                                </span>
                                                    </p>
                                                }
                                            </td>
                                            <td className='text-center'>
                                                <div className="dropdown">
                                                    <button type="button"
                                                            className={clsx(styles['dropdown-btn'], "btn p-0 hide dropdown-toggle hide-arrow")}
                                                            data-bs-toggle="dropdown">
                                                        <i className="fa-solid fa-ellipsis-vertical"></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <Link onClick={() => handleAccountActions(item, true)} className="dropdown-item">
                                                            Ban
                                                        </Link>
                                                        <Link onClick={() => handleAccountActions(item, false)} className="dropdown-item">
                                                            UnBan
                                                        </Link>
                                                    </div>
                                                </div>
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
        </>
    )
}

export default DashboardManageAccountPage;