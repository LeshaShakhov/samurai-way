import React from "react";
import "./UserInfo.css";
import Preloader from "../../Common/Preloader/Preloader";
import Status from "./Status";
import BigAvatar from "../../Common/BigAvatar/BigAvatar";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import {StateType} from "../../../redux/store";

type UserInfoTypes = {
    isOwner: boolean
}
const UserInfo: React.FC<UserInfoTypes> = (props) => {
    const profile = useSelector((state: StateType) => state.profile.profile)
    const status = useSelector((state: StateType) => state.profile.status)
    if (!profile) {
        return <Preloader/>
    }
    return (<>
        <div className="user-info app-block">
            <div className='flex-column avatar-outer mr-15'>
                <BigAvatar photo={profile.photos.large} isOwner={props.isOwner}/>
                {props.isOwner && <Link className='btn-primary flex-center-center' to='/edit'>Edit Profile</Link>}
            </div>

            <div className="text flex-column">
                <div className='text-title'>
                    {profile.fullName}
                </div>
                <Status
                    status={status}
                    isOwner={props.isOwner}
                />
                <div className="details">
                    <div className="keys">
                        <div>Information:</div>
                        <div>Find work:</div>
                        <div>Skills:</div>
                    </div>
                    <div className="values">
                        <div>{profile.aboutMe || 'No information'}</div>
                        <div>{profile.lookingForAJob ? 'Yes' : 'No'}</div>
                        <div>{profile.lookingForAJobDescription || 'No information'}</div>
                    </div>

                </div>
                <SocialIcons contacts={profile.contacts}/>
            </div>
        </div>
    </>)
}

export default UserInfo;