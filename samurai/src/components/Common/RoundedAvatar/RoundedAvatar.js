import React from "react";
import userImage from "../../../assets/avatar.png";
import './RoundedAvatar.css'

const RoundedAvatar = (props) => {
    return (
        <div className="rounded-avatar">
            <img
                src={props.src || userImage}
                alt=""
            />
        </div>
    )
}
export default RoundedAvatar;