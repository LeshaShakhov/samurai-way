import React from "react";
import "./Profile.css";
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";
import {InitialStateType} from "../../redux/profileReducer";

type ProfileTypes = {
    myId:number|null
    updateUserStatus:(status:string)=>void
    setPhotoTC: (photo:File)=>void
    isOwner:boolean
    profile: InitialStateType
}
const Profile:React.FC<ProfileTypes> = ({myId, updateUserStatus, setPhotoTC, isOwner, ...props}) => {
    return (
        <section>
            <UserInfo
                status={props.profile.status}
                isOwner={isOwner}
                profile={props.profile.profile}
                updateUserStatus={updateUserStatus}
                setPhotoTC={setPhotoTC}
            />
            <Posts/>
        </section>
    )
}


export default Profile;