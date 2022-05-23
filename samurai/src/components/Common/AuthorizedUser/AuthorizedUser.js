import React from "react";
import RoundedAvatar from "../RoundedAvatar/RoundedAvatar";
import './AuthorizedUser.css'
import connect from "react-redux";

const AuthorizedUser = (props)=> {
    return (
        <div onClick={ props.onClick } className="auth flex-center-center">
            <RoundedAvatar/><div className='triangle down'/>
            {
                props.isOpen &&
                <div className="dropdown">
                    <p>Id: {props.id}</p>
                    <p>Login: {props.login}</p>
                    <p>Email: {props.email}</p>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {

    }
}

export default AuthorizedUser;