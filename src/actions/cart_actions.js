import {cartConstants} from "../constants/cart_constants";
import objectToFormData from "object-to-formdata";
import axios from "axios";
import {authenticationHeader} from "../helpers/authentication_header";
import {options} from "../config/config";
import {addLoan} from "../actions/loan_actions";
import {increaseLoansCounter} from "../actions/authentication_actions";
import history from "../history/history";
import {rescue} from "../helpers/error";

const URL = options.apiOptions.apiUrl;

export function checkout(user_id, movies) {
    return (dispatch) => {
        let ids = [];
        for (let i = 0; i < movies.length; i++) {
            ids.push(movies[i].id);
        }
        dispatch(startRequest());
        let data = objectToFormData({
            movie_ids: ids
        });
        return axios.post(`${URL}/users/${user_id}/loans`, data, {
            headers: {
                ...authenticationHeader(),
                'Content-Type': 'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }).then(response => {
            dispatch(requestSuccess());
            dispatch(addLoan(response.data.loan));
            dispatch(increaseLoansCounter());
            dispatch(clearCart());
            history.push('/user/profile/loans')
        }).catch(error => {
            rescue(error);
            dispatch(requestFailure(error.response || error))
        })
    };
}

export function startRequest() {
    return {type: cartConstants.REQUEST}
}

function requestSuccess() {
    return {type: cartConstants.SUCCESS}
}

function requestFailure(error) {
    return {type: cartConstants.ERROR, payload: error}
}

export function addMovie(movie) {
    return {type: cartConstants.ADD, payload: movie}
}

export function removeMovie(movie) {
    return {type: cartConstants.REMOVE, payload: movie}
}

export function clearCart() {
    return {type: cartConstants.CLEAR}
}
