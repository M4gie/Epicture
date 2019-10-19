// GalleryPicker.js

import React from 'react';
import { Button, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import ImageServices from "../../services/image";

class GalleryPicker extends React.Component {
  render() {
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
                  this.props.handleUploadLoading(false);
                })
                .catch(error => {
                  console.log(error);
                  this.props.handleUploadLoading(false);
                });
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});

export default GalleryPicker;
