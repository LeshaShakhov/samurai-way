import React, {Component} from "react";

const Profile = () =>
    <section className='content'>
        <div className="bg content-block">
            <img className='full-width' src="https://i.ucrazy.ru/files/i/2007.6.29/thumbs/9x_media__1280__triple_horizontal__grand_canyon.jpg" alt=""/>
        </div>
        <div className="user-info content-block">
            <div className="avatar">
                <img className='avatar-image' src="http://www.yorki-penza.ru/img/djey/djey_01.jpg" alt=""/>
            </div>

            <div className="text-info">
                <div className='name'>Shakhov A.</div>
                <div className="user-details">
                    <div className="user-details-keys">
                        <div>Date of birth:</div>
                        <div>City:</div>
                        <div>Education:</div>
                        <div>Webcite:</div>
                    </div>
                    <div className="user-details-values">
                        <div>01 october 1990</div>
                        <div>Moscow</div>
                        <div>MGAU</div>
                        <div>mywebcite.com</div>
                    </div>
                </div>

            </div>
        </div>

        <div className='posts-input content-block'>
            <div className='post-input-header'>
                My Posts
            </div>
            <form className='post-form'>
                <textarea className='post-input' placeholder="Your news..."/>
                <input className='post-submit' value='Send' type="submit"/>
            </form>
        </div>
        <div className="post content-block">
                <div className='message'>
                    <div className="message-avatar">
                        <img src="http://www.yorki-penza.ru/img/djey/djey_01.jpg" alt=""/>
                    </div>
                    <div className="message-text">
                        Hey, why nobody love me?
                    </div>
                </div>
            </div>
        <div className="post content-block">
            <div className='message'>
                <div className="message-avatar">
                    <img src="http://www.yorki-penza.ru/img/djey/djey_01.jpg" alt=""/>
                </div>
                <div className="message-text">
                    Hey, why nobody love me?
                </div>
            </div>
        </div>

    </section>

export default Profile;