import React from "react";
import {Field, Form, Formik} from "formik";
import './EditInfoForm.css';
import Preloader from "../Common/Preloader/Preloader";

const EditInfoForm = ({
                          aboutMe, fullName, lookingForAJob,
                          lookingForAJobDescription, ...props
                      }) => {
    return !props.contacts ? <Preloader/> :
        <>
        <div className="app-block edit-form">

            <div className='text-subtitle'>Main Info</div>
            <Formik
                initialValues={{
                    aboutMe: aboutMe || '',
                    fullName: fullName || '',
                    lookingForAJob: lookingForAJob || '',
                    lookingForAJobDescription: lookingForAJobDescription || '',
                }}
            >
                {
                    ({isSubmitting, errors, status}) => (
                        <Form className='form profile-form'>
                            <div className='input-wrapper'>
                                <label htmlFor="aboutMe">About Me:</label>
                                <Field type='text' id={'aboutMe'} name='aboutMe' placeholder='Write anything...'/>
                            </div>

                            <div className='input-wrapper'>
                                <label htmlFor="fullName">Full Name:</label>
                                <Field type='text' id={'fullName'} name='fullName' placeholder='Write anything...'/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor="lookingForAJob">Looking for a job:</label>
                                <Field type="checkbox" id={'lookingForAJob'} name="lookingForAJob"/>
                            </div>
                            <div className='input-wrapper'>
                                <label htmlFor="lookingForAJobDescription">Looking for a lob description:</label>
                                <Field type='textarea' id={'lookingForAJobDescription'} name='lookingForAJobDescription'
                                       placeholder='Write anything...'/>
                            </div>
                            <button className={'btn-primary'} type={"submit"} disabled={isSubmitting}>Submit</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
        <div className="app-block edit-form">
            <div className='text-subtitle'>Contacts</div>
            <Formik
                initialValues={{
                    facebook: props.contacts.facebook || '',
                    github: props.contacts.github || '',
                    instagram: props.contacts.instagram || '',
                    mainLink: props.contacts.mainLink || '',
                    twitter: props.contacts.twitter || '',
                    vk: props.contacts.vk || '',
                    website: props.contacts.website || '',
                    youtube: props.contacts.youtube || '',
                }}
            >
                {
                    ({isSubmitting, errors, status}) => (
                        <Form className='form profile-form'>
                            {
                                Object.keys(props.contacts).map(key => {
                                    return (
                                        <div key={key} className='input-wrapper'>
                                            <label htmlFor={key}>{key}:</label>
                                            <Field type='text' id={key} name={key} placeholder={key}/>
                                        </div>
                                    )
                                })
                            }

                            <button className={'btn-primary'} type={"submit"} disabled={isSubmitting}>Submit</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
        </>
};


export default EditInfoForm;