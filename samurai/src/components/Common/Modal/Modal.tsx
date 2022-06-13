import React, {useEffect, useMemo} from "react";
import './Modal.css'
import close from '../../../assets/close.png'
import {createPortal} from "react-dom";

type ErrorModalTypes = {
    error: string | null
    modalIsOpen: boolean
    setModalIsOpen: (value: boolean) => void
}
const modalRoot = document.querySelector('.content');

export const Modal: React.FC<ErrorModalTypes> = (props) => {
    const el = useMemo(() => document.createElement('div'), [])
    useEffect(() => {
        if(props.modalIsOpen) {
            el.className = 'modal-outer'
            modalRoot?.appendChild(el)
            return () => {
                modalRoot?.removeChild(el)
            }
        }

    }, [props.modalIsOpen])
    return createPortal(<ModalInner {...props}/>, el)
}

const ModalInner: React.FC<ErrorModalTypes> = ({error, modalIsOpen, setModalIsOpen}) => {
    if (modalIsOpen) {
        return (
                <div className='modal flex-center-center'>
                    <div onClick={() => {setModalIsOpen(false)
                    }} className='close'><img src={close} alt=""/></div>
                    {error}
                </div>

        )

    }
    return null
}