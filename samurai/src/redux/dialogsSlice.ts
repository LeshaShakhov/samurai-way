import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {DialogsType, requestDialogsApi} from "../requestApi/requestDialogsApi";

export type DialogMessageType = {
    id: string,
    body: string,
    addedAt: string,
    senderId: number,
    senderName: string,
    recipientId: number,
    viewed: boolean
}
const initialState = {
    dialogs: [] as Array<DialogsType>,
    messages: [] as Array<DialogMessageType>,
    currentDialog: null as null | {id: number, photos: string, userName: string}
};

const dialogsSlice = createSlice({
    name: 'dialogs',
    initialState,
    reducers: {
        setCurrentDialog(state, action){
            state.currentDialog = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getDialogs.fulfilled, (state, action) => {
                state.dialogs = action.payload
            })
            .addCase(getMessages.fulfilled, (state, action) => {
                state.messages = action.payload.items
            })
            .addCase(sendMessage.fulfilled, (state, action) => {
                state.messages = action.payload.items
            })
            .addCase(startDialog.fulfilled, (state, action) => {
                state.messages = action.payload.items
            })

    }
})

export const getDialogs = createAsyncThunk(
    'dialogs/getDialogs',
    async () => {
        return await requestDialogsApi.getDialogs();
    }
)
export const getMessages = createAsyncThunk(
    'dialogs/getMessages',
    async (id: number) => {
        return await requestDialogsApi.getMessages(id);
    }
)
export const sendMessage = createAsyncThunk(
    'dialogs/sendMessage',
    async (data:{id:number, body:string}) => {
        return await requestDialogsApi.sendMessage(data.id, data.body)
    }
)
export const startDialog = createAsyncThunk(
    'dialogs/startDialog',
    async (userId: number) => {
        return await requestDialogsApi.startDialog(userId);
    }
)

export const {setCurrentDialog} = dialogsSlice.actions
export default dialogsSlice.reducer