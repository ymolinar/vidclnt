import React, {Component} from 'react'
import RegisterForm from "../../presentationals/authentication/register";

export default class Profile extends Component {
    handleSubmit = values => {
        console.log(values)
    };

    render() {
        return <RegisterForm onSubmit={this.handleSubmit} user={this.props.authentication.user}/>;
    }
}