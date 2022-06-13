import React, {useEffect, useMemo} from "react";
import './Modal.css'
import {createPortal} from "react-dom";

type ErrorModalTypes = {
    error: string | null
}
const modalRoot = document.querySelector('.content');

export const ServerMessage: React.FC<ErrorModalTypes> = (props) => {
    const el = useMemo(() => document.createElement('div'), [])
    useEffect(() => {
        if(props.error) {
            el.className = 'modal-outer'
            modalRoot?.appendChild(el)
            return () => {
                modalRoot?.removeChild(el)
            }
        }

    }, [props.error])

    return createPortal(<ModalInner {...props}/>, el)
}

const ModalInner: React.FC<ErrorModalTypes> = ({error}) => {
        return (
            <div className='modal flex-center-center'>
                {error}
            </div>

        )
}