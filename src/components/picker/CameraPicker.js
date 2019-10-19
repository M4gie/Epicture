// CameraPicker.js

import React from 'react';
import { Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageServices from "../../services/image";

const CameraPicker = props => {
  const { handleUploadLoading } = props;
  return (
    <Button
      title={'Prendre une photo'}
      onPress={() =>
        ImagePicker.openCamera({
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
                handleUploadLoading(false);
                console.log(error);
              });
          })
          .catch(err => {
            console.log('openCamera catch' + err.toString());
          })
      }
    />
  );
};

export default CameraPicker;
