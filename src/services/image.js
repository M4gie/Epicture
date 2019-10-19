import request from '../shared/lib/AxiosWrap';
import token from '../shared/lib/Token';

/*const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});*/

async function upload(image) {
  const bearerToken = await token.getToken('BearerToken');
  return request({
    url: "/upload",
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
    },
    data: {
      type: 'base64',
      image: `${image.data}`
    }
  });
}

const ImageServices = {
  upload,
};

export default ImageServices;
