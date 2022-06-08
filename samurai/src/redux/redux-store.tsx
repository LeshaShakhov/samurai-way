import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import navReducer from "./navReducer";

const reducers = combineReducers({
    profile: profileReducer,
    messages: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    nav: navReducer,
})

export type StateType = ReturnType<typeof reducers>;

export type ReferActionsType<T extends {[key: string]: (...args: any[])=> any}> = ReturnType<T extends {[key: string]: infer R} ? R : never>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// @ts-ignore
window.__store = store;//dev tool ))
export default store;