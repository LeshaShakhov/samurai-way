import React from "react";
import "./Profile.css";
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    return (
        <section>
            <UserInfo profile={props.profile.profile}/>
            <PostsContainer/>
        </section>
    )
}


export default Profile;