import {memo} from 'react';

function Modal({id='', title='', children='',
                   labelBtnSave='', labelBtnClose='',
                   closeClassName='', saveClassName='', modalTitleClassName='',
                   modalHeaderClassName='', modalFooterClassName='', modalContentClassName='',
                   modalTypeClassName='', modalBodyClassName='', isStatic= false}) {
    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel"
             data-bs-backdrop={isStatic? 'static' : undefined}
             aria-hidden="true">
            <div className={`modal-dialog ${modalTypeClassName}`}>
                <div className={`${modalContentClassName} modal-content`}>
                    <div className={`${modalHeaderClassName} modal-header`}>
                        <h5 className={`${modalTitleClassName} modal-title`} id="exampleModalLabel">{title}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className={`${modalBodyClassName} modal-body`}>
                        {children}
                    </div>
                    <div className={`${modalFooterClassName} modal-footer`}>
                        <button type="button" className={`${closeClassName}`} data-bs-dismiss="modal">{labelBtnClose}</button>
                        <button type="button" className={`${saveClassName}`}>{labelBtnSave}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Modal);