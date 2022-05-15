import React, {Component} from "react";

const Nav = () =>
    <nav className='nav'>
        <ul>
            <li><a href="#"><span className='flex-center-center'>P</span>Profile</a></li>
            <li><a href="#"><span className='flex-center-center'>M</span>Messages</a></li>
            <li><a href="#"><span className='flex-center-center'>N</span>News</a></li>
            <li><a href="#"><span className='flex-center-center'>M</span>Music</a></li>
            <li><a href="#"><span className='flex-center-center'>S</span>Settings</a></li>
        </ul>
    </nav>

export default Nav;