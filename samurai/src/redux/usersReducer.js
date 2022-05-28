import {requestUsersApi} from "../requestApi/api";
import {changeObjectPropertyInArray} from "../Utils/changeObjectPropertyInArray";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 10,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: changeObjectPropertyInArray(state.users, {followed: true}, 'id', action.id),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: changeObjectPropertyInArray(state.users, {followed: false}, 'id', action.id),
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id !== action.id)
            }
        }
        default:
            return state
    }
}

export const follow = (id) => ({type: FOLLOW, id});
export const unFollow = (id) => ({type: UNFOLLOW, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (id, isFollowing) => ({type: TOGGLE_FOLLOWING_PROGRESS, id, isFollowing});

export const setUsersTC = (currentPage, usersPerPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await requestUsersApi.getUsers(currentPage, usersPerPage);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
}

const followUnfollow = async (dispatch, request, actionCreator, id) => {
    dispatch(toggleFollowingProgress(id, true));
    const data = await request(id);
    if (!data.resultCode) {
        dispatch(actionCreator(id));
    }
    dispatch(toggleFollowingProgress(id, false));
}

export const followTC = (id) => async (dispatch) => {
    await followUnfollow(dispatch, requestUsersApi.follow, follow, id);
}

export const unFollowTC = (id) => async (dispatch) => {

    await followUnfollow(dispatch, requestUsersApi.unFollow, unFollow, id);
}

export default usersReducer;