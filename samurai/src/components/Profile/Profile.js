import React from "react";
import "./Profile.css";
import UserInfo from "./UserInfo/UserInfo";
import Posts from "./Posts/Posts";

const Profile = ({status, myId, updateUserStatus, setPhotoTC, isOwner, ...props}) => {
    return (
        <section>
            <UserInfo
                status={status}
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