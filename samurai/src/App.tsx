import {NavContainer} from "./components/Nav/Nav";
import './App.css';
import './Reset.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Profile} from "./components/Profile/Profile";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {initialize} from "./redux/appSlice";
import {connect, ConnectedProps} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import withLazyLoading from "./Utils/withLazyLoading";
import {EditInfo} from "./components/EditInfo/EditInfo";
import {Navigate} from "react-router";
import Modal from "./components/Common/Modal/Modal";
import {StateType} from "./redux/store";
import {setError} from "./redux/profileSlice";
import Messages from "./components/Messages/Messages";
import {Users} from "./components/Users/Users";
React.lazy(() => import('./components/Messages/Messages'));

//TODO задействовать больше селеторов
class App extends React.Component<PropsFromReduxType> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if(!this.props.isInitialized) return <Preloader/>
        const MessagesContainerWithLazy = withLazyLoading(Messages);
        return (
            <div className="App">
                {this.props.error && <Modal setError={this.props.setError} error={this.props.error}/>}
                <HeaderContainer/>
                <NavContainer/>
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Navigate to="/profile" replace />} />
                        <Route path={'/profile'} element={<Profile/>}>
                            <Route path={':userId'} element={<Profile/>}/>
                        </Route>

                        <Route
                            path='/messages/*'
                            element={ <MessagesContainerWithLazy/> }
                        />
                        <Route path={'users'} element={
                            <Users/>
                        }
                        />

                        <Route path='news' element={<News/>}/>

                        <Route path='edit' element={<EditInfo/>}/>

                        <Route path='login' element={<LoginPage/>}/>

                        <Route path='music' element={<Music/>}/>

                        <Route path='settings' element={<Settings/>}/>

                        <Route path="*" element={<div>Page Not Found</div>} />
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state:StateType) => {
    return{
        isInitialized: state.app.isInitialized,
        error: state.profile.error,
        users: state.message.users
    }
}

const connector = connect(mapStateToProps, {initialize, setError})
type PropsFromReduxType = ConnectedProps<typeof connector>

export default connector(App);
