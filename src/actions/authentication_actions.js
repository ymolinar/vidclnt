import {authenticationConstants} from '../constants/authentication_constants'
import axios from 'axios';
import objectToFormData from 'object-to-formdata'
import {reset} from "redux-form";
import {rescue} from "../helpers/error";
import {authenticationHeader, authenticationToken} from "../helpers/authentication_header";
import {options} from '../config/config'

const authenticationURL = options.apiOptions.authUrl;
const URL = options.apiOptions.apiUrl;

export function requestFailure(error) {
    return {type: authenticationConstants.AUTHENTICATION_REQUEST_FAILURE, payload: error}
}

export function requestStart() {
    return {type: authenticationConstants.AUTHENTICATION_REQUEST}
}

export function logoutSuccess() {
    return {type: authenticationConstants.AUTHENTICATION_LOGOUT_SUCCESS}
}

export function requestSuccess(user) {
    return {type: authenticationConstants.AUTHENTICATION_REQUEST_SUCCESS, payload: user}
}

export function login(email, password) {
    return (dispatch) => {
        dispatch(requestStart());
        let options = {
            method: 'POST',
            url: `${authenticationURL}/login`,
            data: {user: {email, password}},
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(options).then(response => {
            let user = {...response.data.user, token: response.headers.authorization};
            dispatch(reset('loginForm'));
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(requestSuccess(user));
        }).catch(error => {
            rescue(error);
            dispatch(requestFailure(error))
        });
    };
}

export function logout(user) {
    return (dispatch) => {
        dispatch(logoutSuccess());
        localStorage.removeItem('user');
        dispatch(requestStart());
        let options = {
            method: 'DELETE',
            url: `${authenticationURL}/logout`,
            headers: {
                ...authenticationHeader(),
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(options).then(() => {
            dispatch(logoutSuccess(user));
        }).catch((error) => {
            rescue(error);
            dispatch(requestFailure(error))
        });
    };
}

export function register(values) {
    return (dispatch) => {
        dispatch(requestStart());
        if (values.avatar)
            values.avatar = values.avatar[0];
        let data = objectToFormData({user: values});
        return axios.post(authenticationURL, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(response => {
            let user = {...response.data.user, token: response.headers.authorization};
            dispatch(reset('registerForm'));
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(requestSuccess(user));
        }).catch(error => {
            rescue(error);
            dispatch(requestFailure(error))
        })
    };
}

export function profile(user_id) {
    return (dispatch) => {
        dispatch(requestStart());
        let options = {
            method: 'GET',
            url: `${URL}/users/${user_id}`,
            headers: {
                ...authenticationHeader(),
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(options).then(response => {
            let user = {...response.data.user, token: authenticationToken()};
            localStorage.setItem('user', JSON.stringify(user));
            dispatch(requestSuccess(user))
        }).catch(error => {
            rescue(error);
            dispatch(requestFailure(error))
        });
    };
}

export function increaseLoansCounter() {
    return {type: authenticationConstants.INCREASE_LOANS_COUNTER}
}

export function decreaseLoansCounter() {
    return {type: authenticationConstants.DECREASE_LOANS_COUNTER}
}