import React from "react";
import "./Posts.css";
import Post from "./Post/Post";
import {changeTextAreaPost} from "../../../redux/profileReducer";

const Posts = (props) => {
    const {userName, userImage, userPosts, addPost, changeTextAreaPost, newPostText} = props;

    let onAddPost = e => {
        addPost();
        e.preventDefault();
    }
    let onChangeTextArea = e => {
        changeTextAreaPost(e.target.value)
    }

    return (
        <section>
            <div className='posts-input app-block'>
                <div className='text-title'>
                    My Posts
                </div>
                <form className='form' onSubmit={(e)=>onAddPost(e)}>
                    <textarea
                        className='input'
                        placeholder="Your news..."
                        value={newPostText}
                        onChange={(e) => onChangeTextArea(e)}
                    />
                    <input
                        className='btn-primary'
                        value='Send'
                        type="submit"
                    />
                </form>
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

export default Posts;