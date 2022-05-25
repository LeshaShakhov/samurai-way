import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, setAuthUserDataTC} from "../../redux/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthUserDataTC();
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        authUserData: state.auth.authUserData,
        isLogin: state.auth.isLogin,
    }
}

export default connect(mapStateToProps, {setAuthUserDataTC, logout})(HeaderContainer);