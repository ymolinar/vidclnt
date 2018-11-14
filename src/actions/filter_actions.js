import {filterConstants} from "../constants/filter_constants";

export function setFilter(key, value = '') {
    return {
        type: filterConstants.SET_FILTER,
        payload: {key, value}
    }
}

export function setSort(field, direction = 'asc') {
    return {
        type: filterConstants.SET_SORT,
        payload: {field, direction}
    }
}

export function clearFilter() {
    return {type: filterConstants.CLEAR}
}

export function setPagination(pagination = {
    current_page: 1,
    next_page: undefined,
    prev_page: undefined,
    total_pages: 1,
    total_count: 1
}) {
    return {type: filterConstants.SET_PAGINATION, payload: pagination}
}