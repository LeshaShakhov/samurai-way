import React from "react";
import {Field, Form, Formik} from "formik";
import './Login.css';
import {login} from "../../redux/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";


const LoginForm: React.FC<{}> = () => {
    const captchaUrl = useSelector((state:StateType) => state.auth.captchaUrl)
    const error = useSelector((state:StateType) => state.auth.error)
    const dispatch = useDispatch<DispatchType>();
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
                    await dispatch(login(values));
                    actions.setSubmitting(false);
                }
            }
        >
            {
                ({isSubmitting}) => (
                    <Form className='form login-form'>
                        <Field type='email' name='email' placeholder='Email'/>
                        <Field type='password' name='password' placeholder='Password'/>
                        <div className='checkbox flex'>
                            <label htmlFor='remember'>Remember me</label>
                            <Field type="checkbox" name="remember" id='remember'/>
                        </div>
                        <div className='captcha-and-btn flex'>
                            {
                                captchaUrl &&
                                <div className='captcha flex-column w50'>
                                    <img src={captchaUrl} alt=""/>
                                    <Field type='text' name='captcha'/>
                                </div>
                            }
                            <div className='relative w50'>
                                <button className={'btn-primary'} type={"submit"} disabled={isSubmitting}>Submit</button>
                                <div className='status'>{error}</div>
                            </div>
                        </div>

                    </Form>
                )
            }
        </Formik>
    )
}


export default LoginForm;