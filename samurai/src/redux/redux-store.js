import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import navReducer from "./navReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    nav: navReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
window.__store = store;//dev tool ))
export default store;