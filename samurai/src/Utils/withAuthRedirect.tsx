import React from "react";
import {Navigate} from "react-router";
import {connect, ConnectedProps} from "react-redux";
import {StateType} from "../redux/redux-react_old/redux-store";

//TODO передлать на ХУКИ
const mapStateToProps = (state:StateType) => {
    return {
        isLogin: state.auth.isLogin
    }
}

function withAuthRedirect(Component:React.ComponentType){
    function ComponentWithAuthRedirect(props:PropsFromRedux){
        const {isLogin, ...rest} = props;
        return props.isLogin ? <Component { ...rest}/> : <Navigate to="/login"/>
    }
    const connector = connect(mapStateToProps, {})
    type PropsFromRedux = ConnectedProps<typeof connector>

    return connector(ComponentWithAuthRedirect);
}

export default withAuthRedirect;