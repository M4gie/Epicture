import request from '../shared/lib/AxiosWrap'

function token(token) {
    return request({
        url: `/token`,
        method: 'POST',
        headers: {
            Authorization: ` Bearer ${token}`
        }
    });
}

const AlbumServices = {
    token
};

export default AlbumServices;
