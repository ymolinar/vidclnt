import {movieConstants} from '../constants/movies_constants'

const initialState = {
    movies: [],
    selected_movie: undefined,
    loading: false,
    error: undefined
};

export default function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case movieConstants.SET_MOVIES:
            return {...state, movies: action.payload, selected_movie: undefined};
        case movieConstants.ADD_MOVIE:
            return {...state, movies: [...state.movies, action.payload]};
        case movieConstants.SELECT_MOVIE:
            return {...state, selected_movie: action.payload};
        case movieConstants.UPDATE_MOVIE:
            return {
                ...state,
                movies: [...state.movies.filter(movie => movie.id !== action.payload.id), action.payload]
            };
        case movieConstants.DELETE_MOVIE:
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload.id)};
        case movieConstants.REQUEST_MOVIE_ACTION:
            return {...state, loading: true};
        case movieConstants.SUCCESS_MOVIE_ACTION:
            return {...state, loading: false, error: null};
        case movieConstants.FAILED_MOVIE_ACTION:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}