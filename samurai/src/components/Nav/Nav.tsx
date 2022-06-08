import React, {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import "./Nav.css"
import Friends from "./Friends/Friends";
import {StateType} from "../../redux/redux-store";
import {connect, ConnectedProps} from "react-redux";
import {getFriends} from "../../redux/navReducer";
import {useLocation} from "react-router";


const Nav: React.FC<PropsFromRedux> = (props) => {
    useEffect(()=>{
        props.getFriends()
    },[])
    const location = useLocation();
    return(
        <aside className='sidebar'>
            <nav className='nav'>
                <ul>
                    <li><Link className={location.pathname === '/profile'? 'active' : ''} to="profile"><span className='flex-center-center'>P</span>Profile</Link></li>
                    <li><NavLink to="messages"><span className='flex-center-center'>M</span>Messages</NavLink></li>
                    <li><NavLink to="users"><span className='flex-center-center'>F</span>Users</NavLink></li>
                    <li><NavLink to="news"><span className='flex-center-center'>N</span>News</NavLink></li>
                    <li><NavLink to="music"><span className='flex-center-center'>M</span>Music</NavLink></li>
                    <li><NavLink to="settings"><span className='flex-center-center'>S</span>Settings</NavLink></li>
                </ul>
            </nav>

            <Friends friends = {props.friends} />
        </aside>
    )
}
const mapStateToProps = (state:StateType) => ({
    friends: state.nav.friends
})

const connector = connect(mapStateToProps, {getFriends});

type PropsFromRedux = ConnectedProps<typeof connector>
export const NavContainer = connector(Nav);
