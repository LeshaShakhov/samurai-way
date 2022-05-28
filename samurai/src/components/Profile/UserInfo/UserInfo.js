import React, {useEffect, useState} from "react";
import "./UserInfo.css";
import Preloader from "../../Common/Preloader/Preloader";
import avatar from "../../../assets/avatar.png";
import facebook from "../../../assets/social_icons/facebook.png";
import github from "../../../assets/social_icons/github.png";
import instagram from "../../../assets/social_icons/instagram.png";
import twitter from "../../../assets/social_icons/twitter.png";
import vkontakte from "../../../assets/social_icons/vkontakte.png";
import youtube from "../../../assets/social_icons/youtube.png";
import Status from "./Status";

const UserInfo = (props) => {
    const [isPhotoFetching, setIsPhotoFetching] = useState(false);


    const onChangePhotoHandler = async (e) => {
        setIsPhotoFetching(true);
        e.target.files.length && await props.setPhotoTC(e.target.files[0]);
    }


    if (!props.profile) {
        return <Preloader/>
    }
    return (<section>
        <div className="user-info app-block">
            <div className="avatar">
                <img className='avatar' onLoad={()=> {setIsPhotoFetching(false);}} src={props.profile.photos.large ? props.profile.photos.large : avatar} alt=""/>
                {isPhotoFetching && <Preloader/>}
                {
                    props.isOwner && !isPhotoFetching &&
                        <>
                            <label className='label-file-input flex-center-center' htmlFor="file-input">Choose photo-file</label>
                            <input onChange={(e) => {onChangePhotoHandler(e)}} id='file-input' type="file"/>
                        </>
                }
            </div>

            <div className="text flex-column">
                <div className='text-title'>
                    {props.profile.fullName}
                </div>
                <Status
                    updateUserStatus={props.updateUserStatus}
                    status={props.status}
                />
                <div className="details">
                    <div className="keys">
                        <div>Information:</div>
                        <div>Find work:</div>
                        <div>Skills:</div>
                        <div>Webcite:</div>
                    </div>
                    <div className="values">
                        <div>{props.profile.aboutMe || 'No information'}</div>
                        <div>{props.profile.lookingForAJob ? 'Yes' : 'No'}</div>
                        <div>{props.profile.lookingForAJobDescription || 'No information'}</div>
                        <div>{props.profile.contacts.website || 'No'}</div>
                    </div>

                </div>
                <div className="social-icons">
                    {props.profile.contacts.facebook &&
                    <a href={props.profile.contacts.facebook} target='_blank'>
                        <img src={facebook} alt=""/>
                    </a>
                    }
                    {props.profile.contacts.github &&
                    <a href={props.profile.contacts.github} target='_blank'>
                        <img src={github} alt=""/>
                    </a>
                    }
                    {props.profile.contacts.instagram &&
                    <a href={props.profile.contacts.instagram} target='_blank'>
                        <img src={instagram} alt=""/>
                    </a>
                    }
                    {props.profile.contacts.twitter &&
                    <a href={props.profile.contacts.twitter} target='_blank'>
                        <img src={twitter} alt=""/>
                    </a>
                    }
                    {props.profile.contacts.vkontakte &&
                    <a href={props.profile.contacts.vkontakte} target='_blank'>
                        <img src={vkontakte} alt=""/>
                    </a>
                    }
                    {props.profile.contacts.youtube &&
                    <a href={props.profile.contacts.youtube} target='_blank'>
                        <img src={youtube} alt=""/>
                    </a>
                    }
                </div>
            </div>
        </div>
    </section>)
}

export default UserInfo;