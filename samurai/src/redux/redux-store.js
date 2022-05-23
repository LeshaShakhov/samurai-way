import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import toggleUserMenuReducer from "./headerReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    nav: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    header: toggleUserMenuReducer
})


const store = createStore(reducers);
window.store = store;//dev tool ))
export default store;