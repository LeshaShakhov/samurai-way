import {requestUsersApi} from "../requestApi/api";
import React from "react";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    authUserData: {
        email: null,
        id: null,
        login: null,
    },
    isLogin: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, authUserData: {...action.payload}, isLogin: action.isLogin}
        default:
            return state
    }

}

export const setAuthUserData = (email, id, login, isLogin) => ({
    type: SET_AUTH_USER_DATA,
    payload: {email, id, login},
    isLogin
})

export const setAuthUserDataTC = () => async (dispatch) => {
    const data = await requestUsersApi.getAuthUserData();
    if (!data.resultCode) {
        const {email, id, login} = data.data
        dispatch(setAuthUserData(email, id, login, true));
    }
    return data;
}

export const login = (data) => async (dispatch) => {
    const response = await requestUsersApi.login(data);
    if (!response.data.resultCode) {
        dispatch(setAuthUserDataTC());
    }
    return response;
}
export const logout = () => async (dispatch) => {
    const response = await requestUsersApi.logout();
    if (!response.data.resultCode) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;
