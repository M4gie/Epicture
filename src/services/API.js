import Axios from "axios"

const API = {
    getHeaders(accessToken) {
        return {
            Accept: accept,
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        };
    },

    makeRequest(path, key, reqInit, options = {}) {
        abortPendingRequests(key);
        const headers = this.getHeaders(accessToken);
        const option = getDefaultOptions(options);
        const init = Object.assign({}, reqInit, { headers });
        Axios({
            url,
            ...init,
            timeout: 30000,
            withCredentials: process.env.NODE_ENV === 'production',
            cancelToken: new CancelToken(function executor(c) {
                _pendingRequests[key] = c;
            }),
        })
            .then(res => processResponse(res))
            .then(res => {
                handleResponse(key, option, res, res.data);
            })
            .catch((err) => {
                // error handling logic
            });
    },

    getParams(queryParams = {}) {
        return queryParams;
    },

    makeGetRequest(path, key, queryParams, options = {}) {
        const getData = {
            method: 'GET',
            params: this.getParams(queryParams),
            paramsSerializer: (params) => {
                return qs.stringify(sanitizeParams(params), { arrayFormat: 'brackets' });
            },
        };
        this.makeRequest(path, key, getData, options);
    },

    makePostRequest(path, key, body, options = {}) {
        const postData = {
            method: 'POST',
            data: body,
            params: this.getParams(),
            paramsSerializer: (params) => {
                return qs.stringify(sanitizeParams(params), { arrayFormat: 'brackets' });
            },
        };
        this.makeRequest(path, key, postData, options);
    },

    makePutRequest(path, key, body, options = {}) {
        const putData = {
            method: 'PUT',
            data: body,
            params: this.getParams(),
            paramsSerializer: (params) => {
                return qs.stringify(sanitizeParams(params), { arrayFormat: 'brackets' });
            },
        };
        this.makeRequest(path, key, putData, options);
    },

    config,
};
