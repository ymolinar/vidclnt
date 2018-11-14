import React from 'react'
import {Link} from "react-router-dom";


const Footer = ({options}) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 footer_col">
                        <div className="footer_column footer_contact">
                            <div className="logo_container">
                                <div className="logo"><Link to="/">{options.info.site_name}</Link></div>
                            </div>
                            <div className="footer_title">Got Question? Call Us 24/7</div>
                            <div className="footer_phone">{options.info.phone}</div>
                            <div className="footer_contact_text">
                                <p>17 Princess Road, London</p>
                                <p>Grester London NW18JR, UK</p>
                            </div>
                            <div className="footer_social">
                                <ul>
                                    <li><Link to="/"><i className="fab fa-facebook-f"/></Link></li>
                                    <li><Link to="/"><i className="fab fa-twitter"/></Link></li>
                                    <li><Link to="/"><i className="fab fa-youtube"/></Link></li>
                                    <li><Link to="/"><i className="fab fa-google"/></Link></li>
                                    <li><Link to="/"><i className="fab fa-vimeo-v"/></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 offset-lg-2">
                        <div className="footer_column">
                            <div className="footer_title">Find it Fast</div>
                            <ul className="footer_list">
                                <li><Link to="/">Computers & Laptops</Link></li>
                                <li><Link to="/">Cameras & Photos</Link></li>
                                <li><Link to="/">Hardware</Link></li>
                                <li><Link to="/">Smartphones & Tablets</Link></li>
                                <li><Link to="/">TV & Audio</Link></li>
                            </ul>
                            <div className="footer_subtitle">Gadgets</div>
                            <ul className="footer_list">
                                <li><Link to="/">Car Electronics</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer_column">
                            <ul className="footer_list footer_list_2">
                                <li><Link to="/">Video Games & Consoles</Link></li>
                                <li><Link to="/">Accessories</Link></li>
                                <li><Link to="/">Cameras & Photos</Link></li>
                                <li><Link to="/">Hardware</Link></li>
                                <li><Link to="/">Computers & Laptops</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="footer_column">
                            <div className="footer_title">Customer Care</div>
                            <ul className="footer_list">
                                <li><Link to="/">My Account</Link></li>
                                <li><Link to="/">Order Tracking</Link></li>
                                <li><Link to="/">Wish List</Link></li>
                                <li><Link to="/">Customer Services</Link></li>
                                <li><Link to="/">Returns / Exchange</Link></li>
                                <li><Link to="/">FAQs</Link></li>
                                <li><Link to="/">Product Support</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export {Footer}