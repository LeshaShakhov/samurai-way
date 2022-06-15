import React, {useEffect} from "react";
import './Messages.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {MessageForm} from "./MessageForm";
import {useDispatch, useSelector} from "react-redux";

import withAuthRedirect from "../../Utils/withAuthRedirect";
import {DispatchType, StateType} from "../../redux/store";
import {getDialogs, getMessages} from "../../redux/dialogsSlice";
import {AutoScroll} from "../Common/Autoscroll/AutoScroll";
import {DialogMessage} from "./DialogMessages/DialogMessage";

const Messages: React.FC<{}> = () => {
    const dialogs = useSelector((state:StateType) => state.dialogs.dialogs)
    const messages = useSelector((state:StateType) => state.dialogs.messages)
    const dispatch = useDispatch<DispatchType>()

    useEffect(()=>{
        dispatch(getDialogs())
    },[])
    const onChangeDialog = (id:number) => {
        dispatch(getMessages(id))
    }
    return (
        <div className='app-block'>
            <div className='text-title'>Dialogs</div>
            <div className='flex flex-between'>
                <div className='interlocutors'>
                    {
                        dialogs.map(dialog =>
                            <DialogItem key={dialog.id} {...dialog} onChangeDialog={onChangeDialog}/>
                        )
                    }
                </div>
                <div className="dialogs-separator"/>
                <div className='dialogs'>
                    <AutoScroll items={messages} Component={DialogMessage}/>
                    {!messages.length && <div>Выберите собеседника чтобы наать диалог</div>}
                    <MessageForm/>
                </div>
            </div>
        </div>
    )
}

export default withAuthRedirect(Messages)