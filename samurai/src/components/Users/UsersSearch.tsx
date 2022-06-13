import React from "react";
import {Field, Form, Formik} from "formik";
import {UsersFilterType} from "../../redux/types/types";

type PropsType = {
    onSearch: (filter:UsersFilterType) => void
    filter: UsersFilterType
}
const UsersSearch: React.FC<PropsType> = ({onSearch, filter}) => {
    return (
        <Formik
            enableReinitialize
            initialValues={{
                term: filter.term,
                onlyFollowed: String(filter.onlyFollowed)
            }}
            onSubmit={(values) => {
                const filter : UsersFilterType = {
                    term: values.term,
                    onlyFollowed:  values.onlyFollowed === 'null' ? null : values.onlyFollowed === 'true'
                }
                onSearch(filter);
            }
            }>
            {({values}) => {
                return (
                    <Form className='form'>
                        <Field
                            type='text'
                            value={values.term}
                            name='term'
                            autoComplete='off'
                        />
                        <Field as="select" name="onlyFollowed">
                            <option value="null">All Users</option>
                            <option value="true">Only Followed</option>
                            <option value="false">Only UnFollowed</option>
                        </Field>
                        <button
                            className='btn-primary'
                            type="submit"
                        >
                            Search
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )
}

export default UsersSearch;