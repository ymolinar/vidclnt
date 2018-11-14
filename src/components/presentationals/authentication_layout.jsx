import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AuthenticationPage from '../containers/pages/authentication'
import {Page404} from "../presentationals/system/404";

export const AuthenticationLayout = ({match}) => {
    return (
        <Switch>
            <Route path={`${match.path}/login`} component={AuthenticationPage}/>
            <Route path={`${match.path}/logout`} component={AuthenticationPage}/>
            <Route path={`${match.path}/register`} component={AuthenticationPage}/>
            <Route path={`${match.path}`} exact component={AuthenticationPage}/>
            <Route component={Page404}/>
        </Switch>
    )
};