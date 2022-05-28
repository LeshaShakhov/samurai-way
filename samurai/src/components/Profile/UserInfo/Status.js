import React, {useEffect, useState} from "react";

const Status = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }
    return (
        <div className='status'>
            {
                !editMode &&
                <div onDoubleClick={activateEditMode} className="status-text">
                    {status || 'Введите ваш статус'}
                </div>
            }
            {
                editMode &&
                <div className="status-edit">
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={(e)=>{setStatus(e.currentTarget.value)}}
                        type="text"
                    />
                </div>
            }

        </div>
    )
}

export default Status;