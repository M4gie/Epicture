// CircleImage.js

import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CircleImage = props => {
  const { size, pic } = props;

  return (
    <Image
      resizeMode={'cover'}
      source={{ uri: pic }}
      style={[styles.img_circle, { width: size, height: size }]}
    />
  );
};

const styles = StyleSheet.create({
  img_circle: {
    borderRadius: 50,
    aspectRatio: 1,
  },
});

export default CircleImage;
