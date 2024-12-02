import styles from './DashboardManageCouponPage.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";
import {ConvertDateString} from "~/utils";
import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";
import reducer, {initState} from './reducers/reducer';
import {getCoupons, setCoupon, onChangeData, updateCouponData, addCoupon, deleteCoupon} from "./actions/action";
import {toast} from "react-toastify";

function DashboardManageCouponPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();
    const [state, dispatch] = useReducer(reducer, initState);
    const {coupon, couponList} = state;

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useLayoutEffect(() => {
        setPageCount(Math.ceil(couponList.length / itemsPerPage));
        setCurrentItems(couponList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [couponList, currentPage]);

    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    // BE
    useEffect(() => {
        fetch(`${api_url}/coupon`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status) dispatch(getCoupons(data.data));
            })
            .catch(err => console.log(err));
    }, []);

    const fetchUpdateCoupon = useCallback(() => {
        fetch(`${api_url}/coupon/${coupon._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coupon_name: coupon.coupon_name,
                description: coupon.description,
                code: coupon.code,
                point: coupon.point,
                discount: coupon.discount,
                expiredAt: coupon.expiredAt,
            }),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(updateCouponData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [coupon])

    const fetchAddCoupon = useCallback(() => {
        fetch(`${api_url}/coupon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                coupon_name: coupon.coupon_name,
                description: coupon.description,
                code: coupon.code,
                point: coupon.point,
                discount: coupon.discount,
                expiredAt: coupon.expiredAt,
            }),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(addCoupon(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [coupon]);

    const fetchDeleteCoupon = useCallback(() => {
        fetch(`${api_url}/coupon/${coupon._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(deleteCoupon(data.deletedCoupon));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [coupon])

    return (
        <>
            <div className="manage-user p-5">
                <div className="manage-user__table">
                    <h3 className={clsx(styles["manage-user__table-title"], 'mb-5')}>
                        <p className='mb-0'>Order Settings/</p>
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage Coupon</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link onClick={() => setDashBoardSubLink('manageProduct')} to='/dashboard/product'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-user-gear"></i>
                            <p>Manage Product</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageOrder')} to='/dashboard/order'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-gears"></i>
                            <p>Manage Order</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageCoupon')} to='/dashboard/coupon'
                              className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
                            <i className="fa-solid fa-ticket"></i>
                            <p>Manage Coupon</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>Coupon Management</h5>
                            <div className={clsx(styles['user-table__btn'])}>
                                <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}>
                                    <i className="fa-solid fa-ticket"></i> Add Coupon
                                </button>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>CODE</th>
                                        <th>DISCOUNT</th>
                                        <th>POINT</th>
                                        <th>DATE EXPIRED</th>
                                        <th>DESCRIPTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={`coupon-${index}`}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.coupon_name}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.code}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.discount}%</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.point}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{ConvertDateString(item.expiredAt)}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.description}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <i onClick={() => dispatch(setCoupon(item))} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                                    <i onClick={() => dispatch(setCoupon(item))} data-bs-toggle='modal'
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
                onClickLabelSave={fetchUpdateCoupon}
                closeClassName='d-none'
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">COUPON
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({coupon_name: e.target.value}))}
                               type="text"
                               id='name-edit'
                               placeholder='Enter coupon name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={coupon.coupon_name}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="code-edit">COUPON
                            CODE</label>
                        <input onChange={e => dispatch(onChangeData({code: e.target.value}))}
                               type="text"
                               id='code-edit'
                               placeholder='Enter coupon code'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={coupon.code}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="discount-edit">DISCOUNT</label>
                        <input onChange={e => dispatch(onChangeData({discount: e.target.value}))}
                               type='number'
                               id='discount-edit'
                               placeholder='Enter discount'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={coupon.discount}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="point-edit">POINT</label>
                        <input onChange={e => dispatch(onChangeData({point: e.target.value}))}
                               type="number"
                               id='point-edit'
                               placeholder='Enter point'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={coupon.point}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="date-edit">DATE EXPIRED</label>
                        <input onChange={e => dispatch(onChangeData({expiredAt: e.target.value}))}
                               type="date"
                               id='date-edit'
                               placeholder='Enter date expired'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={ConvertDateString(coupon.expiredAt, 0)}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-edit">DESCRIPTION</label>
                        <textarea value={coupon.description} placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({description: e.target.value}))}
                                  className={clsx(styles['edit-modal__inp'], 'form-control')}
                                  name="" id="desc-edit" cols="30" rows="5">
                        </textarea>
                    </div>
                </div>
            </Modal>

            <Modal
                id='add-modal'
                title='Add Coupon'
                labelBtnSave='Save'
                closeClassName='d-none'
                onClickLabelSave={fetchAddCoupon}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-add">COUPON
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({coupon_name: e.target.value}))}
                               type="text"
                               id='name-add'
                               placeholder='Enter coupon name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="code-add">COUPON
                            CODE</label>
                        <input onChange={e => dispatch(onChangeData({code: e.target.value}))}
                               type="text"
                               id='code-add'
                               placeholder='Enter coupon code'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="discount-add">DISCOUNT</label>
                        <input onChange={e => dispatch(onChangeData({discount: e.target.value}))}
                               type='number'
                               id='discount-add'
                               placeholder='Enter discount'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="point-add">POINT</label>
                        <input onChange={e => dispatch(onChangeData({point: e.target.value}))}
                               type="number"
                               id='point-add'
                               placeholder='Enter point'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="date-add">DATE EXPIRED</label>
                        <input onChange={e => dispatch(onChangeData({expiredAt: e.target.value}))}
                               type="date"
                               id='date-add'
                               placeholder='Enter date expired'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-add">DESCRIPTION</label>
                        <textarea placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({description: e.target.value}))}
                                  className={clsx(styles['edit-modal__inp'], 'form-control')}
                                  name="" id="desc-add" cols="30" rows="5">
                        </textarea>
                    </div>
                </div>
            </Modal>

            <Modal
                id='delete-modal'
                title='Delete Product'
                labelBtnSave='Delete'
                closeClassName='d-none'
                onClickLabelSave={fetchDeleteCoupon}
                isStatic={true}
                saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger')}
            >
                <p className='mb-0'>Are you sure to delete '{coupon.coupon_name}'?</p>
            </Modal>
        </>
    )
}

export default DashboardManageCouponPage;