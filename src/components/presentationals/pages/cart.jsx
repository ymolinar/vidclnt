import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Page404} from "../../presentationals/system/404";
import {CartList} from "../cart/list";


export const CartPage = (props) => {
    return (
        <Switch>
            <Route path={`${props.match.path}`} exact
                   render={properties => <CartList {...properties} movies={props.cart.movies}
                                               removeFromCart={props.cartActions.removeMovie}
                                               user={props.authentication.user}
                                               clearCart={props.cartActions.clearCart}
                                               checkout={props.cartActions.checkout} options={props.options}/>}/>
            <Route component={Page404}/>
        </Switch>
    )
};