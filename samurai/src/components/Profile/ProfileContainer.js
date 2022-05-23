import React from "react";
import "./Profile.css";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profileReducer";
import withRouter from "../../Utils/WithRouter";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.router.params.userId)
            .then( response => {this.props.setProfile(response.data)} )
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
    }
}


export default connect(mapStateToProps, {setProfile})(withRouter(ProfileContainer));