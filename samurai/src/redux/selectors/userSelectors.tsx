import {StateType} from "../redux-store";

export const getUsers = (state:StateType) => {
    return state.usersPage.users
}

export const getCurrentPage = (state:StateType) => {
    return state.usersPage.currentPage
}

export const getTotalUsersCount = (state:StateType) => {
    return state.usersPage.totalUsersCount
}
export const getUsersPerPage = (state:StateType) => {
    return state.usersPage.usersPerPage
}
export const getIsFetching = (state:StateType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state:StateType) => {
    return state.usersPage.followingInProgress
}
export const getUsersFilter = (state:StateType) => {
    return state.usersPage.filter
}