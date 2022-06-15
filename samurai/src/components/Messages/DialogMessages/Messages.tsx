import React, {useEffect} from "react";
import './Messages.css'
import {MessageForm} from "./MessageForm";
import {useDispatch, useSelector} from "react-redux";

import withAuthRedirect from "../../../Utils/withAuthRedirect";
import {DispatchType, StateType} from "../../../redux/store";
import {AutoScroll} from "../../Common/Autoscroll/AutoScroll";
import {DialogMessage} from "./DialogMessage";
import {useParams} from "react-router";
import {getMessages} from "../../../redux/dialogsSlice";
import {Link} from "react-router-dom";

const DialogItems: React.FC<{}> = () => {
    const messages = useSelector((state:StateType) => state.dialogs.messages)

    const myPhoto = useSelector((state:StateType) => { return state.profile.myProfile?.photos.small})
    const currentDialog = useSelector((state:StateType) => state.dialogs.currentDialog)
    const params = useParams()
    const dispatch = useDispatch<DispatchType>()
    useEffect(() => {
        dispatch(getMessages(Number(params.userId)))
    },[])
    return (
            <div className='dialogs app-block full-height'>
                <div className='text-title flex flex-between'>
                    <Link to={'/messages'} >Back</Link>
                    <Link to={'/profile/'+ Number(params.userId)}>Profile</Link>
                </div>
                <AutoScroll
                    items={messages}
                    Component={DialogMessage}
                    myPhoto={myPhoto}
                    currentDialog={currentDialog}
                />
                <MessageForm/>
            </div>
    )
}

export default withAuthRedirect(DialogItems)