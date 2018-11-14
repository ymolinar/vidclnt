import {cartConstants} from "../constants/cart_constants";

const initialState = {
    movies: [],
    loading: false,
    error: undefined
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case cartConstants.ADD:
            if (state.movies.filter(movie => movie.id === action.payload.id).length > 0)
                return state;
            return {...state, movies: [...state.movies, action.payload]};
        case cartConstants.REMOVE:
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload.id)};
        case cartConstants.REQUEST:
            return {...state, loading: true};
        case cartConstants.SUCCESS:
            return {...state, loading: false, error: null};
        case cartConstants.ERROR:
            return {...state, loading: false, error: action.payload};
        case cartConstants.CLEAR:
            return {...state, movies: []};
        default:
            return state;
    }
}
