import React from "react";
import {Link} from "react-router-dom";
import history from '../../../history/history'


export const MovieScratch = ({movie, options, added, addToCart, removeFromCart, authenticated}) => {
    return (
        <div className="product_item col-6 col-md-3 mb-2">
            <div className={(added) ? 'product_border_in_cart' : 'product_border'}/>
            <div className="product_image d-flex flex-column align-items-center justify-content-center">
                <img src={options.apiOptions.baseUrl + movie.cover_url} alt={movie.title}/>
            </div>
            <div className="product_content">
                <div className="product_price">${movie.loan_price}</div>
                <div>
                    {!added && <button className='btn btn-sm btn-primary' onClick={addToCart} data-index={movie.id}><i
                        className='fas fa-cart-plus'/> Add to cart</button>}
                    {added &&
                    <button className='btn btn-sm btn-danger' onClick={removeFromCart} data-index={movie.id}><i
                        className='fas fa-cart-plus'/> Remove from cart</button>}
                </div>
                <div className="product_name">
                    <div><Link to={'/movies/' + movie.id} data-index={movie.id}>{movie.title}</Link></div>
                </div>
            </div>
            {authenticated &&
            <div className="product_fav" data-index={movie.id} onClick={() => history.push('/movies/edit/' + movie.id)}><i
                className={'fas fa-edit' + ((added) ? ' remove-from-cart' : '')}/>
            </div>}
            <ul className="product_marks">
                <li className="product_mark product_discount">-25%</li>
                <li className="product_mark product_new">new</li>
            </ul>
        </div>
    )
};