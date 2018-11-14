import React from 'react'
import {Link} from "react-router-dom";

export const CartMenu = ({movies}) => {
    const cartTotal = () => {
        let total = 0;
        for (let i = 0; i < movies.length; i++) {
            total += parseFloat(movies[i].loan_price)
        }
        return total
    };
    return (
        <div className="cart">
            <div className="cart_container d-flex flex-row align-items-center justify-content-end">
                <div className="cart_icon">
                    <Link to={'/cart'}><img src="/images/cart.png" alt=""/></Link>
                    <div className="cart_count"><span>{movies.length}</span></div>
                </div>
                <div className="cart_content">
                    <div className="cart_text"><Link to="/cart">Cart</Link></div>
                    <div className="cart_price">${cartTotal()}</div>
                </div>
            </div>
        </div>
    )
};