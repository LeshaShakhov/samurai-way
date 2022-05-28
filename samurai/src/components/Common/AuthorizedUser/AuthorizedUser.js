import React, {useState} from "react";
import RoundedAvatar from "../RoundedAvatar/RoundedAvatar";
import './AuthorizedUser.css'
import {connect} from "react-redux";
import {logout} from "../../../redux/authReducer";


const AuthorizedUser = ({id, login, email, ...props}) => {

    const [isOpened, toggleIsOpened] = useState(false);

    const toggleDropDown = () => {
        toggleIsOpened(!isOpened);
    }
    return (
        <div className="auth flex-center-center">
            <div  onClick={ toggleDropDown } className='flex-center-center'><RoundedAvatar/><div className='triangle down'/></div>
            {
                isOpened &&
                <div className="dropdown">
                    <p>Id: {id}</p>
                    <p>Login: {login}</p>
                    <p>Email: {email}</p>
                    <a className='logout' onClick={props.logout}>Logout</a>
                </div>
            }
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        id:state.auth.authUserData.id,
        login:state.auth.authUserData.login,
        email:state.auth.authUserData.email,
    }
}

export default connect(mapStateToProps,{logout})(AuthorizedUser);