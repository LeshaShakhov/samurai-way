import React from "react";
import {NavLink} from "react-router-dom";
import "./Nav.css"
import Friends from "./Friends/Friends";

const Nav = (props) => {
    const friends = props.friends;
    return(
        <aside className='sidebar'>
            <nav className='nav'>
                <ul>
                    <li><NavLink to="/"><span className='flex-center-center'>P</span>Profile</NavLink></li>
                    <li><NavLink to="messages"><span className='flex-center-center'>M</span>Messages</NavLink></li>
                    <li><NavLink to="users"><span className='flex-center-center'>F</span>Find users</NavLink></li>
                    <li><NavLink to="news"><span className='flex-center-center'>N</span>News</NavLink></li>
                    <li><NavLink to="music"><span className='flex-center-center'>M</span>Music</NavLink></li>
                    <li><NavLink to="settings"><span className='flex-center-center'>S</span>Settings</NavLink></li>
                </ul>
            </nav>

            <Friends friends = {friends} />
        </aside>
    )
}



export default Nav;