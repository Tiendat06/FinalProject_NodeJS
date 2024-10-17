import clsx from "clsx";
import styles from './HomePage.module.css';

function HomePage(){
    return (
        <>
            <section className={clsx(styles["home-banner"])}>
                <div id="carouselExampleIndicators" className="carousel h-100 slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner h-100">
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                            <img src="/img/customer/home/laptop-1-slider.png" className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                            <img src="/img/customer/home/laptop-2-slider.jpg" className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                        <div className={clsx("carousel-item h-100 active", styles['header-banner__item'])}>
                            <img src="/img/customer/home/laptop-3-slider.jpg" className={clsx("d-block w-100", styles['home-banner__img'])} alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>

            <section className="home-new">

            </section>

            <section className="home-top-sell">

            </section>

            <section className="home-discount">

            </section>

            <section className="home-top-list">

            </section>
        </>
    );
}

export default HomePage;