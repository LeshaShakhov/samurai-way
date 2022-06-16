import React, {useMemo} from "react";
import {DialogMessageType} from "../../../redux/dialogsSlice";
import './DialogMessages.css'
import cn from "classnames";
import {transformDate} from "../../../Utils/transformDate";
import RoundedAvatar from "../../Common/RoundedAvatar/RoundedAvatar";


type DialogMessagePropsType = {
    myId: number | null
    myPhoto?: string
    currentDialog?: {userId: number, photos: string, userName: string}
}
export const DialogMessage:React.FC<DialogMessageType& DialogMessagePropsType> = React.memo(({
            id, body,
            addedAt, senderName,
            viewed, myId, senderId,
             myPhoto,currentDialog
    }) => {
    //TODO добавить нули к датам
    const dateString = useMemo(() => {
        return transformDate(addedAt)
    }, [addedAt])
    return (
        <div className={cn('dialog',{'my-message' : senderId === myId})}>
            <RoundedAvatar src={senderId === myId ? myPhoto : currentDialog?.photos}/>
            <div>
                <div className="dialog-text">
                    <b>{senderName}</b>
                    <div className='message-text'>{body}</div>
                </div>
                <div className='small-gray-text'>
                    {dateString}
                </div>
            </div>
        </div>
    )
})
