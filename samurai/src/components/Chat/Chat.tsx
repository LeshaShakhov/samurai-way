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
import {ChatMessagesContainer} from "./ChatMessages";
import {ChatInputs} from "./ChatInputs";

export const Chat: React.FC<{}> = () => {
    const dispatch = useDispatch<DispatchType>()
    const webSocketStatus = useSelector((state: StateType) => state.chatSlice.socketStatus)
    useEffect(() => {
        dispatch(addMessageListener())
        dispatch(addStatusListener())
        return () => {
            dispatch(removeMessageListener())
            dispatch(removeStatusListener())
        }
    }, [])
    return (
        <>
            {webSocketStatus == 'pending' && <ServerMessage error='Connection failed! Trying to reconnect'/>}
            <ChatMessagesContainer/>
            <ChatInputs/>
        </>
    )
}