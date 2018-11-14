import {filterConstants} from "../constants/filter_constants";

const initialState = {
    classification: undefined,
    category: undefined,
    sortBy: 'release_date',
    sortDirection: 'desc',
    current_page: 1,
    next_page: undefined,
    prev_page: undefined,
    total_pages: 1,
    total_count: 1
};

export default function filterReducer(state = initialState, action) {
    switch (action.type) {
        case filterConstants.SET_FILTER:
            return {...state, [action.payload.key]: action.payload.value, page: 1};
        case filterConstants.SET_SORT:
            return {...state, sortBy: action.payload.field, sortDirection: action.payload.direction};
        case filterConstants.CLEAR:
            return initialState;
        case filterConstants.SET_PAGINATION:
            return {...state, ...action.payload};
        default:
            return state
    }
}

export {initialState}