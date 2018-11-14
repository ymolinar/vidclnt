import React from 'react'
import history from '../../../history/history'

export const MovieDetail = ({selectedMovie, loadingMovie, options, added, addToCart, removeFromCart, authenticated}) => {
    return (
        <div className="single_product">
            <div className="container">
                {(loadingMovie) ? <div className='row'><h3>Loading movie...</h3></div> : (undefined === selectedMovie) ?
                    <div className='row'><h3>Movie not found.</h3></div> : <div className='row'>
                        <div className="col-lg-2 order-lg-1 order-2">
                            <ul className="image_list">
                                <li><img
                                    src={options.apiOptions.baseUrl + selectedMovie.cover_url}
                                    alt={selectedMovie.title}/>
                                </li>
                                <li><img
                                    src={options.apiOptions.baseUrl + selectedMovie.cover_url}
                                    alt={selectedMovie.title}/>
                                </li>
                                <li><img
                                    src={options.apiOptions.baseUrl + selectedMovie.cover_url}
                                    alt={selectedMovie.title}/>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-5 order-lg-2 order-1">
                            <div className="image_selected"><img
                                src={options.apiOptions.baseUrl + selectedMovie.cover_url}
                                alt={selectedMovie.title}/></div>
                        </div>
                        <div className="col-lg-5 order-3">
                            <div className="product_description">
                                <div className="product_category">
                                    {selectedMovie.categories.map(category => category.name).join(', ').toUpperCase()}
                                </div>
                                <div
                                    className="product_name">{selectedMovie.title} ({selectedMovie.release_date.substr(0, 4)})
                                </div>
                                <div className="product_text">
                                    <p>{selectedMovie.synopsis}</p>
                                </div>
                                <hr/>
                                <div>
                                    Directors: {selectedMovie.directors.map(director => director.name).join(', ').toUpperCase()}
                                </div>
                                <hr/>
                                <div>
                                    Writers: {selectedMovie.writers.map(writer => writer.name).join(', ').toUpperCase()}
                                </div>
                                <hr/>
                                <div>
                                    Cast: {selectedMovie.actors.map(actor => actor.name).join(', ').toUpperCase()}...
                                </div>
                                <div className="order_info d-flex flex-row">
                                    <div className="clearfix">
                                        <div className="product_quantity clearfix">
                                            <span><b>{selectedMovie.classification.toUpperCase()}</b></span>
                                        </div>
                                        <ul className="product_color">
                                            <li>
                                                <span>{selectedMovie.country.toUpperCase()}</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="product_price">${selectedMovie.loan_price}</div>
                                <div className="button_container">
                                    {!added(selectedMovie.id) &&
                                    <button type="button" className="btn btn-primary"
                                            onClick={() => {
                                                addToCart(selectedMovie)
                                            }}><i
                                        className="fas fa-cart-plus"/> Add to Cart
                                    </button>}
                                    {added(selectedMovie.id) &&
                                    <button type="button" className="btn-danger btn"
                                            onClick={() => {
                                                removeFromCart(selectedMovie)
                                            }}><i
                                        className="fas fa-cart-plus"/> Remove from Cart
                                    </button>}
                                    {authenticated &&
                                    <button type="button" className="btn btn-primary detail_edit_button" onClick={() => history.push('/movies/edit/' + selectedMovie.id)}>
                                        Edit
                                    </button>}
                                    <div className="product_fav"><i className="fas fa-heart"/></div>
                                </div>
                            </div>
                        </div>
                    </div>}
            </div>
        </div>
    )
};