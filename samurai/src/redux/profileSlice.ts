import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {PostType, ProfileType} from "./types/types";
import {requestProfileApi} from "../requestApi/requestProfileApi";

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
    myProfile: null  as ProfileType | null,
    status: '' as string,
    error: null as null|string,
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload
        },
        addPost: (state, action) => {
            state.user.userPosts.push({id : Math.max(0, ...state.user.userPosts.map(post => post.id)) + 1, text: action.payload, likes: 0})
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profile = action.payload
            })
            .addCase(getUserStatus.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(setPhoto.fulfilled, (state, action) => {
                if(!action.payload.resultCode && state.profile){
                    state.profile.photos = action.payload.data.photos;
                }
            })
            .addCase(updateUserStatus.fulfilled, (state, action) => {
                if(!action.payload.resultCode) {
                    state.status = action.meta.arg
                }
            })
            .addCase(updateProfile.fulfilled, (state, action) => {
                if(!action.payload.resultCode) {
                    state.profile = action.meta.arg
                }
            })
            .addCase(getMyProfile.fulfilled, (state, action) => {
                state.myProfile = action.payload
            })
    }
})

export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async (id:number|null) =>{
        return await requestProfileApi.getUserProfile(id);
    }
)
export const getMyProfile = createAsyncThunk(
    'profile/getMyProfile',
    async (id:number|null) =>{
        return await requestProfileApi.getUserProfile(id);
    }
)
export const getUserStatus = createAsyncThunk(
    'profile/getUserStatus',
    async (id:number) =>{
        return await requestProfileApi.getUserStatus(id)
    }
)
export const setPhoto = createAsyncThunk(
    'profile/setPhoto',
    async (photo:File) => {
        return await requestProfileApi.setPhoto(photo)
    }
)
export const updateUserStatus = createAsyncThunk(
    'profile/updateUserStatus',
    async (status:string) => {
        return await requestProfileApi.updateUserStatus(status)
    }
)
export const updateProfile = createAsyncThunk(
    'profile/updateProfile',
    async (profile:ProfileType) => {
        return await requestProfileApi.updateProfile(profile)
    }
)

export const {setError, addPost} = profileSlice.actions
export default profileSlice.reducer