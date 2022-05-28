import React from "react";
import './ConversationItem.css'
import {NavLink} from "react-router-dom";

const ConversationItem = React.memo(({id, interlocutor, userImage, onChangeConversation}) => {
    let onClick = () => {
        onChangeConversation(id);
    }
    return (
        <NavLink
            to={`./${id}`}
            key={id}
            className="interlocutor flex"
            onClick={onClick}
        >
            <div className="rounded-avatar">
                <img src={userImage} alt=""/>
            </div>
            <div className='name'>
                {interlocutor}
            </div>
        </NavLink>
    )
})


export default ConversationItem;