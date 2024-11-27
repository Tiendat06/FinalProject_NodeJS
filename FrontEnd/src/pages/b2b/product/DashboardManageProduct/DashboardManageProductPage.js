import styles from './DashboardManageProductPage.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";
import {ConvertDateString} from "~/utils";
import {useDashboardContext} from "~/context/DashboardContext";
import {useCallback, useLayoutEffect, useState} from "react";

function DashboardManageProductPage() {
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();

    const itemsPerPage = 10;
    const rawData = [
        { id: 1, name: "Laptop IdeaPad Slim 3", img: "/img/customer/product/laptop/lenovo-ideapadSlim3.png", import_price:200, price: 300, type: 'laptop', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 2, name: "IPhone 11", img: "/img/customer/product/mobile/iphone11.png", import_price:200, price: 300, type: 'mobile', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 3, name: "Loudspeaker Mini Xiaomi", img: "/img/customer/product/sound/sound-mini-siaomi.png", import_price:200, price: 300, type: 'sound', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 4, name: "Laptop Microsoft Surface", img: "/img/customer/product/laptop/microsoft-surface.png", import_price:200, price: 400, type: 'laptop', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 5, name: "Laptop Vivobook 15", img: "/img/customer/product/laptop/asus-vivobook15.png", import_price:200, price: 300, type: 'laptop', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 6, name: "Laptop HP Pavilion 15", img: "/img/customer/product/laptop/hp-pavilion15.png", import_price:200, price: 300, type: 'laptop', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 7, name: "Mouse G56D", img: "/img/customer/product/mouse/mouse-G56D.png", import_price:200, price: 300, type: 'mouse', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 8, name: "Samsung S23 Ultra", img: "/img/customer/product/mobile/samsung-S23Ultra.png", import_price:200, price: 300, type: 'mobile', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 9, name: "Lenovo K310", img: "/img/customer/product/keyboard/kb-lenovoK310.png", import_price:200, price: 300, type: 'keyboard', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
        { id: 10, name: "Logitech M650", img: "/img/customer/product/mouse/mouse-logitechM650.png", import_price:200, price: 200, type: 'mouse', quantity: 100, desc: 'This is from VN', date_created: new Date('2024-11-13') },
    ];
    const [productData, setProductData] = useState(rawData);
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    useLayoutEffect(() => {
        setPageCount(Math.ceil(productData.length / itemsPerPage));
        setCurrentItems(productData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [productData, currentPage]);
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
                        <p className={clsx(styles['manage-user__table-page'], 'mb-0')}> Manage Product</p>
                    </h3>
                    <ul className={clsx(styles["manage-user__table-list"], 'mb-3')}>
                        <Link onClick={() => setDashBoardSubLink('manageProduct')} to='/dashboard/product'
                              className={clsx(styles["manage-user__table-item"], styles['manage-user__table-item--choose'])}>
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
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>Product Management</h5>
                            <div className={clsx(styles['user-table__btn'])}>
                                <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}><i
                                    className="fa-brands fa-product-hunt"></i> Add Product
                                </button>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>IMPORT PRICE</th>
                                        <th>RETAIL PRICE</th>
                                        <th>CATEGORY</th>
                                        <th>QUANTITY</th>
                                        <th>DATE CREATED</th>
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
                                                <p className={clsx(styles['user-table__text'])}>{item.import_price}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.price}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.type}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item.quantity}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{ConvertDateString(item.date_created)}</p>
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
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">FULL
                            NAME</label>
                        <input onChange={e => handleChangeTempData({name: e.target.value})}
                               type="text"
                               id='name-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.name}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="import_price-edit">IMPORT
                            PRICE</label>
                        <input onChange={e => handleChangeTempData({import_price: e.target.value})}
                               type='number'
                               id='import_price-edit'
                               placeholder='Enter import price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={tempData.import_price}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-edit">RETAIL
                            PRICE</label>
                        <input onChange={e => handleChangeTempData({price: e.target.value})}
                               type="number"
                               id='retail_price-edit'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.price}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="quantity-edit">QUANTITY</label>
                        <input onChange={e => handleChangeTempData({quantity: e.target.value})}
                               type="number"
                               id='quantity-edit'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} value={tempData.quantity}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="type-edit">CATEGORY</label>
                        <select onChange={e => handleChangeTempData({type: e.target.value})}
                                name="" id="type-edit"
                                value={tempData.type}
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="laptop">Laptop</option>
                            <option value="mobile">Mobile</option>
                            <option value="sound">Loudspeaker</option>
                            <option value="mouse">Mouse</option>
                            <option value="keyboard">Keyboard</option>
                        </select>
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
                title='Add Product'
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
                               placeholder='Enter product name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="import_price-add">IMPORT
                            PRICE</label>
                        <input onChange={e => handleChangeTempData({import_price: e.target.value})}
                               type='number'
                               id='import_price-add'
                               placeholder='Enter import price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-add">RETAIL
                            PRICE</label>
                        <input onChange={e => handleChangeTempData({price: e.target.value})}
                               type="number"
                               id='retail_price-add'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="quantity-add">QUANTITY</label>
                        <input onChange={e => handleChangeTempData({quantity: e.target.value})}
                               type="number"
                               id='quantity-add'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')} />
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="type-add">CATEGORY</label>
                        <select onChange={e => handleChangeTempData({type: e.target.value})}
                                name="" id="type-add"
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="laptop">Laptop</option>
                            <option value="mobile">Mobile</option>
                            <option value="sound">Loudspeaker</option>
                            <option value="mouse">Mouse</option>
                            <option value="keyboard">Keyboard</option>
                        </select>
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

export default DashboardManageProductPage;