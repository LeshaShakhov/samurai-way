import React from "react";
import './Conversation.css'
type Message = {
    message: string
    photo: string
    userName: string
}
export const Message:React.FC<Message> = React.memo((props) => {
    const {message, photo, userName} = props;
    console.log('>>>>>>>>>>>message')
    return (
        <div className="dialog flex">
            <div className="rounded-avatar">
                <img src={photo} alt=""/>
            </div>
            <div className="dialog-text">
                <b>{userName}</b>
                <div>{message}</div>
            </div>
        </div>
    )
})
