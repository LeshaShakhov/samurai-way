import React, {useMemo} from "react";
import {DialogMessageType} from "../../../redux/dialogsSlice";
import './DialogMessages.css'
import cn from "classnames";



export const DialogMessage:React.FC<DialogMessageType& {myId: number | null}> = React.memo(({
            id, body,
            addedAt, senderName,
            viewed, myId, senderId
    }) => {
    //TODO добавить нули к датам
    const dateString = useMemo(() => {
        const date = new Date(addedAt)
        return `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    }, [addedAt])
    return (
        <div className={cn('dialog',{'my-message' : senderId === myId})}>
            <div className="dialog-text">
                <b>{senderName}</b>
                <div className='message-text'>{body}</div>
            </div>
            <div className='date'>
                {dateString}
            </div>
        </div>
    )
})
