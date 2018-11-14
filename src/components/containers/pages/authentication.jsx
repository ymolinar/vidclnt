import React, {Component} from 'react'
import {connect} from "react-redux";
import {Redirect, Link} from "react-router-dom";
import * as authenticationActions from '../../../actions/authentication_actions'
import '../../styles/authentication.css'
import {Logout} from "../../presentationals/authentication/logout";
import LoginForm from "../../presentationals/authentication/login";
import RegisterForm from "../../presentationals/authentication/register";


class AuthenticationPage extends Component {
    getPage = match => {
        const parts = match.path.split('/');
        return parts[parts.length - 1] === 'auth' ? 'login' : parts[parts.length - 1]
    };

    render() {
        const {match, authenticated} = this.props;
        const page = this.getPage(match);
        if (['login', 'register'].indexOf(page) !== -1 && authenticated) {
            return <Redirect to='/'/>
        }
        return (
            <div>
                {page === 'logout' && <Logout logout={this.props.logout} user={this.props.user}/>}
                {page === 'login' && <div className='signup-form'>
                    <h2>Login</h2>
                    <p className="hint-text">Sign in to access new features.</p>
                    <LoginForm onSubmit={values => this.props.login(values.email, values.password)}/>
                    <h2>or</h2>
                    <Link to='/auth/register'>Sign Up</Link> | <Link to='/'>Home</Link>
                </div>}
                {page === 'register' && <div className='signup-form'>
                    <h2>Register</h2>
                    <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                    <RegisterForm onSubmit={this.props.register}/>
                    <h2>or</h2>
                    <Link to='/auth/login'>Sign In</Link> | <Link to='/'>Home</Link>
                </div>}
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        ...state.authentication
    }
};

const dispatchToProps = {
    ...authenticationActions
};

export default connect(stateToProps, dispatchToProps)(AuthenticationPage)