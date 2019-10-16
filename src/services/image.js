import request from '../shared/lib/AxiosWrap'
import token from "../shared/lib/Token";

async function favorite(imageHash) {
    const bearerToken = await token.getToken('BearerToken');
    return request({
        url: `/image/${imageHash}/favorite`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${bearerToken}`
        }
    });
}

const ImageServices = {
    favorite
};

export default ImageServices;
