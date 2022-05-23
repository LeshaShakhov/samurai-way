import React from "react";
import "./Post.css";

const Post = (props) => {
    const {name, userImage, message, likesCount} = props;
    return (
        <div className="post app-block">
            <div className='message flex'>
                <div className="rounded-avatar">
                    <img src={userImage} alt=""/>
                </div>
                <div className="inner">
                    <div className="name">
                        {name}
                    </div>
                    <div className="text">
                        {message}
                    </div>
                </div>
                <div className='likes'>
                    <div className='icon'>&#x2661;</div>
                    <div className='value'>{likesCount}</div>
                </div>
            </div>
        </div>
    )
}

export default Post;