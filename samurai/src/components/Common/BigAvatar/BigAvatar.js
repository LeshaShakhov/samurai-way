import React, {useState} from "react";
import avatar from "../../../assets/avatar.png";
import Preloader from "../Preloader/Preloader";
import './BigAvatar.css'

const BigAvatar = ({setPhotoTC, photo, isOwner}) => {

    const [isPhotoFetching, setIsPhotoFetching] = useState(false);


    const onChangePhotoHandler = async (e) => {
        setIsPhotoFetching(true);
        e.target.files.length && await setPhotoTC(e.target.files[0]);
    }

    return (
        <div className="avatar">
            <img
                className='avatar'
                onLoad={()=> {setIsPhotoFetching(false);}}
                src={photo ? photo : avatar}
                alt=""
            />
            {isPhotoFetching && <Preloader/>}
            {
                isOwner && !isPhotoFetching &&
                <>
                    <label
                        className='label-file-input flex-center-center'
                        htmlFor="file-input"
                    >
                        Choose photo-file
                    </label>
                    <input
                        onChange={(e) => {
                            onChangePhotoHandler(e)
                        }}
                        id='file-input'
                        type="file"/>
                </>
            }
        </div>
    )
}

export default BigAvatar;