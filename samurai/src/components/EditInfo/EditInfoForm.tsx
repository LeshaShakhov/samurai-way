import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import './EditInfoForm.css';
import Preloader from "../Common/Preloader/Preloader";
import {parseServerResponse} from '../../Utils/validator'
import {useNavigate} from "react-router";
import cn from "classnames";
import {PropsFromReduxTypes} from "./EditInfo";
import {ResponseType} from "../../requestApi/api";
//TODO Проработать валидацию форм
//TODO Проработать типы для ошибок
const validateName = (value:string) => {
    let error;
    if (value.replace(/\s/g, '').length < 3) {
        error = 'Name should not be empty or too short';
    }
    return error;
}

const EditInfoForm:React.FC<PropsFromReduxTypes> = (props) => {

    const [serverErrors, setServerErrors] = useState<any>({});

    const navigate = useNavigate();

    const pushErrors = (serverError:any) => {
        setServerErrors({...serverErrors, ...serverError});
    }

    return !props.profile.profile ? <Preloader/> :
        <>
        <div className="app-block edit-form">

            <Formik
                initialValues={{
                    aboutMe: props.profile.profile.aboutMe || '',
                    fullName: props.profile.profile.fullName || '',
                    lookingForAJob: props.profile.profile.lookingForAJob || false,
                    lookingForAJobDescription: props.profile.profile.lookingForAJobDescription || '',
                    contacts : {
                        facebook: props.profile.profile.contacts.facebook || '',
                        github: props.profile.profile.contacts.github || '',
                        instagram: props.profile.profile.contacts.instagram || '',
                        mainLink: props.profile.profile.contacts.mainLink || '',
                        twitter: props.profile.profile.contacts.twitter || '',
                        vk: props.profile.profile.contacts.vk || '',
                        website: props.profile.profile.contacts.website || '',
                        youtube: props.profile.profile.contacts.youtube || '',
                    },
                    photos: {
                        large: props.profile.profile.photos.large || '',
                        small: props.profile.profile.photos.small || '',
                    }
                }}
                onSubmit={
                    async (values, actions) => {
                        actions.setSubmitting(true);
                        const response = await props.updateProfileTC(values);
                        actions.setSubmitting(false);
                        if(response.resultCode) {
                            pushErrors(parseServerResponse(response.messages));
                        } else {
                            navigate('/profile');
                        }

                    }
                }
            >
                {
                    ({isSubmitting, errors, status}) => (
                        <Form className='form profile-form'>
                            <div className='input-wrapper formControl'>
                                <label htmlFor="aboutMe">About Me:</label>
                                <Field type='text' id={'aboutMe'} name='aboutMe' placeholder='Write anything...'/>
                            </div>
                            <div className={cn('input-wrapper formControl', {error: errors.fullName})}>
                                {errors.fullName && <div className='error-message'>{errors.fullName}</div>}
                                <label htmlFor="fullName">Full Name:</label>
                                <Field validate={validateName} type='text' id={'fullName'} name='fullName' placeholder='Write anything...'/>
                            </div>
                            <div className='input-wrapper formControl'>
                                <label htmlFor="lookingForAJob">Looking for a job:</label>
                                <Field type="checkbox" id={'lookingForAJob'} name="lookingForAJob"/>
                            </div>
                            <div className='input-wrapper formControl'>
                                <label htmlFor="lookingForAJobDescription">Looking for a lob description:</label>
                                <Field type='textarea' id={'lookingForAJobDescription'} name='lookingForAJobDescription'
                                       placeholder='Write anything...'/>
                            </div>
                            {
                                props.profile.profile && Object.keys(props.profile.profile.contacts).map(key => {
                                    return (
                                        <div key={key} className={cn('input-wrapper formControl', {'error' : serverErrors[key]})}>
                                            {serverErrors[key] && <div className='error-message'>{serverErrors[key]}</div>}
                                            <label htmlFor={`contacts.${key}`}>{key}:</label>
                                            <Field type='text' id={`contacts.${key}`}  name={'contacts.' + key} placeholder={key}/>
                                        </div>
                                    )
                                })
                            }
                            <button className={'btn-primary'} type={"submit"} /*disabled={isSubmitting || Object.keys(errors).length}*/ >Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
        </>
};


export default EditInfoForm;