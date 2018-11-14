import {movieConstants} from "../constants/movies_constants";
import {setPagination} from "../actions/filter_actions";
import axios from "axios";
import {rescue} from "../helpers/error";
import objectToFormData from "object-to-formdata";
import {reset} from "redux-form";
import {authenticationHeader} from "../helpers/authentication_header";
import {compose} from "../helpers/call";
import {options} from '../config/config'
import history from '../history/history'


const URL = options.apiOptions.apiUrl;

const parseFilters = filters => {
    let outcome = {};
    for (const key in filters) {
        if (filters.hasOwnProperty(key) && filters[key]) {
            outcome[key] = filters[key];
        }
    }
    return outcome
};

const prepareData = function (data) {
    let outcome = {...data};
    if (outcome.cover)
        outcome.cover = outcome.cover[0];
    if (outcome.category_list) {
        outcome.category_list = outcome.category_list.join(',')
    }
    if (outcome.director_list) {
        outcome.director_list = outcome.director_list.join(',')
    }
    if (outcome.writer_list) {
        outcome.writer_list = outcome.writer_list.join(',')
    }
    if (outcome.actor_list) {
        outcome.actor_list = outcome.actor_list.join(',')
    }
    return outcome
};

export function selectMovie(movie) {
    return {type: movieConstants.SELECT_MOVIE, payload: movie}
}

export function startRequest() {
    return {type: movieConstants.REQUEST_MOVIE_ACTION}
}

export function requestSuccess() {
    return {type: movieConstants.SUCCESS_MOVIE_ACTION}
}

export function requestFailure(error) {
    return {type: movieConstants.FAILED_MOVIE_ACTION, payload: error}
}

export function setMovies(movies) {
    return {type: movieConstants.SET_MOVIES, payload: movies}
}

const doMovieAction = (movie, create = true) => {
    return (dispatch) => {
        dispatch(startRequest());
        let data = compose(prepareData, objectToFormData)(movie),
            headers = {
                ...authenticationHeader(),
                'Content-Type': 'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest',
            },
            axiosRequest;
        if (create) {
            axiosRequest = axios.post(`${URL}/movies`, data, {
                headers: headers
            });
        } else {
            axiosRequest = axios.put(`${URL}/movies/${movie.id}`, data, {
                headers: headers
            });
        }
        return axiosRequest.then(response => {
            dispatch(requestSuccess());
            dispatch(reset('movieForm'));
            dispatch({
                type: (create) ? movieConstants.ADD_MOVIE : movieConstants.UPDATE_MOVIE,
                payload: response.data.movie
            });
            history.push('/movies/' + response.data.movie.id)
        }).catch(error => {
            rescue(error);
            dispatch(requestFailure(error.response || error))
        })
    };
};

export function updateMovie(movie) {
    return doMovieAction(movie, false);
}

export function addMovie(movie) {
    return doMovieAction(movie)
}


export function getMovie(id) {
    return (dispatch) => {
        dispatch(startRequest());
        let options = {
            method: 'GET',
            url: `${URL}/movies/${id}`,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(options).then(response => {
            dispatch(requestSuccess());
            dispatch(selectMovie(response.data.movie))
        }).catch((error) => {
            rescue(error);
            dispatch(requestFailure(error));
            if (error.response && error.response.status === 404) {
                dispatch(selectMovie(undefined))
            }

        });
    }
}

export function getMovies(filters = {}) {
    return (dispatch) => {
        dispatch(startRequest());
        let options = {
            method: 'GET',
            url: `${URL}/movies`,
            params: parseFilters(filters),
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(options).then(response => {
            dispatch(requestSuccess());
            dispatch(setMovies(response.data.movies));
            dispatch(setPagination(response.data.meta))
        }).catch((error) => {
            rescue(error);
            dispatch(requestFailure(error))
        });
    }
}
