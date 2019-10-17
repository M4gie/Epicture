import request from '../shared/lib/AxiosWrap'
import token from "../shared/lib/Token";

async function favorite(albumId) {
    const bearerToken = await token.getToken('BearerToken');
    return request({
        url: `/album/${albumId}/favorite`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
    });
}

const AlbumServices = {
    favorite
};

export default AlbumServices;
