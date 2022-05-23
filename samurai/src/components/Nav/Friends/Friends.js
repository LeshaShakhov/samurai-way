import React from "react";
import "./Friends.css"

const Friends = (props) => {
    const friends = props.friends;
    return (
        <div className="friends">
            {friends.map(friend =>
                <div key={friend.userId} className="friend rounded-avatar">
                    <img src={friend.userImage} alt=""/>
                </div>
            )}
        </div>
    )
}


export default Friends;