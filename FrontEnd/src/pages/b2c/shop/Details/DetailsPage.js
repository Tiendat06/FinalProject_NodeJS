import styles from './DetailsPage.module.css';
import stylesGrid from './DetailsPageGrid.module.css';
import {SlickSlider} from '~/components/elements';
import {FormatUSDCurrency} from "~/utils"
import FullOptionDevice from "./Type/FullOptionDevice";
import Headphone from "./Type/Headphone";

import {Link, useParams} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import {Fragment, useEffect, useLayoutEffect, useState} from "react";
import {useShoppingContext} from "~/context/ShoppingContext";
import {toast} from "react-toastify";

function DetailsPage(){
    const {id} = useParams();
    const {userData} = useShoppingContext();
    const user_id = userData._id;
    const api_url = process.env.REACT_APP_API_URL;
    const [productInfo, setProductInfo] = useState({
        product_name: "",
        retails_price: 0,
        variant_quantity: 0,
    });
    const [productVariantInfo, setProductVariantInfo] = useState([]);
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [comments, setComments] = useState([]);
    const [detailsImg, setDetailsImg] = useState('');

    const [commentInfo, setCommentInfo] = useState({
        fullName: "",
        email: "",
        content: ""
    });
    const [quantity, setQuantity] = useState(1);
    const [navTabItem, setNavTabItem] = useState(1);
    const [rating, setRating] = useState(0);
    const [star, setStar] = useState(0);
    const [logMessage, setLogMessage] = useState('');

    const handleChangeItem = (item, e) => {
        setDetailsImg(e.target.src)
        setProductInfo({
            ...productInfo,
            ...item
        })
    }

    const handleSubmitComment = () => {
        fetch(`${api_url}/product/comment`, {
            method: "POST",
            body: JSON.stringify({
                user_id, product_id: id, star,
                ...commentInfo
            }),
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.status) {
                    const newComment = comments || [];
                    setComments([...newComment, data.data]);
                    toast.success(data.msg);
                }else toast.error(data.msg);
                // setLogMessage(data.msg);
            })
            .catch(err => console.log(err));
    }

    useLayoutEffect(() => {
        if(quantity < 1){
            setQuantity(1);
        }
    }, [quantity]);

    useEffect(() => {
        fetch(`${api_url}/product/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => {
                const {category_id, product_description} = data.product;
                const product = data.productVariants[0];
                setProductInfo({
                    ...productInfo,
                    category_id, product_description,
                    ...product
                });
                setDetailsImg(data.productVariants[0].product_image);
                setProductVariantInfo(data.productVariants);
                setRelatedProduct(data.top4Products);
                setRating(data.starAvg);
                setComments(data.comment || []);
            })
            .catch(err => console.log(err));
    }, [id]);
    // console.log(productInfo);
    return (
        <>
            <div className={clsx(stylesGrid['details'], "col-lg-12 col-md-12 col-sm-12 d-flex flex-wrap")}>
                <div className="col-lg-2 col-md-5 col-sm-5 d-flex justify-content-center">
                    <SlickSlider>
                        {productVariantInfo.map((item, index) => (
                            <div key={`slider-${index}`} className={clsx(styles["details-slick__item"])}>
                                <img className={clsx(styles['details-slick__img'])}
                                     onClick={e => handleChangeItem(item, e)}
                                     src={item.product_image} alt=""/>
                            </div>
                        ))}
                    </SlickSlider>
                </div>
                <div className="col-lg-5 col-md-7 col-sm-7">
                    <div className={clsx(styles["details-item"])}>
                        <img className={clsx(styles['details-item__img'])} src={detailsImg} alt=""/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <div className={clsx(styles["details-info"], stylesGrid['details-info'])}>
                        <h2 className={clsx(styles['details-info__title'])}>{productInfo.product_name || ""}</h2>
                        <div className={clsx(styles["details-info__rating"])}>
                            <div className={clsx(styles["details-info__icon"])}>
                                {(() => {
                                    const li = [];
                                    for (let i = 0; i < rating; i++) {
                                        li.push(<i key={`filled-${i}`}
                                            className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>);
                                    }
                                    return li;
                                })()}
                                {(() => {
                                    const li = [];
                                    for (let i = 0; i < 5 - rating; i++) {
                                        li.push(<i key={`empty-${i}`}
                                                   className={clsx("fa-regular fa-star", styles['details-info__star'])}></i>);
                                    }
                                    return li;
                                })()}
                            </div>
                            <a href='#' className={clsx(styles['details-info__review'], 'mb-0')}>{comments.length} review(s) | Add your
                                reviews</a>
                        </div>
                        <div className={clsx(styles["details-info__budget"])}>
                            <h3 className={clsx(styles['details-info__price'], 'mb-0')}><FormatUSDCurrency price={productInfo.retail_price || 0} /></h3>
                            <p className={clsx(styles['details-info__status'], 'mb-0')}>IN STOCK ({productInfo.variant_quantity || 0} remaining)</p>
                        </div>
                        <div className={clsx(styles["details-info__text"])}>
                            <p className={clsx(styles["details-info__para"], 'mb-0')}>
                                {productInfo.product_description}
                            </p>
                        </div>
                        <div className={clsx(styles["details-info__choice"])}>
                            <div
                                className="form-group col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-between mb-3">
                                <label className={clsx(styles['details-info__choice-label'])}
                                       htmlFor="color-details">COLOR</label>
                                <select name="" className={clsx(styles["details-info__choice-select"], 'form-select', stylesGrid['details-info__choice-select'])}
                                        id="color-details">
                                    {productVariantInfo.map((item, index) => (
                                        <option key={`color-${index}`} value={item.product_color}>{item.product_color}</option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className="form-group col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-between">
                                <label className={clsx(styles['details-info__choice-label'])}
                                       htmlFor="quan-details">QUANTITY</label>
                                <div className={clsx(styles["details-info__choice-group"], stylesGrid['details-info__choice-group'])}>
                                    <i onClick={() => setQuantity(quantity => quantity - 1)}
                                       className={clsx("fa-solid fa-minus disabled-highlight", styles['details-info__choice-minus'])}></i>
                                    <input value={quantity}
                                           min="1"
                                           onChange={e => setQuantity(Number(e.target.value))}
                                           type="number" id="quan-details"
                                           className={clsx(styles["details-info__choice-inp"], 'form-control')}/>
                                    <i onClick={() => setQuantity(quantity => quantity + 1)}
                                       className={clsx("fa-solid fa-plus disabled-highlight", styles['details-info__choice-plus'])}></i>
                                </div>

                            </div>
                        </div>
                        <div className={clsx(styles["details-info__cart"])}>
                            <button className={clsx(styles["details-info__cart-btn"], 'btn')}>
                                <i className={clsx("fa-solid fa-cart-shopping d-none", styles['details-info__cart-icon'])}></i>
                                <span className={clsx(styles['details-info__cart-text'])}>ADD TO CART</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className={clsx(styles["details-more__header"])}>
                    <div className={clsx(styles["details-more__line"], 'col-lg-4 col-md-3 col-sm-2')}></div>
                    <div className={clsx(styles["details-more__title"], 'col-lg-4 col-md-6 col-sm-8')}>
                        <a onClick={() => setNavTabItem(1)} href='javascript:void(0)' className={clsx(styles['details-more__title-text'], `link-underline ${navTabItem === 1 && clsx(styles['details-click'])}`)}>Description</a>
                        <a onClick={() => setNavTabItem(2)} href='javascript:void(0)' className={clsx(styles['details-more__title-text'], `link-underline ${navTabItem === 2 && clsx(styles['details-click'])}`)}>Details</a>
                        <a onClick={() => setNavTabItem(3)} href='javascript:void(0)' className={clsx(styles['details-more__title-text'], `link-underline ${navTabItem === 3 && clsx(styles['details-click'])}`)}>Review</a>
                    </div>
                    <div className={clsx(styles["details-more__line"], 'col-lg-4 col-md-3 col-sm-2')}></div>
                </div>

                <div className={clsx(styles["details-more__content"])}>
                    {navTabItem === 1 &&
                        <div className="details-more__item">
                            <p className={clsx(styles['details-more__item-para'], 'mb-0')}>
                                {productInfo.product_description}
                            </p>
                        </div>
                    }
                    {navTabItem === 2 &&
                        <div className={clsx(styles["details-more__item"], 'd-flex justify-content-center')}>
                            <div className={clsx(styles["details-more__item--inner"], 'col-lg-5 col-md-8 col-sm-12')}>
                                {productInfo.category_id.category_name === 'Smartphone' &&
                                    <FullOptionDevice {...productInfo} />
                                }
                                {productInfo.category_id.category_name === 'Laptop' &&
                                    <FullOptionDevice {...productInfo} />
                                }
                                {productInfo.category_id.category_name === 'Headphone' &&
                                    <Headphone {...productInfo} />
                                }
                            </div>
                        </div>
                    }
                    {navTabItem === 3 &&
                        <div className={clsx(styles["details-more__item"], 'd-flex flex-wrap')}>
                            <div className={clsx(styles["details-more__item-rating"], 'col-lg-12 col-md-12 col-sm-12')}>
                                <div className={clsx(styles["details-more__item-rating__total"])}>
                                <h3 className={clsx(styles['details-more__item-rating__title'], 'mb-0 mr-15')}>{Number(rating).toFixed(1)}</h3>
                                    <div className={clsx(styles["details-more__item-rating__icon"])}>
                                        {(() => {
                                            const li = [];
                                            for (let i = 0; i < rating; i++) {
                                                li.push(<i key={`star1-${i}`}
                                                           className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>);
                                            }
                                            return li;
                                        })()}
                                        {(() => {
                                            const li = [];
                                            for (let i = 0; i < 5 - rating; i++) {
                                                li.push(<i key={`star2-${i}`}
                                                           className={clsx("fa-regular fa-star", styles['details-info__star'])}></i>);
                                            }
                                            return li;
                                        })()}
                                    </div>
                                </div>
                                {/*<div className={clsx(styles["details-more__item-rating__details"])}>*/}
                                {/*    <div className={clsx(styles["details-more__item-rating__group"])}>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>*/}
                                {/*            <div style={{width: "60%"}}*/}
                                {/*                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>*/}
                                {/*        </div>*/}
                                {/*        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>3</p>*/}
                                {/*    </div>*/}
                                {/*    <div className={clsx(styles["details-more__item-rating__group"])}>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>*/}
                                {/*            <div style={{width: "40%"}}*/}
                                {/*                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>*/}
                                {/*        </div>*/}
                                {/*        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>2</p>*/}
                                {/*    </div>*/}
                                {/*    <div className={clsx(styles["details-more__item-rating__group"])}>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>*/}
                                {/*            <div style={{width: "0%"}}*/}
                                {/*                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>*/}
                                {/*        </div>*/}
                                {/*        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>0</p>*/}
                                {/*    </div>*/}
                                {/*    <div className={clsx(styles["details-more__item-rating__group"])}>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>*/}
                                {/*            <div style={{width: "0%"}}*/}
                                {/*                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>*/}
                                {/*        </div>*/}
                                {/*        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>0</p>*/}
                                {/*    </div>*/}
                                {/*    <div className={clsx(styles["details-more__item-rating__group"])}>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>*/}
                                {/*            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>*/}
                                {/*        </div>*/}
                                {/*        <div*/}
                                {/*            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>*/}
                                {/*            <div style={{width: "0%"}}*/}
                                {/*                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>*/}
                                {/*        </div>*/}
                                {/*        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>0</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                            <div className={clsx(styles["details-more__item-cmt"], 'col-lg-12 col-md-12 col-sm-12')}>
                                <div className={clsx(styles["details-more__item-cmt__list"], 'p-3')}>
                                    {comments.map((item, index) => (
                                        <div key={item._id}
                                            className={clsx(styles["details-more__item-cmt__item"], 'd-flex flex-wrap justify-content-between mb-1')}>
                                            <div
                                                className={clsx(styles["details-more__item-cmt__info"], 'col-lg-12 col-md-12 col-sm-12')}>
                                                <h6 className='mb-0'>{item.user_id.fullName}</h6>
                                                <div className={clsx(styles["details-more__item-cmt__icon"])}>
                                                    {(() => {
                                                        const li = [];
                                                        for (let i = 0; i < item.star; i++) {
                                                            li.push(<i key={`item-star1-${i}`} style={{fontSize: 12}}
                                                                       className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>);
                                                        }
                                                        return li;
                                                    })()}
                                                    {(() => {
                                                        const li = [];
                                                        for (let i = 0; i < 5 - item.star; i++) {
                                                            li.push(<i key={`item-star2-${i}`} style={{fontSize: 12}}
                                                                       className={clsx("fa-regular fa-star", styles['details-info__star'])}></i>);
                                                        }
                                                        return li;
                                                    })()}
                                                </div>
                                            </div>
                                            <div
                                                className={clsx(styles["details-more__item-cmt__review"], 'col-lg-12 col-md-12 col-sm-12')}>
                                                <p style={{fontSize: 16}} className={clsx(styles['details-more__item-cmt__para'], 'mb-0')}>{item.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={clsx(styles["details-more__item-submit"], 'col-lg-12 col-md-12 col-sm-12')}>
                                <div className="form-group">
                                    {/*<div className="form-group mb-3">*/}
                                    {/*    <input value={commentInfo.fullName}*/}
                                    {/*           onChange={e => setCommentInfo({...commentInfo, fullName: e.target.value})}*/}
                                    {/*           placeholder='Your Name' id='review-name' type="text"*/}
                                    {/*           className={clsx(styles["details-more__item-submit__name"], 'form-control')}/>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-group mb-3">*/}
                                    {/*    <input value={commentInfo.email}*/}
                                    {/*           onChange={e => setCommentInfo({...commentInfo, email: e.target.value})}*/}
                                    {/*        placeholder='Your Email' id='review-email' type="text"*/}
                                    {/*           className={clsx(styles["details-more__item-submit__email"], 'form-control')}/>*/}
                                    {/*</div>*/}
                                    <div className="form-group mb-3">
                                        <textarea
                                            value={commentInfo.content}
                                            onChange={e => setCommentInfo({...commentInfo, content: e.target.value})}
                                            placeholder='Your Comment'
                                                  className={clsx(styles['details-more__item-submit__cmt'], 'form-control')}
                                                  name="review-cmt" id="" cols="60" rows="5"></textarea>
                                    </div>
                                    <div className={clsx("alert alert-danger p-2", (!logMessage && 'd-none'))}>
                                        <p className='mb-0 text-center'>{logMessage}</p>
                                    </div>
                                    <div className={clsx(styles['details-more__item-submit__rating'], 'd-flex')}>
                                        {[5, 4, 3, 2, 1].map((value) => (
                                            <Fragment key={value}>
                                                <input
                                                    type="radio"
                                                    id={`star${value}`}
                                                    name="rating"
                                                    value={star}
                                                    checked={star === value}
                                                    onChange={() => setStar(value)}
                                                />
                                                <label htmlFor={`star${value}`} title={`${value} stars`}>
                                                    <i className={clsx("fa-solid fa-star", styles[''])}></i>
                                                </label>
                                            </Fragment>
                                        ))}
                                    </div>
                                    <button onClick={handleSubmitComment} className={clsx(styles["details-more__item-submit__btn"], 'btn', stylesGrid['details-more__item-submit__btn'])}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <h4 className="text-center">Related Product</h4>
                <div className={clsx(styles["details-related__middle"])}></div>
                <ul className={clsx(styles['details-related__list'], 'd-flex flex-wrap p-0')}>
                    {relatedProduct.map((item, index) => (
                        <li title={item.product_description}
                            key={`related-${index}`}
                            className={clsx(styles['details-related__item'], `mix col-lg-3 col-md-3 col-sm-6`)}>
                            <div className={clsx(styles['details-related__item--inner'])}>
                                <div className={clsx(styles['details-related__item-img--outer'])}>
                                    <img className={clsx(styles['details-related__item-img'])}
                                         src={item.product_img} alt=""/>
                                    <ul className={clsx(styles['details-related__item-list'], 'd-flex w-100 p-0')}>
                                        <li className={clsx(styles['details-related__item-list--icon'])}>
                                            <Link className="text-dark" to={`/shop/details/${item._id}`}>
                                                <i className="fa-solid fa-eye"></i>
                                            </Link>
                                        </li>
                                        <li className={clsx(styles['details-related__item-list--icon'])}>
                                            <Link className="text-dark" to={`/`}>
                                                <i className="fa-solid fa-heart"></i>
                                            </Link>
                                        </li>

                                        <li className={clsx(styles['details-related__item-list--icon'])}>
                                            <Link to='/' className='text-dark'>
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="details-related__item-info text-center mt-3">
                                    <p className="mb-0 text-dark">{item.product_name}</p>
                                    <p className="text-dark" style={{fontWeight: "bold"}}><FormatUSDCurrency
                                        price={item.product_price}/>
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default DetailsPage;