import React from "react";
import "./Profile.css";
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <section>
            <UserInfo
                status={props.status}
                myId={props.myId}
                profile={props.profile.profile}
                updateUserStatus={props.updateUserStatus}
            />
            <PostsContainer/>
        </section>
    )
}


export default Profile;