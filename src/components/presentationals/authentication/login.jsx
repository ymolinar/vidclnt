import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {fieldRenderer} from "../../../helpers/renderers";

const validate = values => {
    const errors = {};
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
    return errors
};

const LoginForm = ({handleSubmit, pristine, reset, submitting}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" type="email" component={fieldRenderer} label="Email" id='email'/>
            <Field name="password" type="password" component={fieldRenderer} label="Password" id='password'/>
            <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Sign In</button>
            <button type="button" className='btn btn-sm' disabled={pristine || submitting} onClick={reset}>
                Reset
            </button>
        </form>
    )
};
export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm)