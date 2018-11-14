import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class AuthenticatedRoute extends Component {
    render() {
        const {render, authenticated, ...rest} = this.props;

        return (
            <Route {...rest} render={props => {
                if (authenticated)
                    return render(props);
                else
                    return <Redirect to="/auth/login"/>
            }}/>
        )
    }
}

const stateToProps = ({authentication}) => ({
    authenticated: authentication.authenticated
});

export default connect(stateToProps)(AuthenticatedRoute)
