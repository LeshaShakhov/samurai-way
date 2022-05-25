import React from "react";
import {Field, Form, Formik} from "formik";
import './Login.css';
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const LoginForm = (props) => {
    return(
        <Formik
            initialValues={{
                email: '',
                password: '',
                remember: false,
            }}
            onSubmit={
                async (loginData)=> {
                    await sleep(1000);
                    props.login(loginData);
                }
            }
        >
            {
                ( {isSubmitting} ) => (
                    <Form className='login-form'>
                        <Field type='email' name='email' placeholder='Email'/>
                        <Field type='password' name='password' placeholder='Password'/>
                        <Field type="checkbox" name="remember" />
                        <button className={'btn-primary'} type={"submit"} disabled={isSubmitting}>Submit</button>
                    </Form>
                )
            }

        </Formik>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {login})(LoginForm);