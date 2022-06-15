import React from "react";
import Header from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {StateType} from "../../redux/redux-react_old/redux-store";

const HeaderContainer:React.FC<PropsFromReduxTypes> = (props)=>{
    return <Header {...props}/>
}

const mapStateToProps = (state:StateType) => {
    return {
        isLogin: state.auth.isLogin,
    }
}
const connector = connect(mapStateToProps, {});
export type PropsFromReduxTypes = ConnectedProps<typeof connector>

export default connector(HeaderContainer);