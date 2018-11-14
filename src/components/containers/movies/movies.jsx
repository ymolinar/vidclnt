import React, {Component} from 'react'
import {MovieList} from "../../presentationals/movies/list";

export default class Movies extends Component {
    componentDidMount() {
        this.props.getMovies(this.props.initialFilters);
        this.props.getCategories();
    }

    addToCart = (e) => {
        e.preventDefault();
        let filtered = this.props.moviesState.movies.filter(movie => movie.id === parseInt(e.target.dataset.index))
        if (filtered.length > 0) {
            this.props.addToCart(filtered[0]);
        }
    };

    removeFromCart = (e) => {
        e.preventDefault();
        let filtered = this.props.cart.movies.filter(movie => movie.id === parseInt(e.target.dataset.index))
        if (filtered.length > 0) {
            this.props.removeFromCart(filtered[0]);
        }
    };

    isAdded = movie_id => {
        let found = false,
            index = 0;
        while (index < this.props.cart.movies.length && !found) {
            found = this.props.cart.movies[index].id === movie_id;
            index++
        }
        return found
    };

    handleSorting = (e) => {
        e.preventDefault();
        this.props.getMovies({...this.props.filters, sortBy: e.target.dataset.field});
        this.props.setSort(e.target.dataset.field, 'desc')
    };

    handlePageChange = (e) => {
        e.preventDefault();
        this.props.getMovies({...this.props.filters, current_page: e.target.dataset.index})
    };

    handleFilter = (e) => {
        e.preventDefault();
        this.props.getMovies({...this.props.filters, [e.target.parentNode.className]: e.target.innerText});
        this.props.setFilter(e.target.parentNode.className, e.target.innerText)
    };

    handleClearFilter = () => {
        this.props.clearFilter();
        this.props.getMovies(this.props.initialFilters);
    };

    render() {
        return (
            <MovieList movies={this.props.moviesState.movies} options={this.props.options}
                       loadingMovies={this.props.moviesState.loading} addToCart={this.addToCart}
                       loadingCategories={this.props.categoriesState.loading}
                       categories={this.props.categoriesState.categories} initialFilters={this.props.initialFilters}
                       removeFromCart={this.removeFromCart} added={this.isAdded} filters={this.props.filters}
                       handleSorting={this.handleSorting} handlePageChange={this.handlePageChange}
                       authenticated={this.props.authenticated}
                       handleClearFilter={this.handleClearFilter} handleFilter={this.handleFilter}/>
        );
    }
}