import fetch from 'isomorphic-fetch';

function injectHeaders(options = {}) {

    options.headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers
    };

    return options;
}

export function apiFetch(...props) {
    props[1] = injectHeaders(props[1]);

    return new Promise((resolve, reject) => {
        fetch(...props).then(response => {
            if(response.status === 401) {
                return reject(false)
            } else if(response.status !== 200) {
                if(response.headers.has('Content-Type') && response.headers.get('Content-Type').indexOf('application/json') !== -1) {
                    response.json().then(error => reject(error))
                } else {
                    return reject(false)
                }
            } else {
                if(response.headers.has('Content-Type') && response.headers.get('Content-Type').indexOf('application/json') !== -1) {
                    response.json()
                        .then(data => { return resolve(data)})
                        .catch(error => {
                            return reject(error)
                        })
                } else {
                    return reject(false)
                }
            }
        }).catch(error => {
            return reject(error)
        })
    });
}