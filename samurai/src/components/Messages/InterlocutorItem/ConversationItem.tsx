import React from "react";
import './ConversationItem.css'
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DispatchType} from "../../../redux/store";
import {changeCurrentConversation} from "../../../redux/messageSlice";
import cn from "classnames";

type ConversationItemType = {
    id:number
    interlocutor: string
    userImage: string
    currentConversation: number | null
}
export const ConversationItem:React.FC<ConversationItemType> = ({id, interlocutor, userImage, currentConversation}) => {

    const dispatch = useDispatch<DispatchType>()

    let onClickHandler = (e:React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        dispatch(changeCurrentConversation(id))
    }
    return (
        <div
            className={cn({active: id === currentConversation},'interlocutor flex')}
            onClick={onClickHandler}
        >
            <div className="rounded-avatar">
                <img src={userImage} alt=""/>
            </div>
            <div className='name'>
                {interlocutor}
            </div>
        </div>
    )
}
