import {applyMiddleware, combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import toggleUserMenuReducer from "./headerReducer";
import thunk from "redux-thunk";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    nav: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
})


const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;//dev tool ))
export default store;