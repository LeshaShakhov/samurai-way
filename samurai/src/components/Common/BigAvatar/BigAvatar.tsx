import React, {ChangeEvent, useState} from "react";
import avatar from "../../../assets/avatar.png";
import Preloader from "../Preloader/Preloader";
import './BigAvatar.css'
type BigAvatar = {
    setPhotoTC:(file:File)=>void
    photo: string|null
    isOwner: boolean
}
const BigAvatar: React.FC<BigAvatar> = ({setPhotoTC, photo, isOwner}) => {

    const [isPhotoFetching, setIsPhotoFetching] = useState(false);


    const onChangePhotoHandler = (e : ChangeEvent<HTMLInputElement>) => {
        setIsPhotoFetching(true);
        if( e.target.files?.length){
             setPhotoTC(e.target.files[0]);
        }
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