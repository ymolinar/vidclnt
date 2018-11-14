import React from 'react'
import {Link} from "react-router-dom";


export const UserInfo = ({user}) => {
    return (
        <ul>
            <li>
                <div className='user_data_container'>
                    <img src={user.avatar_url} className='rounded-circle user_avatar_90' alt=""/>
                    <span className="loan_counter badge badge-info">{user.loans_counter}</span>
                    <h1>{user.full_name}</h1>
                </div>
            </li>
            <li className='clearfix'><Link to="/auth/logout">Logout</Link></li>
            <li className='clearfix'><Link to="/user/profile/loans">Profile</Link></li>
        </ul>
    )
};