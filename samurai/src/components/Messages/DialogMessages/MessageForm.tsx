import React from "react";
import {Field, Form, Formik} from "formik";
import * as validators from "../../../Utils/validator";
import {useDispatch, useSelector} from "react-redux";
import {DispatchType, StateType} from "../../../redux/store";
import {sendMessage} from "../../../redux/dialogsSlice";


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
                    if(currentDialog && currentDialog.id){
                        dispatch(sendMessage({id: currentDialog.id, body:values.message}))
                    }
                    resetForm();
                }
            }
        >
            {
                ({values}) => {
                    return (
                        <Form className='form form-row'>
                            <div className='formControl'>
                                <Field
                                    type='textarea'
                                    className='input'
                                    placeholder="Выберите собеседника чтобы начать диалог..."
                                    name='message'
                                    value={values.message}
                                    autoComplete="off"
                                />
                            </div>
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


