// CircleImage.js

import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

class CircleImage extends React.Component {
  render() {
    const pic = this.props.pic;

    return <Image resizeMode={'cover'} source={{uri: pic}} style={styles.img_circle} />;
  }
}

const styles = StyleSheet.create({
  img_circle: {
    borderRadius: 50,
    flex: 1,
    width: '100%',
    aspectRatio: 1,
  },
});

export default CircleImage;
