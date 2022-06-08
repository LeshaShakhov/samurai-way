import React, {useEffect} from "react";
import EditInfoForm from "./EditInfoForm";
import {connect, ConnectedProps} from "react-redux";
import {setProfileTC, updateProfileTC} from "../../redux/profileReducer";
import {StateType} from "../../redux/redux-store";

const EditInfo:React.FC<PropsFromReduxTypes> = (props) => {

    useEffect(() => {
        props.setProfileTC(props.myId);
    }, []);

    return (
        <>
        <div className='text-title'>Edit Profile</div>
        <EditInfoForm {...props}/>
        </>
    )

};
const mapStateToProps = (state:StateType) => {
    return(
        {
            myId: state.auth.authUserData.id,
            profile: state.profile,

        }
    )
}

const connector = connect(mapStateToProps, {setProfileTC, updateProfileTC})
export type PropsFromReduxTypes = ConnectedProps<typeof connector>

export default connector(EditInfo);