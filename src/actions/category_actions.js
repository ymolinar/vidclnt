import axios from 'axios'
import {categoryConstants} from "../constants/category_constants";
import {options as globalOptions} from "../config/config";
import {rescue} from "../helpers/error";

export function startRequest() {
    return {type: categoryConstants.REQUEST_CATEGORY_ACTION}
}

export function requestSuccess() {
    return {type: categoryConstants.SUCCESS_CATEGORY_ACTION}
}

export function requestFailure(error) {
    return {type: categoryConstants.FAILED_CATEGORY_ACTION, payload: error}
}

export function setCategories(categories) {
    return {type: categoryConstants.SET_CATEGORIES, payload: categories}
}

export function getCategories() {
    return (dispatch) => {
        dispatch(startRequest());
        let options = {
            method: 'GET',
            url: `${globalOptions.apiOptions.baseUrl}/api/v1/categories`,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            json: true
        };
        return axios(options).then(response => {
            dispatch(requestSuccess());
            if (response.data.hasOwnProperty('acts_as_taggable_on/tags'))
                dispatch(setCategories(response.data['acts_as_taggable_on/tags']))
            else
                dispatch(setCategories(response.data))
        }).catch((error) => {
            dispatch(requestFailure(error));
            rescue(error);
        });
    }
}
