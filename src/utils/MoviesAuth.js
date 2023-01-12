import { checkResponse } from './checkResponse';

export const BASE_URL = 'https://api.atmalivefilms.nomoredomains.icu';

export const signup = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    }).then(checkResponse);
};

export const signin = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then(checkResponse);
};

export const signout = () => {
    return fetch(`${BASE_URL}/signout`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
};

// export const checkToken = (jwt) => {
//     return fetch(`${BASE_URL}/users/me`, {
//         method: 'GET',
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization" : `Bearer ${jwt}`
//         },
//     })
//         .then(checkResponse)
// }
