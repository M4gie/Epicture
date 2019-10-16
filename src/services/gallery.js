import request from '../shared/lib/AxiosWrap'
import {API_IMGUR_CLIENT_ID} from "../config";

function Album(token, id) {
    return request({
        url: `/gallery/album/${id}`,
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${API_IMGUR_CLIENT_ID}`
        }
    });
}

const GalleryServices = {
    Album
};

export default GalleryServices;
