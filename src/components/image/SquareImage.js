// SquareImage.js

import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

class SquareImage extends React.Component {
  render() {
    console.log('je passe dans le meilleur ocmponent');
    const item = this.props.item;
    console.log(item.thumbnail);

    return (
      <TouchableOpacity
        style={{flex: 1 / 3, aspectRatio: 1, padding: 1}}
        onPress={() => alert('image touched')}>
        <Image style={{flex: 1}} resizeMode="cover" source={item.thumbnail} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

export default SquareImage;
