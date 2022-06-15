import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";
import {
    addMessageListener,
    addStatusListener,
    removeMessageListener,
    removeStatusListener
} from "../../redux/chatSlice";
import {ServerMessage} from "../Common/Modal/ServerMessage";
import {ChatInputs} from "./ChatInputs";
import {AutoScroll} from "../Common/Autoscroll/AutoScroll";
import {Message} from "../Common/Message/Message";
import {startDialog} from "../../redux/dialogsSlice";
import {useNavigate} from "react-router";

export const Chat: React.FC<{}> = React.memo(() => {
    const dispatch = useDispatch<DispatchType>()
    const webSocketStatus = useSelector((state: StateType) => state.chatSlice.socketStatus)
    const chatMessages = useSelector((state: StateType) => state.chatSlice.chatMessages)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(addMessageListener())
        dispatch(addStatusListener())
        return () => {
            dispatch(removeMessageListener())
            dispatch(removeStatusListener())
        }
    }, [])
    const goToDialogs = (id:number) => {
      dispatch(startDialog(id))
      navigate('/messages')
    }
    return (
        <>
            {webSocketStatus == 'pending' && <ServerMessage error='Connection failed! Trying to reconnect'/>}
            <AutoScroll items={chatMessages} Component={Message} goToDialogs={goToDialogs}/>
            <ChatInputs/>
        </>
    )
})