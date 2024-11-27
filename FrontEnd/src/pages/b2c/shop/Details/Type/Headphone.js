import clsx from "clsx";
import styles from "../DetailsPage.module.css";

function Headphone({category_id, variant_weight}) {
    return (
        <>
            <div className={clsx(styles["details-more__item-list"])}>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Trademark</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{category_id.category_name}</p>
                </div>

                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Weight</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_weight || 'Updating...'}</p>
                </div>
            </div>
        </>
    )
}

export default Headphone;
