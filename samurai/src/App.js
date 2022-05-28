import Nav from "./components/Nav/Nav";
import './App.css';
import './Reset.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginPage";
import {initialize} from "./redux/appReducer";
import {connect} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import withLazyLoading from "./Utils/withLazyLoading";
import EditInfo from "./components/EditInfo/EditInfo";

const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        const friends = this.props.state.messages.users.slice(0, 3);
        if(!this.props.isInitialized) return <Preloader/>
        const MessagesContainerWithLazy = withLazyLoading(MessagesContainer);

        return (
            <div className="App">
                <HeaderContainer/>
                <Nav friends={friends}/>
                <div className='content'>
                    <Routes>
                        <Route path={'/profile'} element={<ProfileContainer/>}>
                            <Route path={':userId'} element={<ProfileContainer/>}/>
                        </Route>

                        <Route
                            path='/messages/*'
                            element={ <MessagesContainerWithLazy/> }
                        />
                        <Route path='/users' element={
                            <UsersContainer/>
                        }
                        />

                        <Route path='/news' element={<News/>}/>

                        <Route path='/edit' element={<EditInfo/>}/>

                        <Route path='/login' element={<LoginPage/>}/>

                        <Route path='/music' element={<Music/>}/>

                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        isInitialized: state.app.isInitialized,
    }
}

export default connect(mapStateToProps, {initialize})(App);
