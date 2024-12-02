import { useState, useEffect, memo } from 'react';
import {Loading} from "~/components/elements";

function Modal({ id = '', title = '', children = '',
                   labelBtnSave = '', labelBtnClose = '',
                   closeClassName = '', saveClassName = '', modalTitleClassName = '',
                   modalHeaderClassName = '', modalFooterClassName = '', modalContentClassName = '',
                   modalBodyClassName = '', modalTypeClassName = '', isStatic = false, loadingClassName='',
                   onClickLabelSave = () => {}, onClickLabelClose = () => {} }) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const modalElement = document.getElementById(id);
        const handleShow = () => setIsOpen(true);
        const handleHide = () => setIsOpen(false);

        modalElement?.addEventListener('shown.bs.modal', handleShow);
        modalElement?.addEventListener('hidden.bs.modal', handleHide);

        return () => {
            modalElement?.removeEventListener('shown.bs.modal', handleShow);
            modalElement?.removeEventListener('hidden.bs.modal', handleHide);
        };
    }, [id]);

    return (
        <div className="modal fade" id={id} tabIndex="-1" aria-hidden={isOpen ? 'false' : 'true'}
             data-bs-backdrop={isStatic ? 'static' : undefined}>
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
                        <button type="button" onClick={onClickLabelClose} className={`${closeClassName}`}
                                data-bs-dismiss="modal">{labelBtnClose}</button>
                        <button type="button" onClick={onClickLabelSave}
                                className={`${saveClassName}`}>
                            <Loading spinnerClassName={`d-none spinner-load ${loadingClassName}`} />
                            <span>{labelBtnSave}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Modal);
