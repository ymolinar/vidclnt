import React from 'react'
import {Link} from "react-router-dom";
import {UserInfo} from "./info";


export const UserMenu = ({user, authenticated}) => {
    const authorized = () => {
        return (
            <div className="user_info_container">
                <div>
                    <ul className="standard_dropdown top_bar_dropdown user_menu">
                        <li>
                            <img src={user.avatar_url} alt=""
                                 className="rounded-circle user_avatar_40"/>
                            <UserInfo user={user}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    };
    const unauthorized = () => {
        return (
            <div>
                <div className="user_icon"><img src="/images/user.svg" alt=""/></div>
                <div><Link to='/auth/register'>Register</Link></div>
                <div><Link to='/auth/login'>Sign in</Link></div>
            </div>
        )
    };
    return (
        <div className="top_bar_user">
            {!authenticated && unauthorized()}
            {authenticated && authorized()}
        </div>
    )
};