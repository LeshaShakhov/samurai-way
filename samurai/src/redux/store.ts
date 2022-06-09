import {configureStore} from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import appReducer from "./appSlice";
import authReducer from "./authSlice";
import messageReducer from "./messageSlice";
import profileReducer from "./profileSlice";
import userReducer from "./userSlice";

export const store = configureStore({
    reducer:{
        nav: navReducer,
        app: appReducer,
        auth: authReducer,
        message: messageReducer,
        profile: profileReducer,
        user: userReducer,
    }
})

export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch
