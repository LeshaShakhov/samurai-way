import React, {useEffect} from "react";
import "./Profile.css";
import Profile from "./Profile";
import {connect, ConnectedProps} from "react-redux";
import {getUserStatus, setPhotoTC, setProfileTC, updateUserStatus} from "../../redux/profileReducer";
import {Navigate, useParams} from "react-router";
import isObjEmpty from "../../Utils/isObjEmpty";
import {StateType} from "../../redux/redux-store";


const ProfileContainer:React.FC<PropsFromReduxTypes> = (props) => {
    const preparePageData = (id:number):void =>{
        props.setProfileTC(id);
        props.getUserStatus(id);
    }
    const params = useParams();

        useEffect(() => {
        let userId = params.userId || props.myId;
        if(userId){
            preparePageData(+userId)
        }
    }, [params.userId, props.myId])

    if(isObjEmpty(params) && !props.myId) return <Navigate to='/login'/>
    return (
        <Profile {...props} isOwner= {!params.userId}/>
    )
}

const mapStateToProps = (state:StateType) => {
    return {
        profile: state.profile,
        myId: state.auth.authUserData.id,
        isLogin: state.auth.isLogin,
    }
}

const connector = connect(mapStateToProps, {setProfileTC, getUserStatus, updateUserStatus, setPhotoTC});

type PropsFromReduxTypes = ConnectedProps<typeof connector>
export default connector(ProfileContainer);