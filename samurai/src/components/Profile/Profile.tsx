import React, {useEffect} from "react";
import "./Profile.css";
import {useDispatch, useSelector} from "react-redux";
import {Navigate, useParams} from "react-router";
import isObjEmpty from "../../Utils/isObjEmpty";
import {DispatchType, StateType} from "../../redux/store";
import {getProfile, getUserStatus} from "../../redux/profileSlice";
import UserInfo from "./UserInfo/UserInfo";
import {Posts} from "./Posts/Posts";


export const Profile: React.FC<{}> = () => {
    const myId = useSelector((state: StateType) => state.auth.authUserData.id)
    const dispatch = useDispatch<DispatchType>();

    const preparePageData = (id: number): void => {
        dispatch(getProfile(id))
        dispatch(getUserStatus(id));
    }

    const params = useParams()

    useEffect(() => {
        let userId = params.userId || myId;
        if (userId) {
            preparePageData(+userId)
        }
    }, [params.userId, myId])

    if (isObjEmpty(params) && !myId) return <Navigate to='/login'/>
    return (
        <>
            <UserInfo
                isOwner={!params.userId}
            />
            <Posts/>
        </>
    )
}