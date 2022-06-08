import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as validators from '../../../Utils/validator'

type PostFormType = {
    addPost: (post: string) => void
}

const PostForm: React.FC<PostFormType> = (props) => {
    return (
        <Formik
            initialValues={{
                post: ''
            }}

            validate={
                validators.validate('post', validators.maxLength(10))
            }
            onSubmit={(values,{resetForm})=>{
                props.addPost(values.post);
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
                                value={values.post}
                                name='post'
                                autoComplete="off"
                            />
                         <ErrorMessage name="post" className='error-message' component="div" />
                        </div>
                        <button
                            className='btn-primary'
                            type="submit"
                            disabled={!values.post}
                        >
                            Send
                        </button>
                    </Form>
                )
            }}

        </Formik>
    )
}

export default PostForm;