import styles from "../DashboardManageProductPage.module.css";
import clsx from "clsx";
import {FormatUSDCurrency} from "~/utils";
import {Modal} from "~/components/elements";
import {memo, useEffect, useReducer} from "react";
import variant_reducer, {initVariantState} from "../reducers/variant_reducer";
import {setProductsVariant, onChangeVariantData} from "../actions/variant_actions";

function ProductVariantModal({productVariant, productVariantData}) {
    const [variantState, variantDispatch] = useReducer(variant_reducer, initVariantState);
    const {variant, variantData} = variantState;
    console.log(variant);
    return (
        <>
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
                    <button data-bs-toggle='modal' data-bs-target='#add-modal' className={clsx("btn")}><i
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
                    {productVariantData.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{index + 1}</p>
                            </td>
                            <td width='350'>
                                <div className="d-flex flex-wrap">
                                    <img src={`${item.product_image}`}
                                         style={{width: 25, objectFit: "contain"}} alt=""/>
                                    <p className={clsx(styles['user-table__text'], 'ml-5')}>{item.product_name}</p>
                                </div>
                            </td>
                            <td width='150'>
                                <p className={clsx(styles['user-table__text'])}>{item.product_color}</p>
                            </td>
                            <td width=''>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_quantity}</p>
                            </td>
                            <td width='100'>
                                <p className={clsx(styles['user-table__text'])}><FormatUSDCurrency
                                    price={item.retail_price}/></p>
                            </td>
                            <td width='80'>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_ROM || 'X'}</p>
                            </td>
                            <td width='80'>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_RAM || 'X'}</p>
                            </td>
                            <td width='150'>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_operation_system || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_chipset || 'X'}</p>
                            </td>
                            <td width='150'>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_graphic_card || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_screen || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_cpu || 'X'}</p>
                            </td>
                            <td>
                                <p className={clsx(styles['user-table__text'])}>{item.variant_weight || 'X'}</p>
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
                isStatic={true}
                saveClassName={clsx(styles['edit-modal__save'], 'btn btn-danger')}
            >
                <div className="form-group">
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'], 'mt-0')} htmlFor="name-edit">PRODUCT
                            NAME</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({product_name: e.target.value}))}
                               type="text"
                               id='name-edit'
                               placeholder='Enter full name'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.product_name || ''}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="retail_price-edit">RETAIL
                            PRICE</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({retail_price: e.target.value}))}
                               type="number"
                               id='retail_price-edit'
                               placeholder='Enter retail price'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant.retail_price || 0}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="quantity-edit">QUANTITY</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_quantity: e.target.value}))}
                               type="number"
                               id='quantity-edit'
                               placeholder='Enter quantity'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant.variant_quantity || 0}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="ram-edit">RAM</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_RAM: e.target.value}))}
                               type="text"
                               id='ram-edit'
                               placeholder='Enter RAM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_RAM}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="rom-edit">ROM</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_ROM: e.target.value}))}
                               type="text"
                               id='rom-edit'
                               placeholder='Enter ROM'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_ROM}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="os-edit">Operation system</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_operation_system: e.target.value}))}
                               type="text"
                               id='os-edit'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_operation_system}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="chipset-edit">Chipset</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_chipset: e.target.value}))}
                               type="text"
                               id='chipset-edit'
                               placeholder='Enter operation system'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_chipset}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="graphic-card-edit">Graphic
                            card</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_graphic_card: e.target.value}))}
                               type="text"
                               id='graphic-card-edit'
                               placeholder='Enter graphic card'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_graphic_card}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="screen-edit">Screen</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_screen: e.target.value}))}
                               type="text"
                               id='screen-edit'
                               placeholder='Enter screen'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_screen}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="cpu-edit">CPU</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_cpu: e.target.value}))}
                               type="text"
                               id='cpu-edit'
                               placeholder='Enter cpu'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_cpu}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="weight-edit">CPU</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({variant_weight: e.target.value}))}
                               type="text"
                               id='weight-edit'
                               placeholder='Enter weight'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}
                               value={productVariant?.variant_weight}/>
                    </div>
                    <div className="form-group">
                        <label className={clsx(styles['edit-modal__label'])} htmlFor="img-edit">Product image</label>
                        <input onChange={e => variantDispatch(onChangeVariantData({product_image: e.target.value}))}
                               type="file"
                               id='img-edit'
                               placeholder='Enter image'
                               className={clsx(styles['edit-modal__inp'], 'form-control')}/>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default memo(ProductVariantModal);