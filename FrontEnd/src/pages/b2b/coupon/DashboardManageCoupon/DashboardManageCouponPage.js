import styles from './DashboardManageCouponPage.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";
import {ConvertDateString} from "~/utils";
import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useLayoutEffect, useState} from "react";

function DashboardManageCouponPage() {
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const itemsPerPage = 10;
    const rawData = [
        {id: 1, name: 'HAPPY10', discount: 10, point: 100, desc: 'Discount 10%'},
        {id: 2, name: 'HAPPY20', discount: 20, point: 200, desc: 'Discount 20%'},
        {id: 3, name: 'HAPPY30', discount: 30, point: 300, desc: 'Discount 30%'},
        {id: 4, name: 'HAPPY40', discount: 40, point: 400, desc: 'Discount 40%'},
        {id: 5, name: 'HAPPY50', discount: 50, point: 500, desc: 'Discount 50%'},
    ];
    const [couponData, setCouponData] = useState(rawData);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useLayoutEffect(() => {
        setPageCount(Math.ceil(couponData.length / itemsPerPage));
        setCurrentItems(couponData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [couponData, currentPage]);

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
                        <p className='mb-0'>Order Settings/</p>
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage Coupon</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link to='/dashboard/product'
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
                                            <th>DISCOUNT</th>
                                            <th>POINT</th>
                                            <th>DESCRIPTION</th>
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
                                                <p className={clsx(styles['user-table__text'])}>{item.discount}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.point}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.desc}</p>
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
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">COUPON NAME</label>
                        <input onChange={e => handleChangeTempData({name: e.target.value})}
                               type="text"
                               id='name-edit'
                               placeholder='Enter coupon name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.name}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="discount-edit">DISCOUNT</label>
                        <input onChange={e => handleChangeTempData({discount: e.target.value})}
                               type='number'
                               id='discount-edit'
                               placeholder='Enter discount'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={tempData.discount}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="point-edit">POINT</label>
                        <input onChange={e => handleChangeTempData({point: e.target.value})}
                               type="number"
                               id='point-edit'
                               placeholder='Enter point'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.point}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-edit">DESCRIPTION</label>
                        <textarea value={tempData.desc} placeholder='Enter description' onChange={e => handleChangeTempData({desc: e.target.value})}
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
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-success')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-add">COUPON NAME</label>
                        <input onChange={e => handleChangeTempData({name: e.target.value})}
                               type="text"
                               id='name-add'
                               placeholder='Enter coupon name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="discount-add">DISCOUNT</label>
                        <input onChange={e => handleChangeTempData({discount: e.target.value})}
                               type='number'
                               id='discount-add'
                               placeholder='Enter discount'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="point-add">POINT</label>
                        <input onChange={e => handleChangeTempData({point: e.target.value})}
                               type="number"
                               id='point-add'
                               placeholder='Enter point'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-add">DESCRIPTION</label>
                        <textarea placeholder='Enter description' onChange={e => handleChangeTempData({desc: e.target.value})}
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
                isStatic={true}
                saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger')}
            >
                <p className='mb-0'>Are you sure to delete {tempData.name}?</p>
            </Modal>
        </>
    )
}

export default DashboardManageCouponPage;