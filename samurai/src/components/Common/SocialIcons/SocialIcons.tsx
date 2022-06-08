import React from "react";
import {ContactType} from "../../../redux/types/types";

type SocialIcons = {
    contacts: ContactType
}
const SocialIcons:React.FC<SocialIcons> = ({contacts}) => {

    const images = {
        facebook: require("../../../assets/social_icons/facebook.png"),
        github: require("../../../assets/social_icons/github.png"),
        instagram: require("../../../assets/social_icons/instagram.png"),
        mainLink: require("../../../assets/social_icons/mainLink.svg"),
        twitter: require("../../../assets/social_icons/twitter.png"),
        vk: require("../../../assets/social_icons/vkontakte.png"),
        website: require("../../../assets/social_icons/website.png"),
        youtube: require("../../../assets/social_icons/youtube.png"),
    }

    return (
        <div className="social-icons">
            {
                Object.keys(contacts).map(key => {
                    return (
                        contacts[key as keyof ContactType] &&
                        <a key={key} href={contacts[key as keyof ContactType]} target='_blank'>
                            <img src={images[key  as keyof ContactType]} alt=""/>
                        </a>
                    )
                })
            }
        </div>
    )
}
export default SocialIcons;