// SquareImage.js

import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

class SquareImage extends React.Component {
  render() {
    const item = this.props.item;

    return (
      <TouchableOpacity style={{flex: 1 / 3, aspectRatio: 1, padding: 1}}>
        <Image style={{flex: 1}} resizeMode="cover" source={item.thumbnail} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

export default SquareImage;
