import React from 'react'
import '../../styles/404.css'
import {Link} from 'react-router-dom'
import history from '../../../history/history'

export const Page404 = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h3>Oops! Page not found</h3>
                    <h1><span>4</span><span>0</span><span>4</span></h1>
                </div>
                <h2>we are sorry, but the page you requested was not found</h2>
                <h3><Link to={'/'}>Home</Link></h3>
                <h3><Link to={'/'} onClick={e => {
                    e.preventDefault();
                    history.goBack()
                }}>Go Back</Link></h3>
            </div>
        </div>
    )
};