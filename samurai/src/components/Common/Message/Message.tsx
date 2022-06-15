import React from "react";
import './Conversation.css'
import {MessagePerformanceType} from "../../../redux/chatSlice";
import cn from "classnames";
export type MessageType = {
    goToDialogs: (userId: number) => void
    myId: number
}
export const Message:React.FC<MessagePerformanceType & MessageType> = React.memo(({message,myId, photo, userName, userId, goToDialogs}) => {
    return (
        <div className={cn('dialog flex',{'my-message' : userId === myId})}>
            <div className="rounded-avatar">
                <img src={photo} alt=""/>
            </div>
            <div className="dialog-text">
                <b>{userName}</b>
                <div>{message}</div>
            </div>
            {userId !== myId &&
                <div className='btn-send-message' onClick={() => goToDialogs(userId)}>&#9993;</div>
            }
        </div>
    )
})
