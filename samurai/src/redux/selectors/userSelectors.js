export const getUsers = (state) => {
    return state.usersPage.users
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getUsersPerPage = (state) => {
    return state.usersPage.usersPerPage
}
export const getPaginationValue = (state) => {
    return state.usersPage.paginationValue
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}