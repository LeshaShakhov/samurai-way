import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import appReducer from "./appSlice";
import authReducer from "./authSlice";
import profileReducer from "./profileSlice";
import userReducer from "./userSlice";
import chatReducer from "./chatSlice";
import dialogsSlice from "./dialogsSlice";

export const store = configureStore({
    reducer:{
        nav: navReducer,
        app: appReducer,
        auth: authReducer,
        profile: profileReducer,
        user: userReducer,
        chatSlice: chatReducer,
        dialogs: dialogsSlice
    }
})

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
