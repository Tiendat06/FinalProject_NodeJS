import clsx from "clsx";
import styles from "../DetailsPage.module.css";

function FullOptionDevice({category_id, variant_ROM, variant_RAM, variant_cpu, variant_operation_system, variant_chipset, variant_graphic_card, variant_screen, variant_weight}) {
    return (
        <>
            <div className={clsx(styles["details-more__item-list"])}>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Trademark</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{category_id.category_name}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>ROM</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_ROM || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>RAM</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_RAM || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>CPU</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_cpu || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Operation
                        System</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_operation_system || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Chipset</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_chipset || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Graphic
                        card</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_graphic_card || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Screen</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_screen || 'Updating...'}</p>
                </div>
                <div className={clsx(styles["details-more__item-list__item"])}>
                    <p className={clsx(styles['details-more__item-list__item-para'], 'col-lg-6 col-md-6 col-sm-6')}>Weight</p>
                    <p className={clsx(styles['details-more__item-list__item-text'], 'col-lg-6 col-md-6 col-sm-6')}>{variant_weight || 'Updating...'}</p>
                </div>
            </div>
        </>
    )
}

export default FullOptionDevice;
