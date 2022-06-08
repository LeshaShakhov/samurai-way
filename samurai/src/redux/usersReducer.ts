import {changeObjectPropertyInArray} from "../Utils/changeObjectPropertyInArray";
import {UsersFilterType, UserType} from "./types/types";
import {ThunkAction} from "redux-thunk";
import {ReferActionsType, StateType} from "./redux-store";
import {Dispatch} from "redux";
import {requestUsersApi} from "../requestApi/requestUsersApi";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';
const SET_FILTER = 'SET_FILTER';



const initUsers = {
    users: [] as Array<UserType>,
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 10,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    filter: {term:'', onlyFollowed: null} as UsersFilterType
};

export type InitUsersType = typeof initUsers;

const usersReducer = (state = initUsers, action: ActionsType): InitUsersType => {
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
            return {...state, users: action.users}
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
        case "SET_FILTER":
            return {...state, filter: action.filter}
        default:
            return state
    }
}

export const usersActions = {
    follow: (id: number) => ({type: FOLLOW, id} as const),
    unFollow: (id: number) => ({type: UNFOLLOW, id} as const),
    setUsers: (users: Array<UserType>) => ({type: SET_USERS, users} as const),
    setCurrentPage: (page: number) => ({type: SET_CURRENT_PAGE, page} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT, totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: TOGGLE_IS_FETCHING, isFetching
    } as const),
    toggleFollowingProgress: (id: number, isFollowing: boolean) => ({
        type: TOGGLE_FOLLOWING_PROGRESS,
        id,
        isFollowing
    } as const),
    setFilter: (filter:UsersFilterType) => ({
        type: SET_FILTER,
        filter
    } as const),
}


type ActionsType = ReferActionsType<typeof usersActions>

type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionsType>

export const setUsersTC = (currentPage: number, usersPerPage: number, filter: UsersFilterType) : ThunkType => async (dispatch) => {
    dispatch(usersActions.toggleIsFetching(true));
    dispatch(usersActions.setFilter(filter));
    const data = await requestUsersApi.getUsers(currentPage, usersPerPage, filter);
    dispatch(usersActions.setUsers(data.items));
    dispatch(usersActions.setTotalUsersCount(data.totalCount));
    dispatch(usersActions.toggleIsFetching(false));
}


const _followUnfollow = async (dispatch: Dispatch<ActionsType>, request: Function, actionCreator: (id:number)=> ActionsType, id: number) => {
    dispatch(usersActions.toggleFollowingProgress(id, true));
    const data = await request(id);
    if (!data.resultCode) {
        dispatch(actionCreator(id));
    }
    dispatch(usersActions.toggleFollowingProgress(id, false));
}

export const followTC = (id: number) : ThunkType => async (dispatch) => {
    await _followUnfollow(dispatch, requestUsersApi.follow, usersActions.follow, id);
}

export const unFollowTC = (id: number) : ThunkType => async (dispatch) => {

    await _followUnfollow(dispatch, requestUsersApi.unFollow, usersActions.unFollow, id);
}

export default usersReducer;