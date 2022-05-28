import React, {useEffect} from "react";
import EditInfoForm from "./EditInfoForm";
import {connect} from "react-redux";
import {setProfileTC} from "../../redux/profileReducer";

const EditInfo = (props) => {

    useEffect(() => {
        props.setProfileTC(props.myId);
    }, []);

    return (
        <>
        <div className='text-title'>Edit Profile</div>
        <EditInfoForm {...props.profile.profile}/>
        </>
    )

};
const mapStateToProps = (state) => {
    return(
        {
            myId: state.auth.authUserData.id,
            profile: state.profile,

        }
    )
}

export default connect(mapStateToProps, {setProfileTC})(EditInfo);