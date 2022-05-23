import React from "react";
import "./Post.css";
import RoundedAvatar from "../../../Common/RoundedAvatar/RoundedAvatar";

const Post = (props) => {
    const {name, userImage, message, likesCount} = props;
    return (
        <div className="post app-block">
            <div className='message flex'>
                <RoundedAvatar/>
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