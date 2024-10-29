import ReactPaginate from "react-paginate";
import clsx from "clsx";
import {memo} from "react";

import styles from './Pagination.module.css';

function Pagination({pageCount, handlePageChange}) {
    console.log('re-render paginate');
    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="&raquo;"
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="&laquo;"
                onPageChange={handlePageChange}
                containerClassName={"pagination justify-content-end"}
                pageClassName={"page-item"}
                pageLinkClassName={clsx(styles['page-link'], 'page-link')}
                previousClassName={"page-item"}
                nextClassName={"page-item"}
                breakClassName={"break-me"}
                marginPagesDisplayed={2}
                nextLinkClassName={clsx(styles['next-link'], 'page-link')}
                previousLinkClassName={clsx(styles['prev-link'], 'page-link')}
                activeClassName={clsx(styles["active"])}
                disabledClassName={''}
            />
        </>
    )
}

export default memo(Pagination);