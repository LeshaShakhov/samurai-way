import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../redux/store";
import {Field, Form, Formik} from "formik";
import {devCloseWB, sendMessageWithWS} from "../../redux/chatSlice";

export const ChatInputs: React.FC<{}> = () => {
    const dispatch = useDispatch<DispatchType>()
    const webSocketStatus = useSelector((state: StateType) => state.chatSlice.socketStatus)
    return (
        <>
            <Formik
                initialValues={{
                    message: ''
                }}

                onSubmit={(values, {resetForm}) => {
                    dispatch(sendMessageWithWS(values.message))
                    resetForm();
                }}
            >
                {({values}) => {
                    return (
                        <Form className='form'>
                            <div className='formControl'>
                                <Field
                                    type='textarea'
                                    className='input'
                                    placeholder="Your news..."
                                    value={values.message}
                                    name='message'
                                    autoComplete="off"
                                />
                            </div>
                            <button
                                className='btn-primary'
                                type="submit"
                                disabled={!values.message || webSocketStatus === 'pending'}
                            >
                                Send
                            </button>
                        </Form>
                    )
                }}
            </Formik>
            <button onClick={() => {
                dispatch(devCloseWB())
            }}>DevCloseWB
            </button>
        </>
    )
}