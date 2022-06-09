import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {UsersFilterType, UserType} from "./types/types";
import {requestUsersApi} from "../requestApi/requestUsersApi";
import {changeObjectPropertyInArray} from "../Utils/changeObjectPropertyInArray";

const initialState = {
    users: [] as Array<UserType>,
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 6,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {term:'', onlyFollowed: null} as UsersFilterType
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.isFetching = true
                state.filter = action.meta.arg.filter
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload.items
                state.totalUsersCount = action.payload.totalCount
                state.isFetching = false
            })
            .addCase(follow.pending, (state, action) => {
                state.followingInProgress.push(action.meta.arg)
            })
            .addCase(follow.fulfilled, (state, action) => {
                if (!action.payload.resultCode) {
                    state.users = changeObjectPropertyInArray(state.users, {followed: true}, 'id', action.meta.arg)
                }
                state.followingInProgress = state.followingInProgress.filter(id => id !== action.meta.arg)
            })
            .addCase(unFollow.pending, (state, action) => {
                state.followingInProgress.push(action.meta.arg)
            })
            .addCase(unFollow.fulfilled, (state, action) => {
                if (!action.payload.resultCode) {
                    state.users = changeObjectPropertyInArray(state.users, {followed: false}, 'id', action.meta.arg)
                }
                state.followingInProgress = state.followingInProgress.filter(id => id !== action.meta.arg)
            })
    }
})

export const getUsers = createAsyncThunk (
    'user/getUsers',
    async (data: {currentPage: number, usersPerPage: number, filter: UsersFilterType}) => {
        return await requestUsersApi.getUsers(data.currentPage, data.usersPerPage, data.filter);
    }
)
export const follow = createAsyncThunk(
    'user/follow',
    async (id: number) => {
       return await requestUsersApi.follow(id)
    }
)
export const unFollow = createAsyncThunk(
    'user/unFollow',
    async (id: number) => {
        return await requestUsersApi.unFollow(id)
    }
)
export const {setCurrentPage} = userSlice.actions
export default userSlice.reducer