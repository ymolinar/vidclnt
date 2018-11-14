import React from 'react'
import {TopBar} from "./header/top";
import {MiddleBar} from "./header/middle";
import {BottomBar} from "./header/bottom";

export const Header = props => {
    return (
        <header className="header">
            <TopBar {...props}/>
            <MiddleBar movies={props.cart.movies}/>
            <BottomBar authenticated={props.authentication.authenticated}/>
        </header>
    )
};