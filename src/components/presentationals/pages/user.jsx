import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Page404} from "../../presentationals/system/404";
import Loans from "../../containers/users/loans";
import AuthenticatedRoute from "../../hoc/authenticated_route";


export const UserPage = (props) => {
    const {user} = props.authentication;
    if (undefined === user){
        return <Redirect to='/auth/login'/>
    }
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-sm-10"><h1>{user.full_name}</h1></div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="text-center">
                            <img src={user.avatar_url} className="avatar img-circle img-thumbnail"
                                 alt="avatar"/>
                        </div>
                        <hr/>
                        <ul className="list-group">
                            <li className="list-group-item text-muted">Activity <i className="fas fa-dashboard"/>
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Loans</strong></span> {user.loans_counter}
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-9">
                        <Switch>
                            <AuthenticatedRoute path={`${props.match.path}/profile/loans`} exact
                                                render={properties => <Loans {...properties} user={user}
                                                                             loansState={props.loans}
                                                                             options={props.options}
                                                                             returnLoan={props.loanActions.returnLoan}
                                                                             allLoans={props.loanActions.all}/>}/>
                            {/*<AuthenticatedRoute path={`${props.match.path}/profile`} exact*/}
                            {/*render={properties => <Profile {...properties}*/}
                            {/*authentication={props.authentication}*/}
                            {/*options={props.options}/>}/>*/}
                            {/*<AuthenticatedRoute path={`${props.match.path}`} exact*/}
                            {/*render={properties => <Profile {...properties}*/}
                            {/*authentication={props.authentication}*/}
                            {/*options={props.options}/>}/>*/}
                            <Route component={Page404}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
};