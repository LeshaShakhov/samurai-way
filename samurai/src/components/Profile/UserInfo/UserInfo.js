import React, {useEffect, useState} from "react";
import "./UserInfo.css";
import Preloader from "../../Common/Preloader/Preloader";
import Status from "./Status";
import BigAvatar from "../../Common/BigAvatar/BigAvatar";
import SocialIcons from "../../Common/SocialIcons/SocialIcons";
import {Link} from "react-router-dom"




const UserInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<section>

        <div className="user-info app-block">
            <div className='flex-column avatar-outer mr-15'>
                <BigAvatar setPhotoTC={props.setPhotoTC} photo={props.profile.photos.large} isOwner={props.isOwner}/>
                {props.isOwner && <Link  className='btn-primary flex-center-center' to='/edit'>Edit Profile</Link>}
            </div>

            <div className="text flex-column">
                <div className='text-title'>
                    {props.profile.fullName}
                </div>
                <Status
                    updateUserStatus={props.updateUserStatus}
                    status={props.status}
                    isOwner={props.isOwner}
                />
                <div className="details">
                    <div className="keys">
                        <div>Information:</div>
                        <div>Find work:</div>
                        <div>Skills:</div>
                    </div>
                    <div className="values">
                        <div>{props.profile.aboutMe || 'No information'}</div>
                        <div>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                        <div>{props.profile.lookingForAJobDescription || 'No information'}</div>
                    </div>

                </div>
                <SocialIcons contacts={props.profile.contacts} />
            </div>
        </div>
    </section>)
}

export default UserInfo;