import React from "react";
import userImage from "../../../assets/avatar.png";
import './RoundedAvatar.css'
type PropsTypes = {
    src?: string|null,
    className?: string
}
const RoundedAvatar: React.FC<PropsTypes> = ({src, className = ''}) => {
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