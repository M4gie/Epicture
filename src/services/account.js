import request from '../shared/lib/AxiosWrap'
import token from "../shared/lib/Token";
import {API_IMGUR_CLIENT_ID} from "../config";

async function images(page) {
    const bearerToken = await token.getToken();
    return request({
        url: `/account/me/images/${page}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
}

async function favorites(page) {
    const bearerToken = await token.getToken();
    return request({
        url: `/account/me/gallery_favorites/${page}/newest`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
}

async function avatar() {
    const bearerToken = await token.getToken();
    return request({
        url: `/account/me/avatar`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
}

async function base() {
    return request({
        url: `/account/m4gie`,
        method: 'GET',
        headers: {
            Authorization: `Client-ID ${API_IMGUR_CLIENT_ID}`
        }
    });
}

const AccountServices = {
    images, favorites, avatar, base
};

export default AccountServices;
