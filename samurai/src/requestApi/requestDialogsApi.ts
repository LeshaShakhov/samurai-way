import {instance, ResponseType} from "./api";
import {PhotoType} from "../redux/types/types";
import {MessageType} from "../components/Common/Message/Message";

export type DialogsType = {
    id: number,
    userName: string,
    hasNewMessages: boolean,
    lastDialogActivityDate: string,
    lastUserActivityDate: string,
    newMessagesCount: number,
    photos: PhotoType
}
export type DialogMessageTypeAPI = {
    id: string,
    body: string,
    addedAt: string,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}
type GetMessagesType = {
    items: DialogMessageTypeAPI[]
    totalCount: number
    error: string | null
}

export const requestDialogsApi = {
    getDialogs() {
        return instance.get<DialogsType[]>('dialogs').then(response => response.data)
    },
    getMessages(id:number) {
        return instance.get<GetMessagesType>(`dialogs/${id}/messages`).then(response => response.data)
    },
    sendMessage(id:number, body:string) {
        return instance.post(`dialogs/${id}/messages`, {body : body}).then(() => requestDialogsApi.getMessages(id))
    },
    startDialog(userId:number) {
        return instance.put(`dialogs/${userId}`, {}).then(() => requestDialogsApi.getMessages(userId))
    }
}