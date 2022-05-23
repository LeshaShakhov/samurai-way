import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {toggleUserMenu} from "../../redux/headerReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(' https://social-network.samuraijs.com/api/1.0//auth/me', { withCredentials: true })
            .then( response => {
                if(!response.data.resultCode){
                    const {email, id, login} = response.data.data
                    this.props.setAuthUserData(email, id, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.auth.authUserData,
        isLogin: state.auth.isLogin,
        isOpened: state.header.isOpened,
    }
}

export default connect(mapStateToProps, {setAuthUserData, toggleUserMenu})(HeaderContainer);