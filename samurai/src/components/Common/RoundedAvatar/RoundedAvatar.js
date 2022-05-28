import React from "react";
import userImage from "../../../assets/avatar.png";
import './RoundedAvatar.css'

const RoundedAvatar = ({src, className = ''}) => {
    return (
        <div className={"rounded-avatar "+ className}>
            <img
                src={src || userImage}
                alt=""
            />
        </div>
    )
}
export default RoundedAvatar;