import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
    return(
        <div className='login-page flex-center-center'>
            <div className='login '>
                <div className="text-title text-center">Login</div>
                <LoginForm/>
            </div>
        </div>
    )
}
export default LoginPage;