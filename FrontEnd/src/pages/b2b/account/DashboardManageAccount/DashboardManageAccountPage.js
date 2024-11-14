import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useLayoutEffect, useState} from "react";
import clsx from "clsx";
import styles from "./DashboardManageAccountPage.module.css";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";

function DashboardManageAccountPage() {
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const itemsPerPage = 10;
    const rawData = [
        {id: 1, name: 'Jake Jason', role_id: 'ROL0000001', isBan: 0, email: 'jakejason@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 2, name: 'Mary Johnson', role_id: 'ROL0000002', isBan: 0, email: 'mary@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 3, name: 'Bobby Larry', role_id: 'ROL0000002', isBan: 0, email: 'bobby@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 4, name: 'Donny Wean', role_id: 'ROL0000002', isBan: 1, email: 'donny@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 5, name: 'Min Curley', role_id: 'ROL0000002', isBan: 0, email: 'mincurley@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 6, name: 'Max Wine', role_id: 'ROL0000001', isBan: 0, email: 'maxwine@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 7, name: 'Kate Perry', role_id: 'ROL0000002', isBan: 0, email: 'kate1958@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 8, name: 'Harry Dan', role_id: 'ROL0000002', isBan: 1, email: 'harry647@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 9, name: 'Lincoln Josh', role_id: 'ROL0000002', isBan: 0, email: 'lincolnjosh@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 10, name: 'Abraham Howl', role_id: 'ROL0000002', isBan: 0, email: 'abraham@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 11, name: 'Hakim Ziyech', role_id: 'ROL0000002', isBan: 0, email: 'hakimz@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 12, name: 'Bundle Sa', role_id: 'ROL0000001', isBan: 0, email: 'bundlesa@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
        {id: 13, name: 'Charlie Kane', role_id: 'ROL0000002', isBan: 0, email: 'charliekane@gmail.com', phone: '0356779197', address: 'Ho Chi Minh City', birthday: '29-09-2003', gender: 'Male'},
    ]
    const sortedData = rawData.sort((a, b) => {
        if (a.role_id < b.role_id) return -1;
        if (a.role_id > b.role_id) return 1;
        return 0;
    });
    const [userData, setUserData] = useState(sortedData);
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
                                        <tr key={index}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.name}</p>
                                            </td>
                                            <td>
                                                {item.role_id === 'ROL0000001' &&
                                                    <p className={clsx(styles['user-table__text'], 'text-center')}>
                                                <span
                                                    className={clsx(styles['user-table__text-span'], 'badge badge-center rounded-pill')}>
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                    </p>
                                                }
                                            </td>
                                            <td>
                                                {item.role_id === 'ROL0000002' &&
                                                    <p className={clsx(styles['user-table__text'], 'text-center')}>
                                                <span
                                                    className={clsx(styles['user-table__text-span'], 'badge badge-center rounded-pill')}>
                                                    <i className="fa-solid fa-check"></i>
                                                </span>
                                                    </p>
                                                }
                                            </td>
                                            <td>
                                                {item.isBan === 1 &&
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
                                                        <Link to='/dashboard/account/Ban' className="dropdown-item">
                                                            Ban
                                                        </Link>
                                                        <Link to='/dashboard/account/Unban' className="dropdown-item">
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