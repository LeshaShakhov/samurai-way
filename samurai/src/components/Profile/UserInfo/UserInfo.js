import React from "react";
import "./UserInfo.css";

const UserInfo = (props) => {
    const {userName, userSurname, userImage,} = props.user;
    return (<section>
        <div className="bg app-block">
            <img className='full-width'
                 src="https://i.ucrazy.ru/files/i/2007.6.29/thumbs/9x_media__1280__triple_horizontal__grand_canyon.jpg"
                 alt=""/>
        </div>
        <div className="user-info app-block">
            <div className="avatar">
                <img className='avatar' src={userImage} alt=""/>
            </div>

            <div className="text">
                <div className='text-title'>
                    {`${userName} ${userSurname}`}
                </div>
                <div className="details">
                    <div className="keys">
                        <div>Date of birth:</div>
                        <div>City:</div>
                        <div>Education:</div>
                        <div>Webcite:</div>
                    </div>
                    <div className="values">
                        <div>01 october 1990</div>
                        <div>Moscow</div>
                        <div>MGAU</div>
                        <div>mywebcite.com</div>
                    </div>
                </div>

            </div>
        </div>
    </section>)
}

export default UserInfo;