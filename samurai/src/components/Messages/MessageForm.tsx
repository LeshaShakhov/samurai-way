import React from "react";
import {Field, Form, Formik} from "formik";
import * as validators from "../../Utils/validator";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";
import {sendMessage} from "../../redux/dialogsSlice";


export const MessageForm:React.FC<{}> = () => {
    const dispatch = useDispatch<DispatchType>()
    const currentDialog = useSelector((state:StateType) => state.dialogs.currentDialog)
    return (
        <Formik
            initialValues={{message: ''}}
            validate = {
                validators.validate('message', validators.maxLength(50))
            }
            onSubmit={
                (values, {resetForm}) => {
                    dispatch(sendMessage({id: currentDialog, body:values.message}))
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


