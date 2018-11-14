import React from 'react'

export const CartList = ({movies, options, removeFromCart, clearCart, checkout, user}) => {
    const cartTotal = () => {
        if (1 === movies.length) {
            return movies[0].loan_price
        }
        return movies.reduce((first, second) => {
            let sum;
            if ('object' === typeof first) {
                sum = parseFloat(first.loan_price)
            } else {
                sum = parseFloat(first)
            }
            return sum + parseFloat(second.loan_price)
        })
    };
    return (
        <div className="cart_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className={'cart_container'}>
                            <div className="cart_title">Loans Cart</div>
                        </div>
                        {(movies.length === 0) ? <div>
                            <hr/>
                            <h1>Your cart is empty</h1></div> : <div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {movies.map(movie => {
                                        return (
                                            <li className="cart_item clearfix" key={movie.id}>
                                                <div className="cart_item_image">
                                                    <img src={options.apiOptions.baseUrl + movie.cover_url}
                                                         alt={movie.title}/>
                                                </div>
                                                <div
                                                    className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Name</div>
                                                        <div className="cart_item_text">{movie.title}</div>
                                                    </div>
                                                    <div className="cart_item_color cart_info_col">
                                                        <div className="cart_item_title">Duration</div>
                                                        <div className="cart_item_text">{movie.duration}</div>
                                                    </div>
                                                    <div className="cart_item_color cart_info_col">
                                                        <div className="cart_item_title">Release Date</div>
                                                        <div className="cart_item_text">{movie.release_date}</div>
                                                    </div>
                                                    <div className="cart_item_quantity cart_info_col">
                                                        <div className="cart_item_title">Country</div>
                                                        <div className="cart_item_text">{movie.country}</div>
                                                    </div>
                                                    <div className="cart_item_price cart_info_col">
                                                        <div className="cart_item_title">Price</div>
                                                        <div className="cart_item_text">${movie.loan_price}</div>
                                                    </div>
                                                </div>
                                                <div
                                                    className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                                                    <div className="cart_item_name cart_info_col">
                                                        <div className="cart_item_title">Classification</div>
                                                        <div className="cart_item_text">{movie.classification}</div>
                                                    </div>
                                                    <div className="cart_item_color cart_info_col">
                                                        <div className="cart_item_title">-</div>
                                                        <div className="cart_item_text">
                                                            <button onClick={() => {
                                                                removeFromCart(movie)
                                                            }} className={'btn btn-danger'}><i
                                                                className='fas fa-cart-plus'/> Remove from Cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="order_total">
                                <div className="order_total_content text-md-right">
                                    <div className="order_total_title">Order Total:</div>
                                    <div className="order_total_amount">${cartTotal()}</div>
                                </div>
                            </div>
                            <div className="cart_buttons">
                                <button type="button" className="button cart_button_clear" onClick={() => {
                                    clearCart()
                                }}>Cancel
                                </button>
                                {user &&
                                <button type="button" className="button cart_button_checkout" onClick={() => {
                                    checkout(user.id, movies)
                                }}>Checkout</button>}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
};