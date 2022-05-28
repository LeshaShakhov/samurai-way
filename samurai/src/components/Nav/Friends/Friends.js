import React from "react";
import "./Friends.css"
import RoundedAvatar from "../../Common/RoundedAvatar/RoundedAvatar";

const Friends = (props) => {
    const friends = props.friends;
    return (
        <div className="friends">
            {friends.map(friend => <RoundedAvatar className='friend' key={friend.userId} src={friend.userImage} />)}
        </div>
    )
}


export default Friends;