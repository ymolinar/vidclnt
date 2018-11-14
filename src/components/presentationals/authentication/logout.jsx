import React from 'react'
import {Redirect} from "react-router-dom";


export const Logout = ({user, logout}) => {
    logout(user);
    return (
        <Redirect to='/'/>
    )
};