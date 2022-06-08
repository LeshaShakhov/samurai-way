import React from "react";
import './Modal.css'
import close from '../../../assets/close.png'
type ErrorModalTypes = {
    error: string | null
    setError: (error: string|null)=>void
}
const ErrorModal:React.FC<ErrorModalTypes> = (props) => {
    return (
        <div className='error-modal flex-center-center'>
            <div onClick={()=>{props.setError(null)}} className='close'><img src={close} alt=""/></div>
            {props.error}
        </div>
    )
}

export default ErrorModal;