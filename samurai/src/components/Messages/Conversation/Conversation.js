import React from "react";
import './Conversation.css'

const Conversation = (props) => {
    const {text, avatar, id} = props;

    return (
        <div key={id} className="dialog flex">
            <div className="rounded-avatar">
                <img src={avatar} alt=""/>
            </div>
            <div className="dialog-text">
                {text}
            </div>
        </div>
    )
}

export default Conversation;