import style from './Loading.module.css';
import clsx from "clsx";

function Loading ({spinnerClassName = ''}) {
    return (
        <>
            <span className={clsx("spinner-border spinner-border-sm mr-15", `${spinnerClassName}`)}></span>
        </>
    )
}

export default Loading;