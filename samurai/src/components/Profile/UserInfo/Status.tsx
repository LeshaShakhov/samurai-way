import React, {useEffect, useState} from "react";
import cn from "classnames";

type StatusTypes = {
    updateUserStatus: (status: string)=> void
    status: string
    isOwner: boolean
}
const Status:React.FC<StatusTypes> = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    const [error, setError] = useState<string | null>(null);

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
            props.updateUserStatus(status);
        } else {
            e.currentTarget.focus();
        }
    }
    return (
        <div className='status'>
            {
                !editMode &&
                <div onDoubleClick={activateEditMode} className="status-text">
                    {status || 'Кликните два раза чтобы ввести ваш статус'}
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