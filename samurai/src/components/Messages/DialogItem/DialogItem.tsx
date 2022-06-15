import React, {useMemo} from "react";
import './DialogItem.css'
import RoundedAvatar from "../../Common/RoundedAvatar/RoundedAvatar";
import {DialogsType} from "../../../requestApi/requestDialogsApi";
import {transformDate} from "../../../Utils/transformDate";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentDialog} from '../../../redux/dialogsSlice'


//TODO добавить еще полей из типа DialogsType
export const DialogItem: React.FC<DialogsType> = ({
                   userName,
                   hasNewMessages,
                   newMessagesCount,
                   photos,
                   id,
                   lastDialogActivityDate,
                   lastUserActivityDate
   }) => {
    const lastMessage = useMemo(()=>transformDate(lastDialogActivityDate), [lastDialogActivityDate])
    const lastActivity =  useMemo(()=>transformDate(lastUserActivityDate), [lastUserActivityDate])
    const dispatch = useDispatch()

    return (
        <Link to={String(id)} onClick={() => {dispatch(setCurrentDialog({id, photos: photos.small, userName}))}} className={'interlocutor flex'}>
            <RoundedAvatar src={photos.small}/>
            <div className='dialog-data flex-column'>
                <div className='name'>
                    {userName}
                </div>
                <div className='small-gray-text'><span>Last message:</span> <span>{lastMessage}</span></div>
                <div className='small-gray-text'><span>Last activity:</span>  <span>{lastActivity}</span></div>
            </div>
            {hasNewMessages && <div className='new-messages flex-center-center'>{newMessagesCount}</div>}
        </Link>
    )
}
