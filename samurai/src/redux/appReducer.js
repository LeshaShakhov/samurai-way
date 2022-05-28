import {setAuthUserDataTC} from "./authReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    isInitialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}

export const setInitialized = () => {
    return {
        type: SET_INITIALIZED
    }
}

export const initialize = () => async (dispatch) => {
    await dispatch(setAuthUserDataTC());
    dispatch(setInitialized());

}

export default appReducer;


