import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Movies from "../../containers/movies/movies";
import {Page404} from "../../presentationals/system/404";
import {initialState} from "../../../reducers/filter_reducer";
import Movie from "../../containers/movies/movie";
import MovieFormPage from "../../containers/pages/movie";
import AuthenticatedRoute from "../../hoc/authenticated_route";


export const MoviePage = (props) => {
    return (
        <Switch>
            <AuthenticatedRoute path={`${props.match.path}/edit/:id`} exact
                                render={properties => <MovieFormPage {...properties}
                                                                     match={properties.match}
                                                                     loadingMovie={props.movies.loading}
                                                                     selectedMovie={props.movies.selected_movie}
                                                                     updateMovie={props.movieActions.updateMovie}
                                                                     getMovie={props.movieActions.getMovie}/>}/>
            <AuthenticatedRoute path={`${props.match.path}/new`} exact
                                render={properties => <MovieFormPage {...properties}
                                                                     match={properties.match}
                                                                     loadingMovie={props.movies.loading}
                                                                     addMovie={props.movieActions.addMovie}
                                                                     getMovie={props.movieActions.getMovie}/>}/>
            <Route path={`${props.match.path}/:id`} exact
                   render={properties => <Movie {...properties} moviesState={props.movies} cart={props.cart}
                                                getMovie={props.movieActions.getMovie} options={props.options}
                                                removeFromCart={props.cartActions.removeMovie}
                                                authenticated={props.authentication.authenticated}
                                                addToCart={props.cartActions.addMovie}/>}/>
            <Route path={`${props.match.path}`} exact
                   render={properties => <Movies {...properties} initialFilters={initialState}
                                                 moviesState={props.movies} cart={props.cart}
                                                 categoriesState={props.categories}
                                                 getMovies={props.movieActions.getMovies}
                                                 getCategories={props.categoryActions.getCategories}
                                                 addToCart={props.cartActions.addMovie}
                                                 setFilter={props.filterActions.setFilter}
                                                 clearFilter={props.filterActions.clearFilter}
                                                 options={props.options}
                                                 authenticated={props.authentication.authenticated}
                                                 removeFromCart={props.cartActions.removeMovie}
                                                 setSort={props.filterActions.setSort} filters={props.filters}/>}/>
            <Route component={Page404}/>
        </Switch>
    )
};