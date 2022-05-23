import React from "react";
import "./Profile.css";
import UserInfo from "./UserInfo/UserInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    const user = props.user;
    return (
        <section>
            <UserInfo user={user}/>
            <PostsContainer/>
        </section>
    )
}


export default Profile;