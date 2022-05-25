import React from "react";
import './Header.css'
import {NavLink} from "react-router-dom";
import AuthorizedUser from "../Common/AuthorizedUser/AuthorizedUser";

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
                            ? <AuthorizedUser
                                id={props.authUserData.id}
                                login={props.authUserData.login}
                                logout={props.logout}
                                email={props.authUserData.email}
                            />
                            : <div className='sign-in'><NavLink to='/login'>Login</NavLink></div>
                    }
            </div>
        </header>
    )
}


export default Header;