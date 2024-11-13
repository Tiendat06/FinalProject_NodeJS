import AppRoutes from '~/routes';
import {useDashboardContext} from "~/context/DashboardContext";
import {DashboardFooter, DashboardHeader, DashboardSidebar} from "~/components";
import styles from './Body.module.css';
import clsx from "clsx";

function Body(){
    const {currentLocation} = useDashboardContext();
    return (
        <>
            {currentLocation.startsWith('/dashboard') ? (
                <div className={clsx(styles['dashboard'])}>
                    <div className={clsx(styles["dashboard-sidebar"], 'col-sm-0')}>
                        <DashboardSidebar />
                    </div>
                    <div className={clsx(styles["dashboard-content"], 'position-relative')}>
                        <div className={clsx(styles["header"])}>
                            <DashboardHeader />
                        </div>
                        <div className={clsx(styles['dashboard-routes'], "bg-light")}>
                            <AppRoutes />
                            <DashboardFooter />
                        </div>
                    </div>
                </div>
            ): (
                <div className="container">
                    <div className="row" style={{ paddingTop: 20, paddingBottom: 20 }}>
                        <AppRoutes />
                    </div>
                </div>
            )}
        </>
    );
}
export default Body;