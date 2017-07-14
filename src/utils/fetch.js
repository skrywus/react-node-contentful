import fetch from 'isomorphic-fetch';

export const apiFetch = (url) => {

    const apiCall = fetch(url)
        .then(response => {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        });

    return apiCall;

};