import styles from './DashboardFooter.module.css';
import clsx from "clsx";

function DashboardFooter() {
    return (
        <>
            <footer style={{backgroundColor: '#ffffff',
                boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.2)'}}
                    className={clsx(styles["footer"], 'text-center p-3')}>
                <p style={{fontSize: 14}} className="mb-0">Copyright &copy; 2024 All rights reserved</p>
            </footer>
        </>
    )
}

export default DashboardFooter;