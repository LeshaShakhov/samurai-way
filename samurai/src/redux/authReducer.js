import {requestUsersApi} from "../requestApi/api";
import {Navigate} from "react-router";
import React from "react";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    authUserData: {
        email: null,
        id: null,
        login: null ,
    },
    isLogin: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
            return {...state, authUserData: {...action.data}, isLogin: true}
        default:
            return state
    }

}

export const setAuthUserData = (email, id, login) => ({type: SET_AUTH_USER_DATA, data: {email, id, login}})

export const setAuthUserDataTC = () => (dispatch) =>{
    requestUsersApi.getAuthUserData()
        .then( data => {
            if(!data.resultCode){
                const {email, id, login} = data.data
                dispatch(setAuthUserData(email, id, login));
            }
        })
}

export const login = (data) => (dispatch) => {
    requestUsersApi.login(data).then(response => {
        if(!response.data.resultCode){
            dispatch(setAuthUserDataTC);
        }
    })
}
export const logout = () => (dispatch) => {
    requestUsersApi.logout().then(response => {
        if(!response.data.resultCode){

        }
    })
}

export default authReducer;
