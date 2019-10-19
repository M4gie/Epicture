// CameraPicker.js

import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageServices from "../../services/image";

class CameraPicker extends React.Component {
  render() {
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
                  this.props.handleUploadLoading(false);
                })
                .catch(error => {
                  this.props.handleUploadLoading(false);
                  console.log(error);
                });
            })
            .catch(err => {
              console.log('openCamera catch' + err.toString());
            })
        }
      />
    );
  }
}

const styles = StyleSheet.create({});

export default CameraPicker;
