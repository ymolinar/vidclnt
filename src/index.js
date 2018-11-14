import React from 'react';
import ReactDOM from 'react-dom';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import reducer from './reducers';
import {Provider} from "react-redux";
import ReduxToastr from 'react-redux-toastr'
import {Router, Switch, Route} from 'react-router-dom'
import {Page404} from "./components/presentationals/system/404";
import history from './history/history'
import Layout from "./components/containers/layout";
import {AuthenticationLayout} from "./components/presentationals/authentication_layout";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <Switch>
                    <Route path='/movies' component={Layout}/>
                    <Route path='/user' component={Layout}/>
                    <Route path='/cart' component={Layout}/>
                    <Route path='/auth' component={AuthenticationLayout}/>
                    <Route path='/' component={Layout}/>
                    <Route component={Page404}/>
                </Switch>
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-right"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                    closeOnToastrClick/>
            </div>
        </Router>
    </Provider>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
