import request from '../shared/lib/AxiosWrap';
import { API_IMGUR_CLIENT_ID } from "../config";
import token from "../shared/lib/Token";

async function gallery(page) {
  const bearerToken = await token.getToken('BearerToken');
  return request({
    url: `/gallery/hot/viral/day/${page}?showViral=true&mature=true&album_previews=false`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    }
  });
}

async function gallerySearch(page, search) {
  const bearerToken = await token.getToken('BearerToken');
  return request({
    url: `https://api.imgur.com/3/gallery/search/viral/all/${page}?q=${search}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    }
  });
}

const GalleryServices = {
  gallery,
  gallerySearch
};

export default GalleryServices;
