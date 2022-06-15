import {MessageAPIType} from "../redux/types/types";
export type StatusType = 'pending' | 'ready'
type CallbackMessageType =(messages:MessageAPIType[]) => void
type CallbackStatusType =(status:StatusType) => void
type EventType = 'message' | 'status'

let subscribers = {
    'message':[] as CallbackMessageType[],
    'status' : [] as CallbackStatusType[]
}
let ws:WebSocket, interval:NodeJS.Timer;

const clearWSListeners = () => {
    ws?.removeEventListener('open', openHandler)
    ws?.removeEventListener('close', closeHandler)
    ws?.removeEventListener('message', messageHandler)
}

function openHandler() {
    ws.addEventListener('close', closeHandler)
    ws.addEventListener('message', messageHandler)
    clearInterval(interval)
    subscribers['status'].forEach(subscriber => {
        subscriber('ready')
    })
}

const openWebSocket = () => {
    clearWSListeners()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    ws.addEventListener('open', openHandler)
}



const closeWebSocket = () => {
    console.log('close web socket')
    clearWSListeners()
    ws.close()
}

const closeHandler = () => {
    console.log('disconnect web socket')
    subscribers['status'].forEach(subscriber => {
        subscriber('pending')
    })
    interval = setInterval(openWebSocket, 10000)
}
const devClose = () => {
    ws.close()
}
const messageHandler = (e:MessageEvent) => {
    const newMessages = JSON.parse(e.data)
    subscribers['message'].forEach(subscriber => {
        subscriber(newMessages)
    })
}

// const onCloseHandler = () => {
//     console.log('close ws');
//         setModalIsOpen(true)
//     interval = setInterval(() => {
//         console.log('trying reconnect');
//         createWSChannel()
//     }, 3000)
// }

export const webSocket = {
    subscribe: (event:EventType, callback:CallbackMessageType | CallbackStatusType) => {
       // @ts-ignore
        subscribers[event].push(callback)
    },
    unSubscribe: (event:EventType, callback:CallbackMessageType | CallbackStatusType) => {
        subscribers[event] = []
    },
    open: () => {openWebSocket()},
    close: () => {closeWebSocket()},
    send: (message:string) => {ws.send(message)},
    devClose: () => {devClose()}
}

