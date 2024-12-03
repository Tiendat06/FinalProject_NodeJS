import styles from './DashboardCategory.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";
import {ConvertDateString} from "~/utils";
import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";
import reducer, {initState} from './reducers/reducer';
import {getCategories, onChangeData, setCategory, addCategoryData, deleteCategoryData, updateCategoryData} from "./actions/actions";
import {toast} from "react-toastify";

function DashboardManageCouponPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();
    const [state, dispatch] = useReducer(reducer, initState);
    const {category, categoryList} = state;

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(categoryList.length / itemsPerPage));
        setCurrentItems(categoryList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [categoryList, currentPage]);

    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    // BE
    useEffect(() => {
        fetch(`${api_url}/product/category`, {
            method: "GET",
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) dispatch(getCategories(data.data));
            })
            .catch(err => console.log(err));
    }, []);

    const addCategory = useCallback(() => {
        fetch(`${api_url}/product/category`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category_name: category.category_name,
                description: category.description,
            })
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(addCategoryData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [category])

    const updateCategory = useCallback(() => {
        fetch(`${api_url}/product/category/${category._id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...category
            }),
            credentials: 'include',
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(updateCategoryData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [category])

    const deleteCategory = useCallback(() => {
        fetch(`${api_url}/product/category/${category._id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    dispatch(deleteCategoryData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
            })
            .catch(err => console.log(err));
    }, [category])

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
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-ticket"></i>
                            <p>Manage Coupon</p>
                        </Link>
                        <Link onClick={() => setDashBoardSubLink('manageCategory')} to='/dashboard/category'
                              className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
                            <i className="fa-solid fa-list"></i>
                            <p>Manage Category</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>Category Management</h5>
                            <div className={clsx(styles['user-table__btn'])}>
                                <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}>
                                    <i className="fa-solid fa-ticket"></i> Add Category
                                </button>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>DESCRIPTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={`category-${index}`}>
                                            <td width='40'>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td width='100'>
                                                <p className={clsx(styles['user-table__text'])}>{item.category_name}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.description}</p>
                                            </td>
                                            <td width='100'>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <i onClick={() => dispatch(setCategory(item))} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                                    <i onClick={() => dispatch(setCategory(item))} data-bs-toggle='modal'
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
                onClickLabelSave={updateCategory}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">CATEGORY
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({category_name: e.target.value}))}
                               type="text"
                               id='name-edit'
                               placeholder='Enter category name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={category?.category_name}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-edit">DESCRIPTION</label>
                        <textarea value={category.description} placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({description: e.target.value}))}
                                  className={clsx(styles['edit-modal__inp'], 'form-control')}
                                  name="" id="desc-edit" cols="30" rows="5">
                        </textarea>
                    </div>
                </div>
            </Modal>

            <Modal
                id='add-modal'
                title='Add Category'
                labelBtnSave='Save'
                closeClassName='d-none'
                onClickLabelSave={addCategory}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-add">CATEGORY
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({category_name: e.target.value}))}
                               type="text"
                               id='name-add'
                               placeholder='Enter category name'
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
                title='Delete Category'
                labelBtnSave='Delete'
                closeClassName='d-none'
                onClickLabelSave={deleteCategory}
                isStatic={true}
                saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger')}
            >
                <p className='mb-0'>Are you sure to delete '{category.category_name}'?</p>
            </Modal>
        </>
    )
}

export default DashboardManageCouponPage;