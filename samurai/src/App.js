import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import './App.css';
import './Reset.css';
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
    const friends = props.state.messages.users.slice(0, 3);
    const user = props.state.profile.user;
    return (
        <div className="App">
            <Header/>
            <Nav friends={friends}/>
            <div className='content'>
                <Routes>
                    <Route path='/' element={
                            <Profile user={user}/>
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
