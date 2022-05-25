import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        isLogin: state.auth.isLogin
    }
}

function withAuthRedirect(Component){
    function ComponentWithAuthRedirect(props){
        return props.isLogin ? <Component {...props}/> : <Navigate to="/login" replace />
    }

    return connect(mapStateToProps)(ComponentWithAuthRedirect);
}

export default withAuthRedirect;