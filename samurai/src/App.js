import Nav from "./components/Nav/Nav";
import './App.css';
import './Reset.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
    const friends = props.state.messages.users.slice(0, 3);
    return (
        <div className="App">
            <HeaderContainer/>
            <Nav friends={friends}/>
            <div className='content'>
                <Routes>
                    <Route path='/profile/:userId' element={
                            <ProfileContainer/>
                        }
                    />

                    <Route path='/messages/*' element={
                        <MessagesContainer/>
                    }
                    />

                    <Route path='/users' element={
                        <UsersContainer/>
                    }
                    />

                    <Route path='/news' element={<News/>}/>

                    <Route path='/music' element={<Music/>}/>

                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
