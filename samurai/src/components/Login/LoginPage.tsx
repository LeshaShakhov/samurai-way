import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate} from "react-router";
import {connect, ConnectedProps} from "react-redux";
import {login} from "../../redux/authReducer";
import {StateType} from "../../redux/redux-store";

const LoginPage: React.FC<PropsFromReducerType> = (props) => {
    const navigate = useNavigate();
    if (props.isLogin) {
        navigate(-1 );

        return null
    } else {
        return (
            <div className='login-page flex-center-center'>
                <div className='login '>
                    <div className="text-title text-center">Login</div>
                    <LoginForm captchaUrl={props.captchaUrl} login={props.login}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:StateType) => {
    return {
        isLogin: state.auth.isLogin,
        captchaUrl: state.auth.captchaUrl
    }
}
const connector = connect(mapStateToProps, {login})
type PropsFromReducerType = ConnectedProps<typeof connector>

export default connector(LoginPage);
