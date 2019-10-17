import request from '../shared/lib/AxiosWrap';
import {API_IMGUR_CLIENT_ID} from '../config';
import token from '../shared/lib/Token';

async function gallery(page) {
  const bearerToken = await token.getToken('BearerToken');
  return request({
    url: `/gallery/hot/viral/day/${page}?showViral=true&mature=true&album_previews=false`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
}

async function gallerySearch(page, search) {
  const bearerToken = await token.getToken('BearerToken');
  return request({
    url: `https://api.imgur.com/3/gallery/search/viral/all/${page}?q=${search}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
  });
}

function Album(token, id) {
  return request({
    url: `/gallery/album/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Client-ID ${API_IMGUR_CLIENT_ID}`,
    },
  });
}

function voting(galleryHash, vote) {
  return request({
    url: `gallery/${galleryHash}/vote/${vote}`,
    method: 'POST',
    headers: {
      Authorization: `Client-ID ${API_IMGUR_CLIENT_ID}`,
    },
  });
}

const GalleryServices = {
  gallery,
  gallerySearch,
  Album,
  voting,
};

export default GalleryServices;
