import React from "react";
import {Field, Form, Formik} from "formik";
import './Login.css';
import {AuthData} from "../../redux/types/types";
import {LoginDataResponseType} from "../../requestApi/requestUsersApi";
import {ResponseType} from "../../requestApi/api";

type LoginFormType = {
    login: (values: AuthData) => Promise<ResponseType<LoginDataResponseType>>
    captchaUrl: string | undefined
}
const LoginForm: React.FC<LoginFormType> = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                remember: false,
                captcha: ''
            }}
            onSubmit={
                async (values, actions) => {
                    const response = await props.login(values);
                    if (response.resultCode) {
                        actions.setStatus(response.messages)
                    }
                    actions.setSubmitting(false);
                }
            }
        >
            {
                ({isSubmitting, errors, status}) => (
                    <Form className='form login-form'>
                        <Field type='email' name='email' placeholder='Email'/>
                        <Field type='password' name='password' placeholder='Password'/>
                        <div className='checkbox flex'>
                            <label htmlFor='remember'>Remember me</label>
                            <Field type="checkbox" name="remember" id='remember'/>
                        </div>
                        <div className='captcha-and-btn flex'>
                            {
                                props.captchaUrl &&
                                <div className='captcha flex-column w50'>
                                    <img src={props.captchaUrl} alt=""/>
                                    <Field type='text' name='captcha'/>
                                </div>
                            }
                            <div className='relative w50'>
                                <button className={'btn-primary'} type={"submit"} disabled={isSubmitting}>Submit</button>
                                <div className='status'>{status}</div>
                            </div>
                        </div>

                    </Form>
                )
            }
        </Formik>
    )
}


export default LoginForm;