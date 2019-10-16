// GalleryPicker.js

import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class GalleryPicker extends React.Component {
  render() {
    return (
      <Button
        title={'Choisir une photo de la galerie'}
        onPress={() =>
          ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            console.log(image);
          })
        }
      />
    );
  }
}

const styles = StyleSheet.create({});

export default GalleryPicker;
