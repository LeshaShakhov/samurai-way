import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import PostForm from "./PostForm";
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/store";

export const Posts:React.FC<{}> = () => {
    const userPosts = useSelector((state:StateType) => state.profile.user.userPosts)
    const userName = useSelector((state:StateType) => state.profile.profile?.fullName)
    return (
        <>
            <div className='posts-input app-block'>
                <div className='text-title'>
                    My Posts
                </div>
                <PostForm/>
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
        </>
    )
}
