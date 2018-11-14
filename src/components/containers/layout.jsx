import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as cartActions from '../../actions/cart_actions'
import * as movieActions from '../../actions/movies_actions'
import * as filterActions from '../../actions/filter_actions'
import * as categoryActions from '../../actions/category_actions'
import * as loanActions from '../../actions/loan_actions'
import {Header} from '../presentationals/layout/header'
import {options} from '../../config/config'
import {Footer} from "../presentationals/layout/footer";
import {Switch, Route} from 'react-router-dom'
import {CartPage} from "../presentationals/pages/cart";
import {Page404} from "../presentationals/system/404";
import {CopyRight} from "../presentationals/layout/copyright";
import {UserPage} from "../presentationals/pages/user";
import {bindActionCreators} from 'redux'
import {MoviePage} from "../presentationals/pages/movie";

class Layout extends Component {
    getPage = match => {
        const parts = match.path.split('/');
        return parts[parts.length - 1]
    };

    render() {
        return (
            <div className="super_container">
                <Header cart={this.props.cart} options={this.props.options} authentication={this.props.authentication}/>
                <Switch>
                    <Route path={`${this.props.match.path}`} render={props => {
                        const page = this.getPage(props.match);
                        switch (page) {
                            case 'user':
                                return <UserPage {...props} {...this.props}/>;
                            case 'cart':
                                return <CartPage {...props} {...this.props}/>;
                            case '':
                                if (props.location.pathname !== '/') {
                                    return <Page404/>
                                }
                                return <MoviePage {...props} {...this.props}/>
                            default:
                                return <MoviePage {...props} {...this.props}/>
                        }
                    }}/>
                    <Route component={Page404}/>
                </Switch>
                <Footer options={this.props.options}/>
                <CopyRight/>
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        ...state,
        options
    }
};

const dispatchToProps = dispatch => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
        movieActions: bindActionCreators(movieActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch),
        categoryActions: bindActionCreators(categoryActions, dispatch),
        loanActions: bindActionCreators(loanActions, dispatch)
    }
};

export default connect(stateToProps, dispatchToProps)(Layout);