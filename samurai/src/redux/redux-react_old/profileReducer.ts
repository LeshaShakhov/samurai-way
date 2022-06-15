import {ResponseType} from "../../requestApi/api";
import {PhotoType, PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {ReferActionsType, StateType} from "./redux-store";
import {requestProfileApi} from "../../requestApi/requestProfileApi";

const ADD_POST = 'ADD-POST';
const SET_PROFILE = 'SET_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const SET_PHOTO = 'SET_PHOTO';
const SET_ERROR = 'SET_ERROR';

const initialState = {
    user: {
        userId: 1,
        userName: 'Maxim',
        userSurname: 'Petrov',
        userImage: 'http://www.yorki-penza.ru/img/djey/djey_01.jpg',
        userPosts: [
            {id: 1, text: 'Hello, how are you?', likes: 3},
            {id: 2, text: 'I am learn react.', likes: 5},
            {id: 3, text: 'I have very nice day!', likes: 10}
        ] as Array<PostType>,
    },
    profile: null as ProfileType | null,
    status: '' as string,
    error: null as null|string,
}
export type InitialStateType = typeof initialState

let profileReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                user: {
                    ...state.user,
                    userPosts:
                        [
                            ...state.user.userPosts,
                            {id: ++state.user.userPosts.length, text: action.post, likes: 0}
                        ]
                },
            };
        }
        case SET_PROFILE: {
            return {...state, profile: action.profile};
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status};
        }
        case SET_PHOTO: {
            return {...state, profile: {...state.profile, photos: action.photos} as ProfileType};
        }
        case SET_ERROR: {
            return {...state, error: action.error}
        }
        default:
            return state
    }

}

export const profileActions = {
    addPost: (post:string) => ({type: ADD_POST, post} as const),
    setUserStatus: (status:string) => ({type: SET_USER_STATUS, status} as const),
    setProfile: (profile:ProfileType) => ({type: SET_PROFILE, profile} as const),
    setPhoto: (photos:PhotoType) => ({type: SET_PHOTO, photos} as const),
    setError: (error : null|string) => ({type: SET_ERROR, error} as const),
}


type ActionsType = ReferActionsType<typeof profileActions>
type ThunkType = ThunkAction<Promise<ResponseType | void>, StateType, unknown, ActionsType>

export const setProfileTC = (id:number|null):ThunkType => async (dispatch) => {
    const response = await requestProfileApi.getUserProfile(id);
    dispatch(profileActions.setProfile(response));
}
export const getUserStatus = (id:number):ThunkType => async (dispatch) => {
    const response = await requestProfileApi.getUserStatus(id);
    dispatch(profileActions.setUserStatus(response));
}
export const setPhotoTC = (photo:File):ThunkType => async (dispatch) => {
    const response = await requestProfileApi.setPhoto(photo);
    !response.resultCode && dispatch(profileActions.setPhoto(response.data.photos));
}
export const updateUserStatus = (status:string):ThunkType => async (dispatch) => {
    try {
        const response = await requestProfileApi.updateUserStatus(status);
        !response.resultCode && dispatch(profileActions.setUserStatus(status));
        return response
    } catch (e:any) {
        dispatch(profileActions.setError(e.message));

    }
}
type UpdateProfileThunkType = ThunkAction<Promise<ResponseType>, StateType, unknown, ActionsType>
export const updateProfileTC = (profile:ProfileType):UpdateProfileThunkType => async (dispatch) => {
    const response = await requestProfileApi.updateProfile(profile)
    !response.resultCode && dispatch(profileActions.setProfile(profile));
    return response
}

export default profileReducer;