import React from "react";
import './DialogItem.css'
import RoundedAvatar from "../../Common/RoundedAvatar/RoundedAvatar";
import {DialogsType} from "../../../requestApi/requestDialogsApi";

type DialogItemType = {
    onChangeDialog: (id:number) => void
}
//TODO добавить еще полей из типа DialogsType
export const DialogItem:React.FC<DialogsType&DialogItemType> = ({
            userName,
            hasNewMessages,
            newMessagesCount,
            photos,
            id,
            onChangeDialog
        }) => {
    return (
        <div onClick={() => onChangeDialog(id)} className={'interlocutor flex'}>
            <RoundedAvatar src={photos.small}/>
            <div className='name'>
                {userName}
            </div>
            {hasNewMessages && <div>{newMessagesCount}</div>}
        </div>
    )
}
