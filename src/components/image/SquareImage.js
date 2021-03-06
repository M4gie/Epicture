// SquareImage.js

import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const SquareImage = props => {
  const {item} = props.item;

  return (
    <TouchableOpacity style={styles.imageContainer}>
      <Image style={{flex: 1}} resizeMode="cover" source={item.thumbnail} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1 / 3,
    aspectRatio: 1,
    padding: 1,
  },
});

export default SquareImage;
