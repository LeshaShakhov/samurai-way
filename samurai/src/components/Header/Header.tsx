import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";
import AuthorizedUser from "../Common/AuthorizedUser/AuthorizedUser";
import {PropsFromReduxTypes} from "./HeaderContainer";

const Header:React.FC<PropsFromReduxTypes> = (props) =>{
    return (
        <header className='header'>
            <div className="header-inner flex-between">
                <div className='logo'>
                    <span className='first-part flex-center-center'>in</span>
                    <span className='second-part'>WORK</span>
                </div>
                    {
                        props.isLogin
                            ? <AuthorizedUser/>
                            : <div className='sign-in'><NavLink to='/login'>Login</NavLink></div>
                    }
            </div>
        </header>
    )
}


export default Header;