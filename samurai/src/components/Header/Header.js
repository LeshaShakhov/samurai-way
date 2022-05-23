import React from "react";
import './Header.css'
import userImage from '../../assets/avatar.png'
import RoundedAvatar from "../Common/RoundedAvatar/RoundedAvatar";
import {NavLink} from "react-router-dom";
import AuthorizedUser from "../Common/AuthorizedUser/AuthorizedUser";
import {toggleUserMenu} from "../../redux/headerReducer";

const Header = (props) =>{
    return (
        <header className='header'>
            <div className="header-inner flex-between">
                <div className='logo'>
                    <span className='first-part flex-center-center'>in</span>
                    <span className='second-part'>WORK</span>
                </div>
                    {
                        props.isLogin
                            ? <AuthorizedUser onClick={toggleUserMenu} isOpen={props.isOpened} id={props.authUserData.id} login={props.authUserData.login} email={props.authUserData.email}/>
                            : <div className='sign-in'><NavLink to='/login'>Login</NavLink></div>
                    }
            </div>
        </header>
    )
}


export default Header;