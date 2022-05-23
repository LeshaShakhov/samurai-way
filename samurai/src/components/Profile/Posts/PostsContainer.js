import React from "react";
import {
    addPost,
    changeTextAreaPost,
} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    const {userName, userSurname, userImage, userPosts} = state.profile.user;
    return {
        userName: `${userName} ${userSurname}`,
        userImage: userImage,
        newPostText: state.profile.newPostText,
        userPosts: userPosts,
    }
}

const PostsContainer = connect(mapStateToProps, {
    addPost,
    changeTextAreaPost,
})(Posts);

export default PostsContainer;