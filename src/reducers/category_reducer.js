import {categoryConstants} from "../constants/category_constants";

const initialState = {
    categories: [],
    loading: false,
    error: null
};

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
        case categoryConstants.SET_CATEGORIES:
            return {...state, categories: action.payload};
        case categoryConstants.REQUEST_CATEGORY_ACTION:
            return {...state, loading: true};
        case categoryConstants.SUCCESS_CATEGORY_ACTION:
            return {...state, loading: false, error: null};
        case categoryConstants.FAILED_CATEGORY_ACTION:
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}
