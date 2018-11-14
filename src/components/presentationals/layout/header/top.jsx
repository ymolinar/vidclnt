import React from 'react'
import {UserMenu} from '../../user/menu'

export const TopBar = ({options, authentication}) => {
    return (
        <div className="top_bar">
            <div className="container">
                <div className="row">
                    <div className="col d-flex flex-row">
                        <div className="top_bar_contact_item">
                            <div className="top_bar_icon"><img src="/images/phone.png" alt=""/></div>
                            {options.info.phone}
                        </div>
                        <div className="top_bar_contact_item">
                            <div className="top_bar_icon"><img src="/images/mail.png" alt=""/></div>
                            <a href="mailto:therental@gmail.com">{options.info.email}</a></div>
                        <div className="top_bar_content ml-auto">
                            <UserMenu user={authentication.user} authenticated={authentication.authenticated}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};