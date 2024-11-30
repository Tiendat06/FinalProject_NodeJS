import styles from './DashboardManageProductPage.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";
import {ConvertDateString} from "~/utils";
import {useDashboardContext} from "~/context/DashboardContext";
import reducer, {initState} from './reducers/reducers';
import {getProducts, setProduct, updateProduct, deleteProduct, onChangeData} from './actions/actions';

import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";

function DashboardManageProductPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();
    const [state, dispatch] = useReducer(reducer, initState);
    const {product, productData} = state;

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
    // const [productData, setProductData] = useState(productList);
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

    useEffect(() => {
        fetch(`${api_url}/product/variant`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) dispatch(getProducts(data.data));

            })
            .catch(error => console.log(error));
    }, []);

    const updateProductVariant = () => {
        fetch(`${api_url}/product/variant/${product._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) dispatch(updateProduct(product));
            })
            .catch(error => console.log(error));
    }
    // console.log(product);

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
                                        <th>RETAIL PRICE</th>
                                        <th>CATEGORY</th>
                                        <th>COLOR</th>
                                        <th>RAM</th>
                                        <th>ROM</th>
                                        <th>WEIGHT</th>
                                        <th>QUANTITY</th>
                                        {/*<th>DESCRIPTION</th>*/}
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td width=''>
                                                <div className="d-flex flex-wrap">
                                                    <img src={`${item.product_image}`}
                                                         style={{width: 25, objectFit: "contain"}} alt=""/>
                                                    <p className={clsx(styles['user-table__text'], 'ml-5')}>{item.product_name}</p>
                                                </div>
                                            </td>
                                            <td width=''>
                                            <p className={clsx(styles['user-table__text'])}>{item.retail_price}</p>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item.product_id.category_id.category_name}</p>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item.product_color}</p>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item.variant_RAM || 'X'}</p>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item.variant_ROM || 'X'}</p>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item.variant_weight || 'X'}</p>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item.variant_quantity}</p>
                                            </td>
                                            {/*<td>*/}
                                            {/*    <p className={clsx(styles['user-table__text'])}>{item.product_id.product_description}</p>*/}
                                            {/*</td>*/}
                                            <td width=''>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <i onClick={() => dispatch(setProduct(item))} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                                    <i onClick={() => dispatch(setProduct(item))} data-bs-toggle='modal'
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
                        <input onChange={e => dispatch(onChangeData({product_name: e.target.value}))}
                               type="text"
                               id='name-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product.product_name || ''}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-edit">RETAIL
                            PRICE</label>
                        <input onChange={e => dispatch(onChangeData({retail_price: e.target.value}))}
                               type="number"
                               id='retail_price-edit'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product.retail_price || 0}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="quantity-edit">QUANTITY</label>
                        <input onChange={e => dispatch(onChangeData({variant_quantity: e.target.value}))}
                               type="number"
                               id='quantity-edit'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product.variant_quantity || 0}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="type-edit">CATEGORY</label>
                        <select onChange={e => dispatch(onChangeData({
                            product_id: {
                                ...product?.product_id,
                                category_id: {
                                    ...product.product_id?.category_id,
                                    category_name: e.target.value
                                }
                            }
                        }))}
                                name="" id="type-edit"
                                value={product.product_id?.category_id?.category_name || ''}
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartphone">Mobile</option>
                            <option value="Headphone">Headphone</option>
                            {/*<option value="mouse">Mouse</option>*/}
                            {/*<option value="keyboard">Keyboard</option>*/}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="ram-edit">RAM</label>
                        <input onChange={e => dispatch(onChangeData({variant_RAM: e.target.value}))}
                               type="text"
                               id='ram-edit'
                               placeholder='Enter RAM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_RAM}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="rom-edit">ROM</label>
                        <input onChange={e => dispatch(onChangeData({variant_ROM: e.target.value}))}
                               type="text"
                               id='rom-edit'
                               placeholder='Enter ROM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_ROM}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="os-edit">Operation system</label>
                        <input onChange={e => dispatch(onChangeData({variant_operation_system: e.target.value}))}
                               type="text"
                               id='os-edit'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_operation_system}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="chipset-edit">Chipset</label>
                        <input onChange={e => dispatch(onChangeData({variant_chipset: e.target.value}))}
                               type="text"
                               id='chipset-edit'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_chipset}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="graphic-card-edit">Graphic
                            card</label>
                        <input onChange={e => dispatch(onChangeData({variant_graphic_card: e.target.value}))}
                               type="text"
                               id='graphic-card-edit'
                               placeholder='Enter graphic card'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_graphic_card}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="screen-edit">Screen</label>
                        <input onChange={e => dispatch(onChangeData({variant_screen: e.target.value}))}
                               type="text"
                               id='screen-edit'
                               placeholder='Enter screen'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_screen}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="cpu-edit">CPU</label>
                        <input onChange={e => dispatch(onChangeData({variant_cpu: e.target.value}))}
                               type="text"
                               id='cpu-edit'
                               placeholder='Enter cpu'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_cpu}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="weight-edit">CPU</label>
                        <input onChange={e => dispatch(onChangeData({variant_weight: e.target.value}))}
                               type="text"
                               id='weight-edit'
                               placeholder='Enter weight'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.variant_weight}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="img-edit">Product image</label>
                        <input onChange={e => dispatch(onChangeData({product_image: e.target.value}))}
                               type="file"
                               id='img-edit'
                               placeholder='Enter image'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-edit">DESCRIPTION</label>
                        <textarea value={product.product_id?.product_description || ''} placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({
                                      product_id: {
                                          ...product?.product_id,
                                          product_description: e.target.value
                                      }
                                  }))}
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
                        <input onChange={e => onChangeData({product_name: e.target.value})}
                               type="text"
                               id='name-add'
                               placeholder='Enter product name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-add">RETAIL
                            PRICE</label>
                        <input onChange={e => dispatch(onChangeData({retail_price: e.target.value}))}
                               type="number"
                               id='retail_price-add'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="quantity-add">QUANTITY</label>
                        <input onChange={e => dispatch(onChangeData({variant_quantity: e.target.value}))}
                               type="number"
                               id='quantity-add'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="type-add">CATEGORY</label>
                        <select onChange={e => dispatch(onChangeData({
                            product_id: {
                                ...product?.product_id,
                                category_id: {
                                    ...product.product_id?.category_id,
                                    category_name: e.target.value
                                }
                            }
                        }))}
                                name="" id="type-add"
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartphone">Mobile</option>
                            <option value="Headphone">Headphone</option>
                            {/*<option value="mouse">Mouse</option>*/}
                            {/*<option value="keyboard">Keyboard</option>*/}
                        </select>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="ram-add">RAM</label>
                        <input onChange={e => dispatch(onChangeData({variant_RAM: e.target.value}))}
                               type="text"
                               id='ram-add'
                               placeholder='Enter RAM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="rom-add">ROM</label>
                        <input onChange={e => dispatch(onChangeData({variant_ROM: e.target.value}))}
                               type="text"
                               id='rom-add'
                               placeholder='Enter ROM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="os-add">Operation system</label>
                        <input onChange={e => dispatch(onChangeData({variant_operation_system: e.target.value}))}
                               type="text"
                               id='os-add'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="chipset-add">Chipset</label>
                        <input onChange={e => dispatch(onChangeData({variant_chipset: e.target.value}))}
                               type="text"
                               id='chipset-add'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="graphic-card-add">Graphic
                            card</label>
                        <input onChange={e => dispatch(onChangeData({variant_graphic_card: e.target.value}))}
                               type="text"
                               id='graphic-card-add'
                               placeholder='Enter graphic card'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="screen-add">Screen</label>
                        <input onChange={e => dispatch(onChangeData({variant_screen: e.target.value}))}
                               type="text"
                               id='screen-add'
                               placeholder='Enter screen'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="cpu-add">CPU</label>
                        <input onChange={e => dispatch(onChangeData({variant_cpu: e.target.value}))}
                               type="text"
                               id='cpu-add'
                               placeholder='Enter cpu'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="weight-add">CPU</label>
                        <input onChange={e => dispatch(onChangeData({variant_weight: e.target.value}))}
                               type="text"
                               id='weight-add'
                               placeholder='Enter weight'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="img-add">Product image</label>
                        <input onChange={e => dispatch(onChangeData({product_image: e.target.value}))}
                               type="file"
                               id='img-add'
                               placeholder='Enter image'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-add">DESCRIPTION</label>
                        <textarea placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({
                                      product_id: {
                                          ...product?.product_id,
                                          product_description: e.target.value
                                      }
                                  }))}
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
                <p className='mb-0'>Are you sure to delete "{product.product_name}"?</p>
            </Modal>
        </>
    )
}

export default DashboardManageProductPage;