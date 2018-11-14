import {authenticationConstants} from '../constants/authentication_constants'
import {options} from '../config/config';
import {compose} from "../helpers/call";


const userFullName = user => {
    let name;
    name = user.first_name;
    if (user.middle_name) {
        name += ' ' + user.middle_name
    }
    if (user.last_name) {
        name += ' ' + user.last_name
    }
    return {...user, full_name: name}
};

const parseUserAvatar = user => {
    if ('avatar_2x.png' === user.avatar_url) {
        return {...user, avatar_url: options.url + '/images/avatar_2x.png'}
    }
    return {...user, avatar_url: options.apiOptions.baseUrl + user.avatar_url}
};

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? {
    authenticated: true,
    authenticating: false,
    user: compose(userFullName, parseUserAvatar)(user),
    error: undefined
} : {
    authenticated: false,
    authenticating: false,
    user: undefined,
    error: undefined
};

export default function authenticationReducer(state = initialState, action) {
    switch (action.type) {
        case authenticationConstants.INCREASE_LOANS_COUNTER:
            return {...state, user: {...state.user, loans_counter: state.user.loans_counter + 1}};
        case authenticationConstants.DECREASE_LOANS_COUNTER:
            return {...state, user: {...state.user, loans_counter: state.user.loans_counter - 1}};
        case authenticationConstants.AUTHENTICATION_REQUEST:
            return {
                ...state, authenticating: true, error: undefined
            };
        case authenticationConstants.AUTHENTICATION_REQUEST_SUCCESS:
            return {
                ...state,
                authenticating: false,
                authenticated: true,
                user: compose(userFullName, parseUserAvatar)(action.payload),
                error: undefined
            };
        case authenticationConstants.AUTHENTICATION_LOGOUT_SUCCESS:
            return {
                ...state, authenticating: false, authenticated: false, user: undefined, error: undefined
            };
        case authenticationConstants.AUTHENTICATION_REQUEST_FAILURE:
            return {
                ...state, authenticating: false, authenticated: false, user: undefined, error: action.payload
            };
        default:
            return state
    }
}