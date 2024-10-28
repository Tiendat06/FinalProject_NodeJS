import styles from './DetailsPage.module.css';
import {SlickSlider} from '~/components/elements';

import {Link, useParams} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";
import {Fragment, useLayoutEffect, useState} from "react";

function DetailsPage(){
    const {id} = useParams();
    const [detailsImg, setDetailsImg] = useState('/img/customer/product/mobile/iphone11.png');
    const [quantity, setQuantity] = useState(1);
    const [navTabItem, setNavTabItem] = useState(1);
    const [rating, setRating] = useState(0);
    useLayoutEffect(() => {
        if(quantity < 1){
            setQuantity(1);
        }
    }, [quantity]);

    return (
        <>
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex">
                <div className="col-lg-2 col-md-2 col-sm-2 d-flex justify-content-center">
                    <SlickSlider>
                        <div className={clsx(styles["details-slick__item"])}>
                            <img className={clsx(styles['details-slick__img'])}
                                 onClick={e => setDetailsImg(e.target.src)}
                                 src="/img/customer/product/mobile/iphone11.png" alt=""/>
                        </div>
                        <div className={clsx(styles["details-slick__item"])}>
                            <img className={clsx(styles['details-slick__img'])}
                                 onClick={e => setDetailsImg(e.target.src)}
                                 src="/img/customer/product/mobile/iphone13.png" alt=""/>
                        </div>
                        <div className={clsx(styles["details-slick__item"])}>
                            <img className={clsx(styles['details-slick__img'])}
                                 onClick={e => setDetailsImg(e.target.src)}
                                 src="/img/customer/product/mobile/iphone15-pro.png" alt=""/>
                        </div>
                    </SlickSlider>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <div className={clsx(styles["details-item"])}>
                        <img className={clsx(styles['details-item__img'])} src={`${detailsImg}`} alt=""/>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5">
                    <div className={clsx(styles["details-info"])}>
                        <h2 className={clsx(styles['details-info__title'])}>IPhone 11</h2>
                        <div className={clsx(styles["details-info__rating"])}>
                            <div className={clsx(styles["details-info__icon"])}>
                                <i className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>
                                <i className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>
                                <i className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>
                                <i className={clsx("fa-solid fa-star", styles['details-info__star'])}></i>
                                <i className={clsx("fa-regular fa-star", styles['details-info__star'])}></i>
                            </div>
                            <a href='#' className={clsx(styles['details-info__review'], 'mb-0')}>10 review(s) | Add your
                                reviews</a>
                        </div>
                        <div className={clsx(styles["details-info__budget"])}>
                            <h3 className={clsx(styles['details-info__price'], 'mb-0')}>$300.000</h3>
                            <p className={clsx(styles['details-info__status'], 'mb-0')}>IN STOCK (18 remaining)</p>
                        </div>
                        <div className={clsx(styles["details-info__text"])}>
                            <p className={clsx(styles["details-info__para"], 'mb-0')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias aliquam animi
                                atque aut consequatur, ea, enim error facere fugiat iste minima nisi nulla qui
                                repellendus sed sint, suscipit tempore?
                            </p>
                        </div>
                        <div className={clsx(styles["details-info__choice"])}>
                            <div
                                className="form-group col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-between mb-3">
                                <label className={clsx(styles['details-info__choice-label'])}
                                       htmlFor="color-details">COLOR</label>
                                <select name="" className={clsx(styles["details-info__choice-select"], 'form-select')}
                                        id="color-details">
                                    <option value="red">RED</option>
                                    <option value="yellow">YELLOW</option>
                                    <option value="black">BLACK</option>
                                </select>
                            </div>
                            <div
                                className="form-group col-lg-5 col-md-5 col-sm-5 d-flex align-items-center justify-content-between">
                                <label className={clsx(styles['details-info__choice-label'])}
                                       htmlFor="quan-details">QUANTITY</label>
                                <div className={clsx(styles["details-info__choice-group"])}>
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
                    <div className={clsx(styles["details-more__line"], 'col-lg-4 col-md-3 col-sm-3')}></div>
                    <div className={clsx(styles["details-more__title"], 'col-lg-4 col-md-6 col-sm-6')}>
                        <a onClick={() => setNavTabItem(1)} href='javascript:void(0)' className={clsx(styles['details-more__title-text'], `link-underline ${navTabItem === 1 && clsx(styles['details-click'])}`)}>Description</a>
                        <a onClick={() => setNavTabItem(2)} href='javascript:void(0)' className={clsx(styles['details-more__title-text'], `link-underline ${navTabItem === 2 && clsx(styles['details-click'])}`)}>Details</a>
                        <a onClick={() => setNavTabItem(3)} href='javascript:void(0)' className={clsx(styles['details-more__title-text'], `link-underline ${navTabItem === 3 && clsx(styles['details-click'])}`)}>Review</a>
                    </div>
                    <div className={clsx(styles["details-more__line"], 'col-lg-4 col-md-3 col-sm-3')}></div>
                </div>

                <div className={clsx(styles["details-more__content"])}>
                    {navTabItem === 1 &&
                        <div className="details-more__item">
                            <p className={clsx(styles['details-more__item-para'], 'mb-0')}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid dicta eaque esse natus perspiciatis qui unde velit vero. Fuga minima possimus quia ratione rem repellendus totam ut veniam voluptatibus.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab at aut delectus doloremque ducimus est facere facilis fugit illum maiores nemo, numquam officiis perferendis quas totam vel. Minus, sunt?
                            </p>
                        </div>
                    }
                    {navTabItem === 2 &&
                        <div className={clsx(styles["details-more__item"], 'd-flex justify-content-center')}>
                            <div className={clsx(styles["details-more__item--inner"])}>
                                {/*<h5 className="text-center">Specifications</h5>*/}
                                <div className={clsx(styles["details-more__item-list"])}>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Trademark</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>IPhone</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Guarantee</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>24
                                            months</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Name</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>IPhone
                                            11</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Color</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>Red</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Processor</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>Intel®
                                            Core™ Ultra 5 processor 125H, 14 cores 18 threads, 3.6 GHz - 4.5 GHz</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Battery</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>65
                                            Wh 4-cell Li-ion</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-list__item"])}>
                                        <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Graphics</p>
                                        <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>Intel® Arc™ Graphics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {navTabItem === 3 &&
                        <div className={clsx(styles["details-more__item"], 'd-flex')}>
                            <div className={clsx(styles["details-more__item-rating"], 'col-lg-3 col-md-3 col-sm-12')}>
                                <div className={clsx(styles["details-more__item-rating__total"])}>
                                <h3 className={clsx(styles['details-more__item-rating__title'], 'mb-0 mr-15')}>4.5</h3>
                                    <div className={clsx(styles["details-more__item-rating__icon"])}>
                                        <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star'])}></i>
                                        <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star'])}></i>
                                        <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star'])}></i>
                                        <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star'])}></i>
                                        <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star'])}></i>
                                    </div>
                                </div>
                                <div className={clsx(styles["details-more__item-rating__details"])}>
                                    <div className={clsx(styles["details-more__item-rating__group"])}>
                                        <div
                                            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>
                                            <div style={{width: "60%"}}
                                                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>
                                        </div>
                                        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>3</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-rating__group"])}>
                                        <div
                                            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>
                                            <div style={{width: "40%"}}
                                                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>
                                        </div>
                                        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>2</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-rating__group"])}>
                                        <div
                                            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>
                                            <div style={{width: "0%"}}
                                                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>
                                        </div>
                                        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>0</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-rating__group"])}>
                                        <div
                                            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>
                                            <div style={{width: "0%"}}
                                                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>
                                        </div>
                                        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>0</p>
                                    </div>
                                    <div className={clsx(styles["details-more__item-rating__group"])}>
                                        <div
                                            className={clsx(styles["details-more__item-rating__icon--details"], 'col-lg-4 col-md-4 col-sm-4')}>
                                            <i className={clsx("fa-solid fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                            <i className={clsx("fa-regular fa-star", styles['details-more__item-rating__star--details'])}></i>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-rating__progress"], 'col-lg-6 col-md-6 col-sm-4')}>
                                            <div style={{width: "0%"}}
                                                 className={clsx(styles["details-more__item-rating__progress--percent"])}></div>
                                        </div>
                                        <p className={clsx('mb-0 col-lg-2 col-md-2 col-sm-4 text-center')}>0</p>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles["details-more__item-cmt"], 'col-lg-6 col-md-6 col-sm-12')}>
                                <div className={clsx(styles["details-more__item-cmt__list"], 'p-3')}>
                                    <div className={clsx(styles["details-more__item-cmt__item"], 'd-flex justify-content-between mb-3')}>
                                        <div
                                            className={clsx(styles["details-more__item-cmt__info"], 'col-lg-2 col-md-2 col-sm-2')}>
                                            <h6>John</h6>
                                            <div className={clsx(styles["details-more__item-cmt__icon"])}>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-regular fa-star", styles['details-more__item-cmt__star'])}></i>
                                            </div>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-cmt__review"], 'col-lg-9 col-md-9 col-sm-9')}>
                                            <p className={clsx(styles['details-more__item-cmt__para'], 'mb-0')}>Lorem ipsum
                                                dolor sit amet, consectetur adipisicing elit. Adipisci doloribus fugiat
                                                iure provident quidem. Ad architecto debitis doloribus libero, nostrum
                                                obcaecati pariatur tempore. Architecto, aut facere illo mollitia nihil
                                                tempore.</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["details-more__item-cmt__item"], 'd-flex justify-content-between mb-3')}>
                                        <div
                                            className={clsx(styles["details-more__item-cmt__info"], 'col-lg-2 col-md-2 col-sm-2')}>
                                            <h6>John</h6>
                                            <div className={clsx(styles["details-more__item-cmt__icon"])}>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-regular fa-star", styles['details-more__item-cmt__star'])}></i>
                                            </div>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-cmt__review"], 'col-lg-9 col-md-9 col-sm-9')}>
                                            <p className={clsx(styles['details-more__item-cmt__para'], 'mb-0')}>Lorem ipsum
                                                dolor sit amet, consectetur adipisicing elit. Adipisci doloribus fugiat
                                                iure provident quidem. Ad architecto debitis doloribus libero, nostrum
                                                obcaecati pariatur tempore. Architecto, aut facere illo mollitia nihil
                                                tempore.</p>
                                        </div>
                                    </div>
                                    <div className={clsx(styles["details-more__item-cmt__item"], 'd-flex justify-content-between mb-3')}>
                                        <div
                                            className={clsx(styles["details-more__item-cmt__info"], 'col-lg-2 col-md-2 col-sm-2')}>
                                            <h6>John</h6>
                                            <div className={clsx(styles["details-more__item-cmt__icon"])}>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-solid fa-star", styles['details-more__item-cmt__star'])}></i>
                                                <i className={clsx("fa-regular fa-star", styles['details-more__item-cmt__star'])}></i>
                                            </div>
                                        </div>
                                        <div
                                            className={clsx(styles["details-more__item-cmt__review"], 'col-lg-9 col-md-9 col-sm-9')}>
                                            <p className={clsx(styles['details-more__item-cmt__para'], 'mb-0')}>Lorem ipsum
                                                dolor sit amet, consectetur adipisicing elit. Adipisci doloribus fugiat
                                                iure provident quidem. Ad architecto debitis doloribus libero, nostrum
                                                obcaecati pariatur tempore. Architecto, aut facere illo mollitia nihil
                                                tempore.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={clsx(styles["details-more__item-submit"], 'col-lg-3 col-md-3 col-sm-12')}>
                                <div className="form-group">
                                    <div className="form-group mb-3">
                                        <input placeholder='Your Name' id='review-name' type="text"
                                               className={clsx(styles["details-more__item-submit__name"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <input placeholder='Your Email' id='review-name' type="text"
                                               className={clsx(styles["details-more__item-submit__email"], 'form-control')}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <textarea placeholder='Your Comment' className={clsx(styles['details-more__item-submit__cmt'], 'form-control')} name="review-cmt" id="" cols="60" rows="5"></textarea>
                                    </div>
                                    <div className={clsx(styles['details-more__item-submit__rating'], 'd-flex')}>
                                        {[5, 4, 3, 2, 1].map((value) => (
                                            <Fragment key={value}>
                                                <input
                                                    type="radio"
                                                    id={`star${value}`}
                                                    name="rating"
                                                    value={value}
                                                    checked={rating === value}
                                                    onChange={() => setRating(value)}
                                                />
                                                <label htmlFor={`star${value}`} title={`${value} stars`}>
                                                    <i className={clsx("fa-solid fa-star", styles[''])}></i>
                                                </label>
                                            </Fragment>
                                        ))}
                                    </div>
                                    <button className={clsx(styles["details-more__item-submit__btn"], 'btn')}>SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
                <h4 className="text-center">Related Product</h4>
                <div className={clsx(styles["details-related__middle"])}></div>
                <ul className={clsx(styles['details-related__list'], 'd-flex flex-wrap')}>
                    <li className={clsx(styles['details-related__item'], `mix col-lg-3 col-md-3 col-sm-6`)}>
                        <div className={clsx(styles['details-related__item--inner'])}>
                            <div className={clsx(styles['details-related__item-img--outer'])}>
                                <img className={clsx(styles['details-related__item-img'])}
                                     src="/img/customer/product/mobile/samsung-S23Ultra.png" alt=""/>
                                <ul className={clsx(styles['details-related__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['details-related__item-list--icon'])}>
                                        <Link className="text-dark" to={`/details/1`}>
                                            <i className="fa-solid fa-eye"></i>
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
                                <p className="mb-0 text-dark">IPhone 11</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$300.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['details-related__item'], `mix col-lg-3 col-md-3 col-sm-6`)}>
                        <div className={clsx(styles['details-related__item--inner'])}>
                            <div className={clsx(styles['details-related__item-img--outer'])}>
                                <img className={clsx(styles['details-related__item-img'])}
                                     src="/img/customer/product/mobile/samsung-S23Ultra.png" alt=""/>
                                <ul className={clsx(styles['details-related__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['details-related__item-list--icon'])}>
                                        <Link className="text-dark" to={`/details/1`}>
                                            <i className="fa-solid fa-eye"></i>
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
                                <p className="mb-0 text-dark">IPhone 11</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$300.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['details-related__item'], `mix col-lg-3 col-md-3 col-sm-6`)}>
                        <div className={clsx(styles['details-related__item--inner'])}>
                            <div className={clsx(styles['details-related__item-img--outer'])}>
                                <img className={clsx(styles['details-related__item-img'])}
                                     src="/img/customer/product/mobile/samsung-S23Ultra.png" alt=""/>
                                <ul className={clsx(styles['details-related__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['details-related__item-list--icon'])}>
                                        <Link className="text-dark" to={`/details/1`}>
                                            <i className="fa-solid fa-eye"></i>
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
                                <p className="mb-0 text-dark">IPhone 11</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$300.000</p>
                            </div>
                        </div>
                    </li>
                    <li className={clsx(styles['details-related__item'], `mix col-lg-3 col-md-3 col-sm-6`)}>
                        <div className={clsx(styles['details-related__item--inner'])}>
                            <div className={clsx(styles['details-related__item-img--outer'])}>
                                <img className={clsx(styles['details-related__item-img'])}
                                     src="/img/customer/product/mobile/samsung-S23Ultra.png" alt=""/>
                                <ul className={clsx(styles['details-related__item-list'], 'd-flex w-100 p-0')}>
                                    <li className={clsx(styles['details-related__item-list--icon'])}>
                                        <Link className="text-dark" to={`/details/1`}>
                                            <i className="fa-solid fa-eye"></i>
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
                                <p className="mb-0 text-dark">IPhone 11</p>
                                <p className="text-dark" style={{fontWeight: "bold"}}>$300.000</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    );
}

export default DetailsPage;