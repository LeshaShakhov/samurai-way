import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import './EditInfoForm.css';
import Preloader from "../Common/Preloader/Preloader";
import {useNavigate} from "react-router";
import cn from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";
import {updateProfile} from "../../redux/profileSlice";
//TODO Проработать валидацию форм
//TODO Проработать типы для ошибок
//TODO Изменятеся порядок контактов
const validateName = (value:string) => {
    let error;
    if (value.replace(/\s/g, '').length < 3) {
        error = 'Name should not be empty or too short';
    }
    return error;
}

const EditInfoForm:React.FC<{}> = () => {
    //TODO Убрать any
    const [serverErrors, setServerErrors] = useState<any>({})
    const profile = useSelector((state:StateType) => state.profile.profile)
    const dispatch = useDispatch<DispatchType>()

    const navigate = useNavigate();

    const pushErrors = (serverError:any) => {
        setServerErrors({...serverErrors, ...serverError});
    }

    return !profile ? <Preloader/> :
        <>
        <div className="app-block edit-form">
            <Formik
                initialValues={{
                    aboutMe: profile.aboutMe || '',
                    fullName: profile.fullName || '',
                    lookingForAJob: profile.lookingForAJob || false,
                    lookingForAJobDescription: profile.lookingForAJobDescription || '',
                    contacts : {
                        facebook: profile.contacts.facebook || '',
                        github: profile.contacts.github || '',
                        instagram: profile.contacts.instagram || '',
                        mainLink: profile.contacts.mainLink || '',
                        twitter: profile.contacts.twitter || '',
                        vk: profile.contacts.vk || '',
                        website: profile.contacts.website || '',
                        youtube: profile.contacts.youtube || '',
                    },
                    photos: {
                        large: profile.photos.large || '',
                        small: profile.photos.small || '',
                    }
                }}
                onSubmit={
                    async (values, actions) => {
                        actions.setSubmitting(true);
                        await dispatch(updateProfile(values));
                        actions.setSubmitting(false);
                        navigate('/profile');
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
                                profile && Object.keys(profile.contacts).map(key => {
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