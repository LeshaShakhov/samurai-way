import React, {useEffect, useState} from "react";
import cn from "classnames";
import {useDispatch} from "react-redux";
import {DispatchType} from "../../../redux/store";
import {updateUserStatus} from "../../../redux/profileSlice";

type StatusTypes = {
    status: string
    isOwner: boolean
}
const Status:React.FC<StatusTypes> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useDispatch<DispatchType>();
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        if(props.isOwner){
            setEditMode(true)
        }
    }
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if(value.length > 300) {
            setError('Max status length is 300 symbols')
        } else {
            setError(null);
        }
        setStatus(e.currentTarget.value);
    }
    const deactivateEditMode = (e:  React.FocusEvent<HTMLInputElement>) => {
        if(!error) {
            setEditMode(false);
            dispatch(updateUserStatus(status));
        } else {
            e.currentTarget.focus();
        }
    }
    return (
        <div className='status'>
            {
                !editMode &&
                <div onDoubleClick={activateEditMode} className="status-text">
                    {
                        props.isOwner ? (status || 'Double click to change status') : (status || 'User don\'t set status')
                    }
                </div>
            }
            {
                (editMode && props.isOwner) &&
                <div className={cn('input-wrapper formControl status-edit', {error: error})}>
                    {error && <div className='error-message'>{error}</div>}
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={handleOnChange}
                        type="text"
                    />
                </div>
            }

        </div>
    )
}

export default Status;