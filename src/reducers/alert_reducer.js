import {alertConstants} from '../constants/alert_constants';

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-requestSuccess',
                message: action.payload
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.payload
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
}