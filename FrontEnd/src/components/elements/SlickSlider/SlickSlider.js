import styles from './SlickSlider.module.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import clsx from "clsx";

function SlickSlider({children}) {
    // console.log('re-render');
    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={clsx(styles['slick-slider__prev'], "custom-arrow custom-prev")} onClick={onClick}>
                <i className="fa-solid fa-angle-up"></i>
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className={clsx(styles['slick-slider__next'], "custom-arrow custom-next")} onClick={onClick}>
                <i className="fa-solid fa-angle-down"></i>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        prevArrow: <CustomPrevArrow  />,
        nextArrow: <CustomNextArrow />,
        className: styles['slick-slider']
    };

    return (
        <Slider className={styles['slick-slider']} {...settings}>
            {children}
        </Slider>
    )
}

export default SlickSlider;