import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import PostForm from "./PostForm";
import {connect} from "react-redux";
import {addPost} from "../../../redux/profileReducer";

const Posts = ({userName, userImage, userPosts, addPost}) => {

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
                        userImage={userImage}
                        message={post.text}
                        likesCount={post.likes}
                    />
                )

            }
        </section>
    )
}

const mapStateToProps = (state) => {
    const {userName, userSurname, userImage, userPosts} = state.profile.user;
    return {
        userName: `${userName} ${userSurname}`,
        userImage: userImage,
        userPosts: userPosts,
    }
}


export default connect(mapStateToProps, {
    addPost,
})(Posts);
