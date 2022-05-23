import {combineReducers, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    nav: navReducer,
    usersPage: usersReducer
})


const store = createStore(reducers);

export default store;