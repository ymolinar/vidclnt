const getFromLocalStorage = (key, default_value = undefined) => {
    return JSON.parse(localStorage.getItem(key)) || default_value
};

export function authenticationHeader() {
    let user = getFromLocalStorage('user');

    if (user && user.token) {
        return {'Authorization': user.token};
    } else {
        return {};
    }
}

export function authenticationToken() {
    let user = getFromLocalStorage('user');

    if (user && user.token) {
        return user.token;
    } else {
        return undefined;
    }
}