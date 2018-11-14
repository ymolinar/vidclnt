import React from 'react'
import {MovieScratch} from "./scratch";
import '../../styles/movies.css'
import {MovieListBar} from "./bar";
import {MoviePaginator} from "./paginator";
import {MovieFilter} from "./filter";

export const MovieList = ({
                              movies, categories, loadingCategories, loadingMovies, options, added, addToCart,
                              removeFromCart, filters, handleSorting, handlePageChange, initialFilters, handleFilter, handleClearFilter, authenticated
                          }) => {
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <MovieFilter categories={categories} filters={filters} handleFilter={handleFilter}
                                     handleClearFilter={handleClearFilter} loadingCategories={loadingCategories}/>
                    </div>
                    <div className="col-lg-9">
                        {(loadingMovies) ? <h3>Loading movies...</h3> : (movies.length === 0) ?
                            <h3>No movies to load.</h3> : <div className="shop_content">
                                <MovieListBar filters={filters} handleSorting={handleSorting} count={movies.length}/>
                                <div className="row">
                                    {
                                        movies.map(
                                            movie => <MovieScratch key={movie.id} movie={movie} added={added(movie.id)}
                                                                   options={options} addToCart={addToCart}
                                                                   removeFromCart={removeFromCart} authenticated={authenticated}/>
                                        )
                                    }
                                </div>
                                <MoviePaginator handlePageChange={handlePageChange} filters={filters}/>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    )
};