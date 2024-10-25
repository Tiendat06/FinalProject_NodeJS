import {useEffect} from "react";
import $ from 'jquery';
import 'jquery-nice-select/js/jquery.nice-select';
import 'jquery-nice-select/css/nice-select.css';
import styles from './NiceSelect.module.css';
import clsx from "clsx";

function NiceSelect({options, onChange}) {
    useEffect(() => {
        if (typeof $.fn.niceSelect !== "function") {
            console.error("Nice Select khởi tạo sai cách!");
            return;
        }
        $('select').niceSelect();
        return () => {
            $('select').niceSelect('destroy');
        };
    }, []);

    return (
        <select className={clsx(styles['nice-select'], 'nice-select')} onChange={(e) => onChange(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} className={clsx(styles['nice-option'], 'nice-option')} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default NiceSelect;