import React from "react";
import LoginForm from "./LoginForm";
import {Navigate, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/store";

const LoginPage: React.FC<{}> = (props) => {
    const isLogin  = useSelector((state:StateType) => state.auth.isLogin)
    //TODO если пользователь пришел со страницы проекта то вернуться назад, если нет то редирект на профайл
    if (isLogin) {
        return <Navigate to='/profile'/>
    } else {
        return (
            <div className='login-page flex-center-center'>
                <div className='login '>
                    <div className="text-title text-center">Login</div>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default LoginPage;
