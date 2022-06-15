import {UsersFilterType, UserType} from "../types/types";
import {ReferActionsType, StateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";
import {requestUsersApi} from "../../requestApi/requestUsersApi";

const initialState = {
    friends: [] as Array<UserType>
}

let navReducer = (state = initialState, action:ActionsType) => {
    switch (action.type) {
        case "SET_FRIENDS":
            return {...state, friends: action.payload}
        default:
            return state
    }
}

export const navActions = {
    setFriends: (payload: Array<UserType>) => ({
        type: 'SET_FRIENDS',
        payload
    })
}

type ActionsType = ReferActionsType<typeof navActions>
type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionsType>

export const getFriends = ():ThunkType => async (dispatch) =>{
    const friensFilter:UsersFilterType = {term:'', onlyFollowed:true}
    const data = await requestUsersApi.getUsers(1, 6, friensFilter);
    dispatch(navActions.setFriends(data.items));
}



export default navReducer;