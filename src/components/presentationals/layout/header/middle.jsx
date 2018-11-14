import React from 'react'
import {Link} from 'react-router-dom'
import {CartMenu} from '../../cart/menu';

export const MiddleBar = ({movies}) => {
    return (
        <div className="header_main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 col-sm-3 col-3 order-1">
                        <div className="logo_container">
                            <div className="logo"><Link to='/'>VidStore</Link></div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                    </div>
                    <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
                        <div className="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                            <CartMenu movies={movies}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};