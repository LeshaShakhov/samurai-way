import React from "react";

const SocialIcons = ({contacts}) => {

    const images = {
        facebook: require("../../../assets/social_icons/facebook.png"),
        github: require("../../../assets/social_icons/github.png"),
        instagram: require("../../../assets/social_icons/instagram.png"),
        mainLink: require("../../../assets/social_icons/mainLink.svg"),
        twitter: require("../../../assets/social_icons/twitter.png"),
        vkontakte: require("../../../assets/social_icons/vkontakte.png"),
        website: require("../../../assets/social_icons/website.png"),
        youtube: require("../../../assets/social_icons/youtube.png"),
    }

    return (
        <div className="social-icons">
            {
                Object.keys(contacts).map(key => {
                    return (
                        contacts[key] &&
                        <a key={key} href={contacts[key]} target='_blank'>
                            <img src={images[key]} alt=""/>
                        </a>
                    )
                })
            }
        </div>
    )
}
export default SocialIcons;