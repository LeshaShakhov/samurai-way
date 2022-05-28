import React from "react";
import Header from "./Header";
import {connect} from "react-redux";

function HeaderContainer(props) {
    return <Header {...props}/>
}

const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin,
    }
}

export default connect(mapStateToProps, null)(HeaderContainer);