import React from 'react'
import {Link} from "react-router-dom";


export const BottomBar = ({authenticated}) => {
    return (
        <nav className="main_nav">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="main_nav_content d-flex flex-row">
                            <div className="cat_menu_container">
                                <div
                                    className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                    <div className="cat_burger"><span/><span/><span/></div>
                                    <div className="cat_menu_text">categories</div>
                                </div>

                                <ul className="cat_menu">
                                </ul>
                            </div>
                            <div className="main_nav_menu ml-auto">
                                <ul className="standard_dropdown main_nav_dropdown">
                                    <li><Link to="/">Home<i className="fas fa-chevron-down"/></Link></li>
                                    {authenticated &&
                                    <li className={'hassubs'}><Link to="/movies/new">Add Film<i className="fas fa-film"/></Link></li>}
                                    {authenticated &&
                                    <li className={'hassubs'}><Link to="/user/profile/loans">Loans<i className="fas fa-hand-holding-usd"/></Link></li>}
                                </ul>
                            </div>
                            <div className="menu_trigger_container ml-auto">
                                <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                    <div className="menu_burger">
                                        <div className="menu_trigger_text">menu</div>
                                        <div className="cat_burger menu_burger_inner">
                                            <span/><span/><span/></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};