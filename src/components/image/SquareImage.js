// SquareImage.js

import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

class SquareImage extends React.Component {
  render() {
    const item = this.props.item;
    const index = this.props.index;

    return (
      <View>
        <TouchableOpacity
          onPress={() => alert('image ' + (index + 1) + ' touched')}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={item.thumbnail}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SquareImage;
