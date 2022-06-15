import {setAuthUserDataTC} from "./authReducer";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED';

type initialStateType = {
    isInitialized: boolean
}

let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action : any):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state
    }
}

type setInitializedType = {
    type: typeof SET_INITIALIZED
}

export const setInitialized = () : setInitializedType => {
    return {
        type: SET_INITIALIZED
    }
}
type ThunkType = ThunkAction<Promise<void>, StateType, unknown, setInitializedType >
export const initialize = ():ThunkType => async (dispatch) => {
    await dispatch(setAuthUserDataTC());
    dispatch(setInitialized());

}

export default appReducer;


