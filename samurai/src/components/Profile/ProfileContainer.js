import React, {useEffect} from "react";
import "./Profile.css";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, setPhotoTC, setProfileTC, updateUserStatus} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router";
import isObjEmpty from "../../Utils/isObjEmpty";


const ProfileContainer = (props) => {


    const preparePageData = (id) =>{
        props.setProfileTC(id);
        props.getUserStatus(id);
    }
    const params = useParams();

        useEffect(() => {
        let userId = params.userId || props.myId;
        if(userId){
            preparePageData(userId)
        }
    }, [params.userId, props.myId])

    if(isObjEmpty(params) && !props.myId) return <Navigate to='/login'/>
    return (
        <Profile {...props} isOwner= {!params.userId}/>
    )
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile,
        myId: state.auth.authUserData.id,
        isLogin: state.auth.isLogin,
        status: state.profile.status
    }
}


export default connect(mapStateToProps, {setProfileTC, getUserStatus, updateUserStatus, setPhotoTC})(ProfileContainer);