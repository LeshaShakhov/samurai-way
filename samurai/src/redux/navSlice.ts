import {UsersFilterType, UserType} from "./types/types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {requestUsersApi} from "../requestApi/requestUsersApi";

type initialState = {
    friends: Array<UserType>
}
const initialState = {
    friends: []
} as initialState

const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getFriends.fulfilled, (state, action) => {
                state.friends = action.payload.items
            })
    }
})

export const getFriends = createAsyncThunk(
    'nav/getFriends',
    async () => {
        const friendsFilter:UsersFilterType = {term:'', onlyFollowed:true}
        return await requestUsersApi.getUsers(1, 6, friendsFilter);
    }
)

export default navSlice.reducer