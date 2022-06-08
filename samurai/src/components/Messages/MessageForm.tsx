import React from "react";
import {Field, Form, Formik} from "formik";
import * as validators from "../../Utils/validator";

type MessageFormType = {
    addMessage: (message:string)=>void
}
const MessageForm:React.FC<MessageFormType> = (props) => {

    return (
        <Formik
            initialValues={{message: ''}}
            validate = {
                validators.validate('message', validators.maxLength(10))
            }
            onSubmit={
                (values, {resetForm}) => {
                    props.addMessage(values.message);
                    resetForm();
                }
            }
        >
            {
                ({values, isValid, errors}) => {
                    return (
                        <Form className='form'>
                            <Field
                                type='textarea'
                                className='input'
                                placeholder="Your message..."
                                name='message'
                                value={values.message}
                                autoComplete="off"
                            />
                            <button
                                className='btn-primary'
                                type="submit"
                                disabled={!values.message}
                            >
                                Send
                            </button>
                        </Form>
                    )
                }
            }


        </Formik>
    )
}

export default MessageForm;

