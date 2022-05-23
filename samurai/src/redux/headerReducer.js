const TOGGLE_USER_MENU = 'TOGGLE_USER_MENU';

let initialState = {
    isOpened: false,
}

const toggleUserMenuReducer = (state = initialState, action) => {
    switch (action.type){
        case TOGGLE_USER_MENU:
            debugger
            return {...state, isOpened: !state.isOpened}
        default:
            return state
    }

}

export const toggleUserMenu = () => ({type: TOGGLE_USER_MENU})

export default toggleUserMenuReducer;
