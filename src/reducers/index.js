import {combineReducers} from "redux";
import moviesReducer from "./movies_reducer";
import authenticationReducer from './authentication_reducer'
import filterReducer from './filter_reducer'
import categoryReducer from './category_reducer'
import cartReducer from './cart_reducer'
import {reducer as formReducer} from 'redux-form'
import {reducer as toastrReducer} from 'react-redux-toastr'
import loansReducer from "./loans_reducer";

export default combineReducers({
    movies: moviesReducer,
    authentication: authenticationReducer,
    form: formReducer,
    toastr: toastrReducer,
    filters: filterReducer,
    categories: categoryReducer,
    cart: cartReducer,
    loans: loansReducer
});