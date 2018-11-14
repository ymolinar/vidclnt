import {alertConstants} from '../constants/alert_constants'

export function success(message) {
    return {type: alertConstants.SUCCESS, payload: message};
}

export function error(message) {
    return {type: alertConstants.ERROR, payload: message};
}

export function clear() {
    return {type: alertConstants.CLEAR};
}