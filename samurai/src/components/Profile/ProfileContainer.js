import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setProfileTC, updateUserStatus} from "../../redux/profileReducer";
import withRouter from "../../Utils/WithRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {



    componentDidMount() {
        let userId = this.props.router.params.userId || this.props.myId;
        if(userId){
            this.props.setProfileTC(userId);
            this.props.getUserStatus(userId);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.myId !== prevProps.myId){
            this.props.setProfileTC(this.props.myId);
            this.props.getUserStatus(this.props.myId);
        }
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        myId: state.auth.authUserData.id,
        isLogin: state.auth.isLogin,
        status: state.profile.status
    }
}


export default compose(
        withRouter,
        connect(mapStateToProps, {setProfileTC, getUserStatus, updateUserStatus})
)(ProfileContainer);