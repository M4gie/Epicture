// GalleryPicker.js

import React from 'react';
import { Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageServices from "../../services/image";

const GalleryPicker = props => {
  const { handleUploadLoading } = props;
  return (
    <Button
      title={'Choisir une photo de la galerie'}
      onPress={() => {
        ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
          includeBase64: true,
        })
          .then(image => {
            this.props.handleUploadLoading(true);
            ImageServices.upload(image)
              .then(() => {
                handleUploadLoading(false);
              })
              .catch(error => {
                console.log(error);
                handleUploadLoading(false);
              });
          })
          .catch(error => {
            console.log(error);
          });
      }}
    />
  );
};

export default GalleryPicker;
