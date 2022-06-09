import React from "react";
import './Conversation.css'
type ConversationType = {
    text: string
    avatar: string|undefined
}
export const Conversation:React.FC<ConversationType> = (props) => {
    const {text, avatar} = props;

    return (
        <div className="dialog flex">
            <div className="rounded-avatar">
                <img src={avatar} alt=""/>
            </div>
            <div className="dialog-text">
                {text}
            </div>
        </div>
    )
}
