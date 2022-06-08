import React from "react";
import "./Friends.css"
import RoundedAvatar from "../../Common/RoundedAvatar/RoundedAvatar";
import { UserType} from "../../../redux/types/types";
import {NavLink} from "react-router-dom";

export type PropsTypes = {
    friends: Array<UserType>
}
const Friends: React.FC<PropsTypes> = (props) => {
    return (
        <div className="friends">
            {props.friends.map((friend) => <NavLink className='friend' key={friend.id} to={`/profile/${friend.id}`}><RoundedAvatar   src={friend.photos.small} /></NavLink>)}
        </div>
    )
}
export default Friends;