import React from "react";
import LoginForm from "./LoginForm";
import { useNavigate} from "react-router";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

const LoginPage = (props) => {
    const navigate = useNavigate();
    if (props.isLogin) {
        navigate(-1);
    } else {
        return (
            <div className='login-page flex-center-center'>
                <div className='login '>
                    <div className="text-title text-center">Login</div>
                    <LoginForm login={props.login}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default connect(mapStateToProps, {login})(LoginPage);
