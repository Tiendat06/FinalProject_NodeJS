import {memo} from 'react';

function Button({label, className, onClick}) {
    return (
        <button onClick={onClick} className={className} type="submit">{label}</button>
    )
}

export default memo(Button);