import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestUsersApi} from "../requestApi/requestUsersApi";
import {AuthData} from "./types/types";
import {getMyProfile} from "./profileSlice";


const initialState = {
    authUserData: {
        email: null as string | null,
        id: null as number | null,
        login: null as string | null,
    },
    isLogin: false,
    captchaUrl: undefined as string | undefined,
    error: null as null | string
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(setAuthUserData.fulfilled, (state, action) => {
                if (!action.payload.resultCode) {
                    return {...state, authUserData: action.payload.data, isLogin: true}
                }
            })
            .addCase(login.fulfilled, (state,action) => {
                const payload = action.payload;
                if(payload.resultCode === 1){
                    state.error = payload.messages[0]
                }
                if(payload.resultCode === 10){
                    state.error = payload.messages[0]
                }
                if(payload.resultCode === 0){
                    state.error = null
                    state.captchaUrl = undefined
                }
            })
            .addCase(logout.fulfilled, (state, action) => {
                if (!action.payload.resultCode) {
                    state.authUserData = {email: null, id: null, login: null}
                    state.isLogin = false
                }
            })
            .addCase(getCaptchaUrl.fulfilled, (state, action) => {
                state.captchaUrl = action.payload.url
            })

    }
})

export const setAuthUserData = createAsyncThunk(
    'auth/setAuthUserData',
    async (undefined, {dispatch}) => {
      const response = await requestUsersApi.getAuthUserData()
      dispatch(getMyProfile(response.data.id))
      return response
    }
)
export const login = createAsyncThunk(
    'auth/login',
    async (data: AuthData, {dispatch}) => {
        const responseLogin = requestUsersApi.login(data).then( response => {
            if (!response.resultCode){dispatch(setAuthUserData())}
            if(response.resultCode === 10){dispatch(getCaptchaUrl())}
            return response
        });
        return await responseLogin;
    }
)

export const getCaptchaUrl = createAsyncThunk(
    'auth/getCaptchaUrl',
    async () =>{
        return await requestUsersApi.getCaptchaUrl();
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async () =>{
        return await requestUsersApi.logout();
    }
)

export default authSlice.reducer