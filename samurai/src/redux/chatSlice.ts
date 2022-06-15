import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {MessageAPIType} from "./types/types";
import {StatusType, webSocket} from "../requestApi/webSocket";
import {DispatchType} from "./store";
import { v4 as uuidv4 } from 'uuid';

type InitialState = typeof initialState
export type MessagePerformanceType = MessageAPIType & {id: string}
const initialState = {
    chatMessages: [] as MessagePerformanceType[],
    socketStatus: 'ready' as StatusType,
};
const chatSlice = createSlice({
    name:'chat',
    initialState,
    //TODO очистка сообщений при закрытии сокета или мемоиация сообщений, чтобы не создавались копии
    reducers: {
        messageReceived: (state:InitialState, action: PayloadAction<MessageAPIType[]>) => {
            const newMessages = action.payload.map(message => ({...message, id: uuidv4()}))
            const chatMessages = state.chatMessages.concat(newMessages).slice(-20)
            return {...state, chatMessages}
        },
        statusChanged: (state:InitialState, action:PayloadAction<StatusType>) => {
            state.socketStatus = action.payload
            state.chatMessages = []
        }
    },

})
let memoMessageSubscriber: ((messages:MessageAPIType[]) => void) | null = null;
const messageSubscriberCreator = (dispatch: DispatchType) =>{
    if (memoMessageSubscriber === null){
        memoMessageSubscriber = (messages:MessageAPIType[]) => { dispatch(messageReceived(messages))}
    }
    return memoMessageSubscriber
}
let memoStatusSubscriber: ((status:StatusType) => void) | null = null;

const statusSubscriberCreator = (dispatch: DispatchType) =>{
    if (memoStatusSubscriber === null){
        memoStatusSubscriber = (status:StatusType) => { dispatch(statusChanged(status))}
    }
    return memoStatusSubscriber
}

export const addMessageListener = () => (dispatch: DispatchType) => {
    webSocket.subscribe('message',messageSubscriberCreator(dispatch))
    webSocket.open()

};
export const removeMessageListener = () => (dispatch: DispatchType) => {
    webSocket.unSubscribe('message', messageSubscriberCreator(dispatch))
    webSocket.close()
};
export const addStatusListener = () => (dispatch: DispatchType) => {
    webSocket.subscribe('status', statusSubscriberCreator(dispatch))

};
export const removeStatusListener = () => (dispatch: DispatchType) => {
    webSocket.unSubscribe('status', statusSubscriberCreator(dispatch))
};

export const sendMessageWithWS = (message:string) => (dispatch: DispatchType) => {
    webSocket.send(message)
};

export const devCloseWB = () => (dispatch: DispatchType) => {
    webSocket.devClose()
};



export const {messageReceived, statusChanged}  = chatSlice.actions
export default chatSlice.reducer