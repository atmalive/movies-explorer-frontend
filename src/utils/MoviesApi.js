import { checkResponse } from './checkResponse';

export const MOVIES_URL = 'https://api.nomoreparties.co/';

export const getMovies = () => {
    return fetch(`${MOVIES_URL}beatfilm-movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(checkResponse);
};
