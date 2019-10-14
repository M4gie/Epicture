// CircleImage.js

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

class CircleImage extends React.Component {
  render() {
    const pic = this.props.pic;
    const size = this.props.width;

    return (
      <Image
        resizeMode={'cover'}
        source={{uri: pic}}
        style={[styles.img_circle, {width: size, height: size}]}
      />
    );
  }
}

const styles = StyleSheet.create({
  img_circle: {
    borderRadius: 50,
    aspectRatio: 1,
  },
});

export default CircleImage;
