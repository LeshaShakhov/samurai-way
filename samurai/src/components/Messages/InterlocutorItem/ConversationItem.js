import React from "react";
import './ConversationItem.css'
import {NavLink} from "react-router-dom";

const ConversationItem = (props) => {
    const {id, interlocutor, userImage, onChangeConversation} = props;
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
}


export default ConversationItem;