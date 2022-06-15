import {AuthMeDataResponseType, LoginDataResponseType} from "../../requestApi/requestUsersApi";
import {AuthData} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {ReferActionsType, StateType} from "./redux-store";
import {requestUsersApi} from "../../requestApi/requestUsersApi";
import {ResponseType} from "../../requestApi/api";

const initialState = {
    authUserData: {
        email: null as string | null,
        id: null as number | null,
        login: null as string | null,
    },
    isLogin: false,
    captchaUrl: undefined as string | undefined
}

export type InitialStateType = typeof initialState;
const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_AUTH_USER_DATA':
            return {...state, authUserData: {...action.payload}, isLogin: action.isLogin}
        case "ENABLE_CAPTCHA":
            return {...state, captchaUrl: action.url}
        case "DISABLE_CAPTCHA":
            return {...state, captchaUrl: undefined}
        default:
            return state
    }
}

export const authActions = {
    setAuthUserData: (email: string | null,id: number | null,login: string | null,isLogin: boolean) => ({
        type: 'SET_AUTH_USER_DATA',
        payload: {email, id, login},
        isLogin,
    } as const),
    enableCaptcha: (url:string) => ({
        type: "ENABLE_CAPTCHA",
        url
    } as const),
   disableCaptcha: () => ({
        type: "DISABLE_CAPTCHA",
    } as const)
};

type ActionsType = ReferActionsType<typeof authActions>
type ThunkType = ThunkAction<Promise<void | ResponseType<AuthMeDataResponseType | ResponseType<LoginDataResponseType>>> , StateType, unknown, ActionsType>

export const setAuthUserDataTC = ():ThunkType => async (dispatch) => {
    const data = await requestUsersApi.getAuthUserData();
    if (!data.resultCode) {
        const {email, id, login} = data.data
        dispatch(authActions.setAuthUserData(email, id, login, true));
    }
    return data;
}
type LoginThunkType = ThunkAction<Promise<ResponseType<LoginDataResponseType>> , StateType, unknown, ActionsType>

export const login = (data: AuthData):LoginThunkType => async (dispatch, getState) => {
    const response = await requestUsersApi.login(data);
    if (!response.resultCode) {
        await dispatch(setAuthUserDataTC());
        if(getState().auth.captchaUrl){
            dispatch(authActions.disableCaptcha());
        }
    }
    if(response.fieldsErrors?.length){
        await dispatch(getCaptchaUrl());
    }
    return response;
}
export const logout = ():ThunkType => async (dispatch) => {
    const response = await requestUsersApi.logout();
    if (!response.resultCode) {
        dispatch(authActions.setAuthUserData(null, null, null, false));
    }
}
export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const response = await requestUsersApi.getCaptchaUrl();
    dispatch(authActions.enableCaptcha(response.url));
}

export default authReducer;
