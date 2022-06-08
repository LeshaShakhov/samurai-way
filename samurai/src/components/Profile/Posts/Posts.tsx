import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import PostForm from "./PostForm";
import {connect, ConnectedProps} from "react-redux";
import {profileActions} from "../../../redux/profileReducer";
import {StateType} from "../../../redux/redux-store";

const Posts:React.FC<PropsFromReduxTypes> = ({userName, userImage, userPosts, addPost}) => {

    return (
        <section>
            <div className='posts-input app-block'>
                <div className='text-title'>
                    My Posts
                </div>
                <PostForm addPost={addPost}/>
            </div>
            {
                userPosts.map( post =>
                    <Post
                        key={post.id}
                        name={userName}
                        message={post.text}
                        likesCount={post.likes}
                    />
                )

            }
        </section>
    )
}

const mapStateToProps = (state:StateType) => {
    const {userName, userSurname, userImage, userPosts} = state.profile.user;
    return {
        userName: `${userName} ${userSurname}`,
        userImage: userImage,
        userPosts: userPosts,
    }
}

const connector = connect(mapStateToProps, {addPost :profileActions.addPost})
type PropsFromReduxTypes = ConnectedProps<typeof connector>
export default connector(Posts);
