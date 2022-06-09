import React, {useEffect} from "react";
import EditInfoForm from "./EditInfoForm";
import {StateType} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType} from "../../redux/store";
import {getProfile} from "../../redux/profileSlice";

export const EditInfo:React.FC<{}> = () => {
    const dispatch = useDispatch<DispatchType>()
    const myId = useSelector((state: StateType) => state.auth.authUserData.id)
    useEffect(() => {
       dispatch(getProfile(myId));
    }, []);

    return (
        <>
        <div className='text-title'>Edit Profile</div>
        <EditInfoForm/>
        </>
    )
};
