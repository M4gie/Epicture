// CameraPicker.js

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

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
          })
            .then(image => {
              console.log(image);
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
