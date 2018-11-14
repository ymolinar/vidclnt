import {loanConstants} from "../constants/loan_constants";
import axios from 'axios'
import {rescue} from "../helpers/error";
import {options} from '../config/config'
import {authenticationHeader} from "../helpers/authentication_header";
import objectToFormData from "object-to-formdata";

const URL = options.apiOptions.apiUrl;

export function all(user_id) {
    return dispatch => {
        dispatch(startRequest());
        let parameters = {
            method: 'GET',
            url: `${options.apiOptions.apiUrl}/users/${user_id}/loans`,
            headers: {
                ...authenticationHeader(),
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(parameters).then(response => {
            dispatch(requestSuccess());
            dispatch({
                type: loanConstants.ALL,
                payload: response.data.loans
            });
        }).catch((error) => {
            rescue(error);
            dispatch(requestFailure(error))
        });
    }
}

export function returnLoan(user_id, loan_id) {
    return dispatch => {
        dispatch(startRequest());
        return axios.put(`${URL}/users/${user_id}/loans/${loan_id}`, objectToFormData({status: 'finished'}), {
            headers: {
                ...authenticationHeader(),
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            dispatch(requestSuccess());
            dispatch(closeLoan(response.data.loan))
        }).catch((error) => {
            rescue(error);
            dispatch(requestFailure(error))
        });
    }
}

export function startRequest() {
    return {type: loanConstants.REQUEST}
}

export function requestSuccess() {
    return {type: loanConstants.SUCCESS}
}

export function requestFailure(error) {
    return {type: loanConstants.ERROR, payload: error}
}

export function addLoan(loan) {
    return {type: loanConstants.ADD, payload: loan}
}

export function closeLoan(loan) {
    return {type: loanConstants.CLOSE, payload: loan}
}