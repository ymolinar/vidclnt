import React, {Component} from 'react'
import {MovieDetail} from "../../presentationals/movies/detail";

export default class Movie extends Component {
    componentDidMount() {
        this.props.getMovie(this.props.match.params.id)
    }

    isAdded = movie_id => {
        let found = false,
            index = 0;
        while (index < this.props.cart.movies.length && !found) {
            found = this.props.cart.movies[index].id === movie_id;
            index++
        }
        return found
    };

    render() {
        return <MovieDetail selectedMovie={this.props.moviesState.selected_movie} addToCart={this.props.addToCart}
                            loadingMovie={this.props.moviesState.loading} options={this.props.options}
                            added={this.isAdded} removeFromCart={this.props.removeFromCart} authenticated={this.props.authenticated}/>;
    }
}