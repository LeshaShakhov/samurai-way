import React from "react";
import {Field, Form, Formik} from "formik";
import './Login.css';
import store from "../../redux/redux-store";


const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                remember: false,
            }}
            onSubmit={
                async (values, actions) => {
                    const response = await props.login(values);
                    if(response.data.resultCode){
                        actions.setStatus(response.data.messages)
                    }
                    actions.setSubmitting(false);
                }
            }
        >
            {
                ({isSubmitting, errors, status}) => (
                    <Form className='login-form'>
                        <Field type='email' name='email' placeholder='Email'/>
                        <Field type='password' name='password' placeholder='Password'/>
                        <Field type="checkbox" name="remember"/>
                        <div className='status'>{status}</div>
                        <button className={'btn-primary'} type={"submit"} disabled={isSubmitting}>Submit</button>
                    </Form>
                )
            }

        </Formik>
    )
}


export default LoginForm;