const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const DECREASE_PAGINATION_VALUE = 'DECREASE_PAGINATION_VALUE';
const INCREASE_PAGINATION_VALUE = 'INCREASE_PAGINATION_VALUE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


const initialState = {
    users: [],
    currentPage: 1,
    totalUsersCount: 0,
    usersPerPage: 5,
    paginationValue: 0,
    isFetching: false,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                users: [...state.users].map(user =>{

                    return (user.userId === action.userId)
                            ? {...user, follow: true}
                            : user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users].map(user => {
                    return (user.userId === action.userId)
                            ? {...user, follow: false}
                            : user
                })
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
        case INCREASE_PAGINATION_VALUE: {
            let increasedPaginationValue = ++state.paginationValue;
            return {...state, paginationValue: increasedPaginationValue}
        }
        case DECREASE_PAGINATION_VALUE:{
            let decreasedPaginationValue = state.paginationValue > 0 ? --state.paginationValue : 0;
            return {...state, paginationValue: decreasedPaginationValue}
        }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const decreasePaginationValue = () => ({type: DECREASE_PAGINATION_VALUE});
export const increasePaginationValue = () => ({type: INCREASE_PAGINATION_VALUE});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});


export default usersReducer;