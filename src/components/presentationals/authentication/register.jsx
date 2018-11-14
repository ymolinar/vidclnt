import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {fieldRenderer, fileFieldRenderer} from "../../../helpers/renderers";


const validDataTypes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];

const validate = values => {
    const errors = {};
    if (!values.first_name) {
        errors.first_name = 'Required'
    } else if (values.first_name.length < 2) {
        errors.first_name = 'Must be 2 characters or more'
    } else if (values.first_name.length > 60) {
        errors.first_name = 'Must be 60 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 5) {
        errors.password = 'Must be 6 characters or more'
    }
    if (!values.password_confirmation) {
        errors.password_confirmation = 'Required'
    } else if (values.password !== values.password_confirmation) {
        errors.password_confirmation = 'Must confirm your password'
    }
    if (values.avatar && values.avatar.length) {
        if (-1 === validDataTypes.indexOf(values.avatar[0].type)) {
            errors.avatar = 'Invalid image type'
        }
    }
    return errors
};

const RegisterForm = ({handleSubmit, pristine, reset, submitting}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="first_name" type="text" component={fieldRenderer} label="First Name" id='first_name'/>
            <Field name="middle_name" type="text" component={fieldRenderer} label="Middle Name" id='middle_name'/>
            <Field name="last_name" type="text" component={fieldRenderer} label="Last Name" id='last_name'/>
            <Field name="email" type="email" component={fieldRenderer} label="Email" id='email'/>
            <Field name="password" type="password" component={fieldRenderer} label="Password" id='password'/>
            <Field name="password_confirmation" type="password" component={fieldRenderer} label="Confirm Password"
                   id='password_confirmation'/>
            <Field name='avatar' type='file' id='avatar' component={fileFieldRenderer} label='Avatar'/>
            <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Sign Up</button>
            <button type="button" className='btn btn-sm' disabled={pristine || submitting} onClick={reset}>
                Reset
            </button>
        </form>
    )
};
export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)