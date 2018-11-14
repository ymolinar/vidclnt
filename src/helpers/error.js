import {toastr} from "react-redux-toastr";
import history from '../history/history'

export const rescue = (error, icon = 'error', status = 'error') => {
    if (error.response && error.response.status === 401){
        return history.push('/auth/logout')
    }
    let message = (error.response !== undefined) ? error.response.data.message || error.response.data.error : error.message;
    toastr.light('Error', message, {icon: icon, status: status})
};