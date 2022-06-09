import React, {useState} from "react";
import RoundedAvatar from "../RoundedAvatar/RoundedAvatar";
import './AuthorizedUser.css'
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../../redux/store";
import {logout} from "../../../redux/authSlice";



export const AuthorizedUser: React.FC<{}> = () => {

    const [isOpened, toggleIsOpened] = useState(false);
    const dispatch = useDispatch<DispatchType>();
    const {id, login, email} = useSelector((state:StateType) => state.auth.authUserData)

    const toggleDropDown = () => {
        toggleIsOpened(!isOpened);
    }
    const onClickHandler = () => dispatch(logout());
    //TODO Своя автарка у авторизованного юзера
    return (
        <div className="auth flex-center-center">
            <div  onClick={ toggleDropDown } className='flex-center-center'><RoundedAvatar/><div className='triangle down'/></div>
            {
                isOpened &&
                <div className="dropdown">
                    <p>Id: {id}</p>
                    <p>Login: {login}</p>
                    <p>Email: {email}</p>
                    <a className='logout' onClick={onClickHandler}>Logout</a>
                </div>
            }
        </div>
    )
}