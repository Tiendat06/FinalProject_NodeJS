import styles from './DashboardManageProductPage.module.css';
import clsx from "clsx";
import {Link} from "react-router-dom";
import {Modal, Pagination} from "~/components/elements";
import {ConvertDateString, FormatUSDCurrency} from "~/utils";
import {useDashboardContext} from "~/context/DashboardContext";
import reducer, {initState} from './reducers/reducers';
import variant_reducer, {initVariantState} from './reducers/variant_reducer';
import {getProducts, setProduct, updateProduct, deleteProduct, onChangeData, addProduct} from './actions/actions';
import {
    addProductVariantData, deleteProductVariantData,
    getProductsVariant,
    onChangeVariantData,
    setProductsVariant,
    updateVariantData
} from './actions/variant_actions';
import $ from 'jquery';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import {toast} from 'react-toastify'
import {useCallback, useEffect, useLayoutEffect, useReducer, useState} from "react";

function DashboardManageProductPage() {
    const api_url = process.env.REACT_APP_API_URL;
    const {dashBoardSubLink, setDashBoardSubLink} = useDashboardContext();
    const [state, dispatch] = useReducer(reducer, initState);
    const {product, productData} = state;

    const [variantState, variantDispatch] = useReducer(variant_reducer, initVariantState);
    const {productVariant, productVariantData} = variantState;

    const [categoryList, setCategoryList] = useState([]);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [imgFile, setImgFile] = useState('');

    const handleProductImage = (e) => {
        const img = e.target.files[0];
        setImgFile(img);
    }

    useLayoutEffect(() => {
        setPageCount(Math.ceil(productData.length / itemsPerPage));
        setCurrentItems(productData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage));
    }, [productData, currentPage]);
    const handlePageChange = useCallback((event) => {
        setCurrentPage(event.selected);
    }, []);

    // BE
    // product
    useEffect(() => {
        fetch(`${api_url}/product`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if(data.status) {
                    dispatch(getProducts(data.data));
                    setCategoryList(data.category);
                }

            })
            .catch(error => console.log(error));
    }, []);

    const onClickProductIcon = (item) => {
        dispatch(setProduct(item));
        fetch(`${api_url}/product/variant/product-details/${item._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                variantDispatch(getProductsVariant(data.data));
            })
            .catch(error => console.log(error));
    }

    const fetchUpdateProduct = useCallback(() => {
        const formData = new FormData();
        formData.append('product_name', product.product_name);
        formData.append('category_id', '');
        formData.append('category_name', product?.category_id?.category_name);
        formData.append('product_description', product.product_description);
        formData.append('product_price', product.product_price);
        formData.append('img_file', imgFile);
        fetch(`${api_url}/product/${product._id}`, {
            method: 'PUT',
            body: formData,
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status){
                    const category_id = data.data.category_id;
                    const category_name = product?.category_id?.category_name;
                    dispatch(updateProduct({
                        ...data.data,
                        category_id: {
                            _id: category_id,
                            category_name
                        }
                    }));
                    toast.success('Product updated successfully!');
                } else{
                    toast.error('Product updated failed!');
                }

            })
            .catch(error => console.log(error));
    }, [product, imgFile]);

    const fetchAddProduct = useCallback(() => {
        if(imgFile === undefined || imgFile === null) {
            toast.error('Please select product image!');
            console.log('hi world')
            return;
        }
        $('.loading-spinner').removeClass('d-none');
        $('.loading-add').html('Loading...')
        const formData = new FormData();
        formData.append('product_name', product?.product_name || '');
        formData.append('product_price', product?.retail_price || '');
        formData.append('variant_quantity', product?.variant_quantity || '');
        formData.append('product_color', product?.product_color || '');
        formData.append('category_id', '');
        formData.append('category_name', product?.category_id?.category_name || 'Laptop');
        formData.append('variant_RAM', product?.variant_RAM || '');
        formData.append('variant_ROM', product?.variant_ROM || '');
        formData.append('variant_operation_system', product?.variant_operation_system || '');
        formData.append('variant_chipset', product?.variant_chipset || '');
        formData.append('variant_graphic_card', product?.variant_graphic_card || '');
        formData.append('variant_screen', product?.variant_screen || '');
        formData.append('variant_cpu', product?.variant_cpu || '');
        formData.append('variant_weight', product?.variant_weight || '');
        formData.append('product_description', product?.product_description || '');
        formData.append('img_file', imgFile);
        fetch(`${api_url}/product`, {
            method: 'POST',
            body: formData,
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status){
                    dispatch(addProduct(data.data));
                    toast.success('Product added successfully!');
                } else{
                    toast.error(data.msg);
                }
                $('.loading-spinner').addClass('d-none');
                $('.loading-add').html('Save');
            })
            .catch(err => console.log(err));
    }, [product, imgFile]);

    const fetchDeleteProduct = useCallback(() => {
        $('.loading-spinner').removeClass('d-none');
        $('.loading-add').html('Loading...')
        fetch(`${api_url}/product/${product._id}`, {
            method: 'DELETE',
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status){
                    dispatch(deleteProduct(product));
                    $('.loading-spinner').addClass('d-none');
                    $('.loading-add').html('Save')
                    toast.success(data.msg);
                } else{
                    toast.error(data.msg);
                }
            })
            .catch(err => console.log(err));
    }, [product]);

    const fetchUpdateProductVariant = useCallback(() => {
        $('.loading-spinner').removeClass('d-none');
        $('.loading-add').html('Loading...')
        const formData = new FormData();
        formData.append('product_id', productVariant?.product_id);
        formData.append('product_name', productVariant?.product_name || '');
        formData.append('product_color', productVariant?.product_color || '');
        formData.append('variant_quantity', productVariant?.variant_quantity || '');
        formData.append('retail_price', productVariant?.retail_price || '');
        formData.append('variant_ROM', productVariant?.variant_ROM || '');
        formData.append('variant_RAM', productVariant?.variant_RAM || '');
        formData.append('variant_operation_system', productVariant?.variant_operation_system || '');
        formData.append('variant_chipset', productVariant?.variant_chipset || '');
        formData.append('variant_graphic_card', productVariant?.variant_graphic_card || '');
        formData.append('variant_screen', productVariant?.variant_screen || '');
        formData.append('variant_cpu', productVariant?.variant_cpu || '');
        formData.append('variant_weight', productVariant?.variant_weight || '');
        formData.append('img_file', imgFile);
        fetch(`${api_url}/product/variant/${productVariant._id}`, {
            method: 'PUT',
            body: formData,
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status) {
                    variantDispatch(updateVariantData(data.data));
                    toast.success(data.message);
                } else toast.error(data.message);

                $('.loading-spinner').addClass('d-none');
                $('.loading-add').html('Save');
            })
            .catch(error => console.log(error));
    }, [productVariant, imgFile])

    const fetchAddProductVariant = useCallback(() => {
        $('.loading-spinner').removeClass('d-none');
        $('.loading-add').html('Loading...')
        const formData = new FormData();
        formData.append('product_id', product._id);
        formData.append('product_name', productVariant?.product_name || '');
        formData.append('product_color', productVariant?.product_color || '');
        formData.append('variant_quantity', productVariant?.variant_quantity || '');
        formData.append('retail_price', productVariant?.retail_price || '');
        formData.append('variant_ROM', productVariant?.variant_ROM || '');
        formData.append('variant_RAM', productVariant?.variant_RAM || '');
        formData.append('variant_operation_system', productVariant?.variant_operation_system || '');
        formData.append('variant_chipset', productVariant?.variant_chipset || '');
        formData.append('variant_graphic_card', productVariant?.variant_graphic_card || '');
        formData.append('variant_screen', productVariant?.variant_screen || '');
        formData.append('variant_cpu', productVariant?.variant_cpu || '');
        formData.append('variant_weight', productVariant?.variant_weight || '');
        formData.append('img_file', imgFile);
        fetch(`${api_url}/product/variant`, {
            method: 'POST',
            body: formData,
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status) {
                    variantDispatch(addProductVariantData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
                $('.loading-spinner').addClass('d-none');
                $('.loading-add').html('Save')
            })
            .catch(err => console.log(err));
    }, [productVariant, imgFile]);

    const fetchDeleteProductVariant = useCallback(() => {
        $('.loading-spinner').removeClass('d-none');
        $('.loading-add').html('Loading...')
        fetch(`${api_url}/product/variant/${productVariant._id}`, {
            method: 'DELETE',
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                if(data.status) {
                    variantDispatch(deleteProductVariantData(data.data));
                    toast.success(data.msg);
                } else toast.error(data.msg);
                $('.loading-spinner').addClass('d-none');
                $('.loading-add').html('Save')
            })
            .catch(err => console.log(err));
    }, [productVariant, imgFile]);
    console.log(productData);

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
                        <Link onClick={() => setDashBoardSubLink('manageCategory')} to='/dashboard/category'
                              className={clsx(styles["manage-user__table-item"])}>
                            <i className="fa-solid fa-list"></i>
                            <p>Manage Category</p>
                        </Link>
                    </ul>
                    <div className="card-body">
                        <div className={clsx(styles['user-table'])}>
                            <h5 className='mb-0'>Product Management</h5>
                            <div className={clsx(styles['user-table__btn'])}>
                                <button
                                    onClick={() => dispatch(setProduct(''))}
                                    data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}><i
                                    className="fa-brands fa-product-hunt"></i> Add Product
                                </button>
                            </div>
                            <div className={clsx(styles["table-manage"])}>
                                <table className="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>NAME</th>
                                        <th>CATEGORY</th>
                                        <th>DESCRIPTION</th>
                                        <th>ACTION</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {currentItems.map((item, index) => (
                                        <tr key={index}>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                                            </td>
                                            <td width='300'>
                                                <div className="d-flex flex-wrap">
                                                    <img src={`${item.product_img}`}
                                                         style={{width: 25, objectFit: "contain"}} alt=""/>
                                                    <p className={clsx(styles['user-table__text'], 'ml-5')}>{item?.product_name}</p>
                                                </div>
                                            </td>
                                            <td width=''>
                                                <p className={clsx(styles['user-table__text'])}>{item?.category_id?.category_name}</p>
                                            </td>
                                            <td>
                                                <p className={clsx(styles['user-table__text'])}>{item?.product_description}</p>
                                            </td>
                                            <td width='120'>
                                                <p className={clsx(styles["user-table__action"])}>
                                                    <i onClick={() => onClickProductIcon(item)} data-bs-toggle='modal'
                                                       data-bs-target='#view-product-variant'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-eye text-success")}></i>
                                                    <i onClick={() => onClickProductIcon(item)} data-bs-toggle='modal'
                                                       data-bs-target='#edit-modal'
                                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                                    <i onClick={() => onClickProductIcon(item)} data-bs-toggle='modal'
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
                id='view-product-variant'
                modalHeaderClassName='d-none'
                saveClassName='d-none'
                closeClassName='btn btn-secondary'
                labelBtnClose='Close'
                modalTypeClassName='modal-xl'
                modalBodyClassName={styles['modal-content-variant']}
                isStatic={true}
            >
                <div className={clsx(styles['user-table__btn'])}>
                    <button data-bs-toggle='modal' data-bs-target='#add-variant-modal' className={clsx("btn")}><i
                        className="fa-brands fa-product-hunt"></i> Add Product Variant
                    </button>
                </div>
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>NAME</th>
                        <th>COLOR</th>
                        <th>QUANTITY</th>
                        <th>RETAIL PRICE</th>
                        <th>ROM</th>
                        <th>RAM</th>
                        <th>SYSTEM</th>
                        <th>CHIPSET</th>
                        <th>GRAPHIC CARD</th>
                        <th>SCREEN</th>
                        <th>CPU</th>
                        <th>WEIGHT</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {productVariantData?.map((item, index) => (
                        <tr key={`variant-p-${index}`}>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                            </td>
                            <td width='350'>
                                <div className="d-flex flex-wrap">
                                    <img src={`${item?.product_image}`}
                                         style={{width: 25, objectFit: "contain"}} alt=""/>
                                    <p className={clsx(styles['user-table__text'], 'ml-5')}>{item?.product_name}</p>
                                </div>
                            </td>
                            <td width='150'>
                                <p className={clsx(styles['user-table__text'])}>{item?.product_color}</p>
                            </td>
                            <td width=''>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_quantity}</p>
                            </td>
                            <td width='100'>
                                <p className={clsx(styles['user-table__text'])}><FormatUSDCurrency
                                    price={item?.retail_price}/></p>
                            </td>
                            <td width='80'>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_ROM || 'X'}</p>
                            </td>
                            <td width='80'>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_RAM || 'X'}</p>
                            </td>
                            <td width='150'>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_operation_system || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_chipset || 'X'}</p>
                            </td>
                            <td width='150'>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_graphic_card || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_screen || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_cpu || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item?.variant_weight || 'X'}</p>
                            </td>
                            <td width='120'>
                                <p className={clsx(styles["user-table__action"])}>
                                    <i onClick={() => variantDispatch(setProductsVariant(item))} data-bs-toggle='modal'
                                       data-bs-target='#edit-variant-modal'
                                       className={clsx(styles['user-table__action-edit'], "fa-solid fa-pen-to-square")}></i>
                                    <i onClick={() => variantDispatch(setProductsVariant(item))} data-bs-toggle='modal'
                                       data-bs-target='#delete-variant-modal'
                                       className={clsx(styles['user-table__action-trash'], "fa-solid fa-trash")}></i>
                                </p>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Modal>

            <Modal
                id='edit-variant-modal'
                title='Save change'
                labelBtnSave='Save'
                closeClassName='d-none'
                loadingClassName='loading-spinner'
                onClickLabelSave={fetchUpdateProductVariant}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger loading-add')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-v-edit">PRODUCT
                            NAME</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({product_name: e.target.value}))}
                               type="text"
                               id='name-v-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.product_name || ''}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-v-edit">RETAIL
                            PRICE</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({retail_price: e.target.value}))}
                               type="number"
                               id='retail_price-v-edit'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.retail_price || 0}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="quantity-v-edit">QUANTITY</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_quantity: e.target.value}))}
                               type="number"
                               id='quantity-v-edit'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_quantity || 0}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="ram-v-edit">RAM</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_RAM: e.target.value}))}
                               type="text"
                               id='ram-v-edit'
                               placeholder='Enter RAM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_RAM}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="rom-v-edit">ROM</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_ROM: e.target.value}))}
                               type="text"
                               id='rom-v-edit'
                               placeholder='Enter ROM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_ROM}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="os-v-edit">Operation
                            system</label>
                        <input
                            onChange={e => variantDispatch(onChangeVariantData({variant_operation_system: e.target.value}))}
                            type="text"
                            id='os-v-edit'
                            placeholder='Enter operation system'
                            className={clsx(styles['edit-modal__inp'], 'form-control')}
                            value={productVariant?.variant_operation_system}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="chipset-v-edit">Chipset</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_chipset: e.target.value}))}
                               type="text"
                               id='chipset-v-edit'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_chipset}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="graphic-card-v-edit">Graphic
                            card</label>
                        <input
                            onChange={e => variantDispatch(onChangeVariantData({variant_graphic_card: e.target.value}))}
                            type="text"
                            id='graphic-card-v-edit'
                            placeholder='Enter graphic card'
                            className={clsx(styles['edit-modal__inp'], 'form-control')}
                            value={productVariant?.variant_graphic_card}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="screen-v-edit">Screen</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_screen: e.target.value}))}
                               type="text"
                               id='screen-v-edit'
                               placeholder='Enter screen'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_screen}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="cpu-v-edit">CPU</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_cpu: e.target.value}))}
                               type="text"
                               id='cpu-v-edit'
                               placeholder='Enter cpu'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_cpu}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="weight-v-edit">CPU</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_weight: e.target.value}))}
                               type="text"
                               id='weight-v-edit'
                               placeholder='Enter weight'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_weight}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="img-v-edit">Product image</label>
                        <input onChange={e => handleProductImage(e)}
                               type="file"
                               id='img-v-edit'
                               placeholder='Enter image'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                </div>
            </Modal>

            <Modal
                id='add-variant-modal'
                title='Add Product'
                labelBtnSave='Save'
                closeClassName='d-none'
                loadingClassName='loading-spinner'
                onClickLabelSave={fetchAddProductVariant}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger loading-add')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-variant-add">PRODUCT
                            NAME</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({product_name: e.target.value}))}
                               type="text"
                               id='name-variant-add'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-variant-add">RETAIL
                            PRICE</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({retail_price: e.target.value}))}
                               type="number"
                               id='retail_price-variant-add'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])}
                               htmlFor="quantity-variant-add">QUANTITY</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_quantity: e.target.value}))}
                               type="number"
                               id='quantity-variant-add'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="color-variant-add">Color</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({product_color: e.target.value}))}
                               type="text"
                               id='color-variant-add'
                               placeholder='Enter color'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="ram-variant-add">RAM</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_RAM: e.target.value}))}
                               type="text"
                               id='ram-variant-add'
                               placeholder='Enter RAM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="rom-variant-add">ROM</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_ROM: e.target.value}))}
                               type="text"
                               id='rom-variant-add'
                               placeholder='Enter ROM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="os-variant-add">Operation
                            system</label>
                        <input
                            onChange={e => variantDispatch(onChangeVariantData({variant_operation_system: e.target.value}))}
                            type="text"
                            id='os-variant-add'
                            placeholder='Enter operation system'
                            className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])}
                               htmlFor="chipset-variant-add">Chipset</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_chipset: e.target.value}))}
                               type="text"
                               id='chipset-variant-add'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="graphic-card-variant-add">Graphic
                            card</label>
                        <input
                            onChange={e => variantDispatch(onChangeVariantData({variant_graphic_card: e.target.value}))}
                            type="text"
                            id='graphic-card-variant-add'
                            placeholder='Enter graphic card'
                            className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="screen-variant-add">Screen</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_screen: e.target.value}))}
                               type="text"
                               id='screen-variant-add'
                               placeholder='Enter screen'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="cpu-variant-add">CPU</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_cpu: e.target.value}))}
                               type="text"
                               id='cpu-variant-add'
                               placeholder='Enter cpu'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="weight-variant-add">WEIGHT</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_weight: e.target.value}))}
                               type="text"
                               id='weight-variant-add'
                               placeholder='Enter weight'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="img-variant-add">Product
                            image</label>
                        <input onChange={e => handleProductImage(e)}
                               type="file"
                               id='img-variant-add'
                               placeholder='Enter image'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                </div>
            </Modal>

            <Modal
                id='delete-variant-modal'
                title='Delete Product Variant'
                labelBtnSave='Save'
                closeClassName='d-none'
                loadingClassName='loading-spinner'
                onClickLabelSave={fetchDeleteProductVariant}
                isStatic={true}
                saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger loading-add')}
            >
                <p className='mb-0'>Are you sure to delete "{productVariant?.product_name}"?</p>
            </Modal>

            {/*product*/}
            <Modal
                id='edit-modal'
                title='Save change'
                labelBtnSave='Save'
                closeClassName='d-none'
                onClickLabelSave={fetchUpdateProduct}
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">PRODUCT
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({product_name: e.target.value}))}
                               type="text"
                               id='name-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={product?.product_name || ''}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="type-edit">CATEGORY</label>
                        <select onChange={e => dispatch(onChangeData({
                            category_id: {
                                ...product?.category_id,
                                category_name: e.target.value
                            }
                        }))}
                                name="" id="type-edit"
                                value={product?.category_id?.category_name || ''}
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            <option value="Laptop">Laptop</option>
                            <option value="Smartphone">Mobile</option>
                            <option value="Headphone">Headphone</option>
                        </select>
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
                        <textarea value={product?.product_description || ''} placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({
                                      product_description: e.target.value
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
                onClickLabelSave={fetchAddProduct}
                loadingClassName='loading-spinner'
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger loading-add')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-add">FULL
                            NAME</label>
                        <input onChange={e => dispatch(onChangeData({product_name: e.target.value}))}
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
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="color-v-add">Color</label>
                        <input onChange={e => dispatch(onChangeData({product_color: e.target.value}))}
                               type="text"
                               id='color-v-add'
                               placeholder='Enter color'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="type-add">CATEGORY</label>
                        <select onChange={e => dispatch(onChangeData({
                            category_id: {
                                // ...product?.category_id,
                                category_name: e.target.value
                            }
                        }))}
                                name="" id="type-add"
                                value={product?.category_id?.category_name || ''}
                                className={clsx(styles['edit-modal__inp'], 'form-select')}>
                            {categoryList?.map((category, index) => (
                                <option key={category?.category_id} value={category?.category_name}>{category?.category_name}</option>
                            ))}

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
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="weight-add">WEIGHT</label>
                        <input onChange={e => dispatch(onChangeData({variant_weight: e.target.value}))}
                               type="text"
                               id='weight-add'
                               placeholder='Enter weight'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="img-add">Product image</label>
                        <input onChange={e => handleProductImage(e)}
                               type="file"
                               id='img-add'
                               placeholder='Enter image'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="desc-add">DESCRIPTION</label>
                        <textarea value={product?.product_description || ''} placeholder='Enter description'
                                  onChange={e => dispatch(onChangeData({
                                      product_description: e.target.value
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
                loadingClassName='loading-spinner'
                onClickLabelSave={fetchDeleteProduct}
                isStatic={true}
                saveClassName={clsx(styles['delete-modal__save'], 'btn btn-danger loading-add')}
            >
                <p className='mb-0'>Are you sure to delete "{product.product_name}"?</p>
            </Modal>
        </>
    )
}

export default DashboardManageProductPage;