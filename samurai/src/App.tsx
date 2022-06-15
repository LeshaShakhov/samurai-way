import {NavContainer} from "./components/Nav/Nav";
import './App.css';
import './Reset.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import React, {useEffect} from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {initialize} from "./redux/appSlice";
import Preloader from "./components/Common/Preloader/Preloader";
import withLazyLoading from "./Utils/withLazyLoading";
import {EditInfo} from "./components/EditInfo/EditInfo";
import {Navigate} from "react-router";
import {DispatchType, StateType} from "./redux/store";
import {Users} from "./components/Users/Users";
import {useDispatch, useSelector} from "react-redux";
import Messages from "./components/Messages/DialogMessages/Messages";

const DialogItems = React.lazy(() => import('./components/Messages/DialogItem/DialogItems'));
const ChatPage = React.lazy(() => import('./components/Chat/ChatPage'));

//TODO сделать ссылку на логин
export const App: React.FC<{}> = () => {
    const dispatch = useDispatch<DispatchType>();
    const isInitialized = useSelector((state: StateType) => state.app.isInitialized)
    const ChatPageWithLazy = withLazyLoading(ChatPage);
    const DialogItemsWithLazy = withLazyLoading(DialogItems);

    useEffect(() => {
        dispatch(initialize())
    }, [])

    if (!isInitialized) return <Preloader/>
    return (
        <div className="App">
            {/*TODO модалки для ошибок*/}
            {/*{this.props.error && <Modal setError={this.props.setError} error={this.props.error}/>}*/}
            <HeaderContainer/>
            <NavContainer/>
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to="/profile" replace/>}/>
                    <Route path={'/profile'} element={<Profile/>}>
                        <Route path={':userId'} element={<Profile/>}/>
                    </Route>

                    <Route
                        path='/messages'
                        element={<DialogItemsWithLazy/>}
                    />
                    <Route path={'/messages/:userId'} element={<Messages/>}/>
                    <Route path={'users'} element={
                        <Users/>
                    }
                    />
                    <Route path={'chat'} element={
                        <ChatPageWithLazy/>
                    }
                    />

                    <Route path='news' element={<News/>}/>

                    <Route path='edit' element={<EditInfo/>}/>

                    <Route path='login' element={<LoginPage/>}/>

                    <Route path='music' element={<Music/>}/>

                    <Route path='settings' element={<Settings/>}/>

                    <Route path="*" element={<div>Page Not Found</div>}/>
                </Routes>
            </div>
        </div>
    );
}

