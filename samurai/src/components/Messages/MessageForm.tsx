import React from "react";
import {Field, Form, Formik} from "formik";
import * as validators from "../../Utils/validator";
import {useDispatch} from "react-redux";
import {DispatchType} from "../../redux/store";
import {addMessage} from "../../redux/messageSlice";


export const MessageForm:React.FC<{}> = () => {
    const dispatch = useDispatch<DispatchType>()
    return (
        <Formik
            initialValues={{message: ''}}
            validate = {
                validators.validate('message', validators.maxLength(10))
            }
            onSubmit={
                (values, {resetForm}) => {
                    dispatch(addMessage(values.message))
                    resetForm();
                }
            }
        >
            {
                ({values}) => {
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


